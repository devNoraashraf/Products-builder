import type { Iproduct } from "../interfaces";

// validation.ts
export function productValidation(product: Partial<Iproduct>) {
  const errors: { [key: string]: string } = {};

  if (!product.title) {
    errors.title = "Title is required";
  }

  if (!product.description) {
    errors.description = "Description is required";
  }

  if (!product.price) {
    errors.price = "Price is required";
  }

  if (!product.imageURL) {
    errors.imageURL = "Image URL is required";
  }

  return errors;
}
