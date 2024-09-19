import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";

export function ProductsPage() {
  return (
    <main>
      <ProductsNew />
      <ProductsIndex />
    </main>
  );
}
