import {Component, Input, OnInit} from '@angular/core';
import {CategoriesService} from "../../service/categories.service";

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  categories$;
  @Input('category')
  category: string | null = '';

  constructor(categoryService:CategoriesService) {
    this.categories$ = categoryService.getAll();
  }

  ngOnInit(): void {
  }

}
