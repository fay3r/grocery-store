import {Component, OnInit} from '@angular/core';
import {CategoriesService} from "../../../service/categories.service";
import {ProductService} from "../../../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$: any;
  product: any = {};
  id: string | null;

  constructor(private categoryService: CategoriesService,
              private productService: ProductService,
              private router: Router,
              private route: ActivatedRoute) {
    this.categories$ = categoryService.getAll();

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.productService.get(this.id).valueChanges().pipe(take(1)).subscribe(p => this.product = p);
    }
  }

  ngOnInit(): void {
  }

  save(product: any) {
    if (this.id) {
      this.productService.update(this.id, product);
    } else {
      this.productService.create(product);
    }
    this.router.navigate(['/admin/products']);
  }

  delete() {
    if (!confirm('Sure?')) {
      return;
    }
    // @ts-ignore
    this.productService.delete(this.id);
    this.router.navigate(['/admin/products']);

  }
}
