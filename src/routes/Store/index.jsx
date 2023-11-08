import { For, createEffect, createResource,createSignal, Show, ref, on} from "solid-js";
import commerce from "~/lib/commerce";
import { useRouteData } from "solid-start";
import { createRouteData } from "solid-start";
import Product from "~/components/Product";
import styles from "./styles.module.css"
import ProductPage from "./ProductPage";
import { Motion } from "@motionone/solid";
<<<<<<< HEAD
import { createScriptLoader } from "@solid-primitives/script-loader";

createScriptLoader({
  src: 'https://connect.facebook.net/en_US/fbevents.js',
  onLoad() {
    window.fbq('init', 'pixel ID');
    window.fbq('track', 'PageView');
  }
});
=======
import { useCartContext } from "~/context/CartContext"
>>>>>>> 91e1eb30e0098f5350906071da9ef40dfb9fdc04


function transformScroll(event) {
  if (!event.deltaY) {
    return;
  }

  event.currentTarget.scrollLeft += event.deltaY + event.deltaX;
  event.preventDefault();
}

let element;

export default function Store() {
 const {products, setProducts} = useCartContext()

  return (
 
 <>
   
  <div class={styles.store} > 
  <Motion.Show
  animate={{ opacity: [0, 1]} }
  transition={{ duration: 3, easing: "ease-in-out" }}
  when={products()}
  fallback={<div></div>}
  class ={styles.show}
  >
    <div class={styles.products} ref={element} onwheel={transformScroll}>
      <For each={products()} fallback={<div  style={{color:"white", width:"100vw", position:"relative", "z-index":2000, "text-align":"center",height:"100vh", "font-size":"xxx-large", display:"flex", "align-content":"center", "justify-content":"center", "margin-top":"25vh"}}>Loading Products...</div>}>
        {(product) => (<Product   {...product}  />)}   
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

