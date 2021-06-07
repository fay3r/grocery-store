export interface Product {
  key: string;
  title: string;
  price: number;
  category: string;
  imageUrl: string;
}

export function createProductArray(array: any[]): Product[] {
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
