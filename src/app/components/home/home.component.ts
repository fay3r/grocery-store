import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {createProductArray, Product} from "../../models/product";
import {Subscription} from "rxjs";
import {MatTableDataSource} from "@angular/material/table";
import {CategoriesService} from "../../service/categories.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories$
  products: Product[] = [];
  subscription: Subscription | undefined;
  category: string | null = '';
  filteredProduct: Product[] | undefined;

  constructor(private productService: ProductService,
              private categoryService: CategoriesService,
              private route: ActivatedRoute) {

    this.categories$ = categoryService.getAll();
    this.subscription = this.productService.getAll().subscribe(products => {
      this.products = createProductArray(products);
      route.queryParamMap.subscribe(params => {
        this.category = params.get('category');
        this.filteredProduct = this.category ? this.products.filter(p => p.category == this.category) : this.products;
      });
    });


  }

  ngOnInit(): void {

  }


}
