import { For, createEffect, createResource,createSignal, Show, ref, onMount} from "solid-js";
import commerce from "~/lib/commerce";
import { useRouteData } from "solid-start";
import { createRouteData } from "solid-start";
import Product from "~/components/Product";
import styles from "./styles.module.css"
import ProductPage from "./ProductPage";
import { Motion } from "@motionone/solid";


function transformScroll(event) {
  if (!event.deltaY) {
    return;
  }

  event.currentTarget.scrollLeft += event.deltaY + event.deltaX;
  event.preventDefault();
}

let element;


export default function Store() {
  const [products, setProducts] = createSignal(null)


  createEffect(async ()=>{
    const { data } = await commerce.products.list();
    setProducts(data); 
  }, [products()?.image.url])

  return (
 
 <>
   
  <div class={styles.store} > 
  <Motion.Show
  animate={{ opacity: [0, 1], x: [-1000, 0] } }
  transition={{ duration: 2, easing: "ease-in-out" }}
  when={products[1]?.image.url}
  fallback={<div></div>}
  class ={styles.show}
  >
    <div class={styles.products} ref={element} onwheel={transformScroll}>
      <For each={products()} fallback={<h1>Loading Products...</h1>}>
        {(product) => (<Product  {...product}  />)}   
      </For> 
    </div>
    <div class={styles.scroll}>
      <p>Scroll to view products</p>
    </div>
  </Motion.Show>
    </div>
  </>
  )
}

