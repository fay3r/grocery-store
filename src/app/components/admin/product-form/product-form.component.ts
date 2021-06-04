import { Component, OnInit } from '@angular/core';
import {CategoriesService} from "../../../service/categories.service";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$:any;

  constructor(private categoryService: CategoriesService) {
    this.categories$ = categoryService.getCategories().valueChanges();
  }

  ngOnInit(): void {
  }

}
