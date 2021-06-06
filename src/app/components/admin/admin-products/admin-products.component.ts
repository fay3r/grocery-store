import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
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

  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator ;
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort ;

  constructor(private productService: ProductService) {
    this.filteredProduct = new MatTableDataSource();
    this.subscription = this.productService.getAll().subscribe(products => {
      this.products = createProductArray(products);
      this.filteredProduct = new MatTableDataSource<Product>(this.products);
      console.log('const')
      this.filteredProduct.filterPredicate =
        (data: Product, filter: string) => data.title.toLowerCase().indexOf(filter) != -1;
      this.filteredProduct.paginator = this.paginator;
      this.filteredProduct.sort = this.sort;
    });

  }

  ngOnInit(): void {
  }

  filter(query:string) {
    query = query.trim(); // Remove whitespace
    query = query.toLowerCase();
    this.filteredProduct.filter = query;
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
