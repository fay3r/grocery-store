import {Product} from "./product";
import {map} from "rxjs/operators";

export interface ShoppingCartItem{
  product: Product;
  quantity: number;
}

export function createShoppingItems(array:any): ShoppingCartItem[] {
  let items:ShoppingCartItem[] = [];
  // @ts-ignore
  array.pipe(value => {
    items.push(  {
      product:{ key: value.product.key,
        title: value.product.title,
        price: value.product.price,
        imageUrl: value.product.imageUrl,
        category: value.product.category
      },
      quantity: value.quantity
    })
  })


  return items;
}
