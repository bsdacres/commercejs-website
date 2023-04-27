
import { A } from "@solidjs/router";
import Product from "./Product";

export default function ProductList({ products }) {
  if (!products) return null;

  return (
    <ul>
      {products.map((product) => (
        <li key={product.permalink}>
          <A href={`/products/${product.permalink}`}>
            <A>
              <Product {...product} />
            </A>
          </A>
        </li>
      ))}
    </ul>
    );
  }