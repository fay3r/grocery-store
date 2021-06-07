import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {createProductArray, Product} from "../../models/product";
import {ActivatedRoute} from "@angular/router";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];
  category: string | null = '';
  filteredProduct: Product[] | undefined;

  constructor(private productService: ProductService,
              private route: ActivatedRoute) {

    this.productService.getAll().pipe(switchMap(products => {
        this.products = createProductArray(products);
        return route.queryParamMap;
      }))
      .subscribe(params => {
        this.category = params.get('category');
        this.filteredProduct = this.category ? this.products.filter(p => p.category == this.category) : this.products;
      });
  }

  ngOnInit(): void {

  }


}
