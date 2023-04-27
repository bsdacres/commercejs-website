import { For, createEffect, createResource,createSignal} from "solid-js";
import commerce from "~/lib/commerce";
import { useRouteData } from "solid-start";
import { createRouteData } from "solid-start";
import Product from "~/components/Product";
import styles from "./styles.module.css"



export default function Store() {
  const [products, setProducts] = createSignal([])

  createEffect(()=>{
    commerce.products.list().then((res) => {
      setProducts(res.data);
    });
  })

  return (
  <div class={styles.store}>
    <div class={styles.products}>
      {products().map((product) => (<Product key={product.id} {...product} />))}
    </div>
    </div>
  )
}

