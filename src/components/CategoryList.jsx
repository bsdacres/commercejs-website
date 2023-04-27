import { A } from "solid-start";
import Category from "./Category";

export default function CategoryList({ categories }) {
  if (!categories) return null;

  return (
    <ul>
      {categories.map((category) => (
        <li key={category.slug}>
          <A href={`/categories/${category.slug}`}>
            <a>
              <Category {...category} />
            </a>
          </A>
        </li>
      ))}
    </ul>
  );
}
