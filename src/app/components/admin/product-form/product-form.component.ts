import { Component, OnInit } from '@angular/core';
import {CategoriesService} from "../../../service/categories.service";
import {ProductService} from "../../../service/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$:any;

  constructor(private categoryService: CategoriesService,
              private productService:ProductService,
              private router:Router) {
    this.categories$ = categoryService.getCategories();
  }

  ngOnInit(): void {
  }

  save(product: any) {
    this.productService.create(product);
    this.router.navigate(['/admin/products']);
  }
}
