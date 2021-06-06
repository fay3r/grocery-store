import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ProductService} from "../../../service/product.service";
import {Subscription} from "rxjs";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {Product} from "../../../models/product";

@Component({
  selector: 'admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css'],

})


export class AdminProductsComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  subscription: Subscription;
  filteredProduct: MatTableDataSource<Product>;
  columnsToDisplay = ['title', 'price'];

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  ngAfterViewInit() {
    // @ts-ignore
    this.filteredProduct.paginator = this.paginator;
    // @ts-ignore
    this.filteredProduct.sort = this.sort;
  }

  constructor(private productService: ProductService) {
    this.filteredProduct = new MatTableDataSource();
    this.subscription = this.productService.getAll().subscribe(products => {
      this.products = createProductArray(products);
      this.filteredProduct = new MatTableDataSource<Product>(this.products);
      console.log('fil',this.filteredProduct.data);
    });
  }

  ngOnInit(): void {
  }

  filter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filteredProduct.filter = filterValue.trim().toLowerCase()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

function createProductArray(array: any[]): Product[] {
  let products: Product[] = [];
  array.map(value => {
    products.push({
        category: value.payload.val().category,
        imageUrl: value.payload.val().imageUrl,
        price: value.payload.val().price,
        title: value.payload.val().title,
        key: value.key
      }
    );
  })
  return products;
}
