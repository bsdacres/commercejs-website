import { For, createEffect, createSignal, Suspense } from "solid-js"
import LineComponent from "./LineComponent"
import { useCartContext } from "~/context/CartContext"
import styles from "./styles.module.css"
import { createStore } from "solid-js/store"
import { A } from "@solidjs/router"
import { Motion } from "@motionone/solid"


export default function Cart(){
  const [lineItems, setLineItems] = createStore()
  const [total, setTotal] = createStore()
  const { cart } = useCartContext()

  createEffect(()=>{
    setLineItems(cart())
    console.log(lineItems)

    if(lineItems){
      setTotal(lineItems.subtotal)
    }
  }, [cart])

  return(
 <Suspense fallback={<p>Loading...</p>}>
   <div class={styles.cart}>
    <Motion.div 
    animate={{ x: [2000, 1] } }
    transition={{ duration: 1, easing: "ease-in-out" }}
    exit={{ x: [1,2000 ], transition: { duration: 1 } } }
    class={styles.lineContainer}>
      <For each={lineItems.line_items} fallback={<div class={styles.fallback}>Your Cart is Empty</div>}>
          {(line) => (<LineComponent
          selected_options = "large"
          
          {...line}  />)}   
      </For>
    </Motion.div> 
    <Motion.div 
        animate={{ x: [2000, 1] } }
        transition={{ duration: 1, easing: "ease-in-out" }}
        class={styles.checkout}>
        <div class={styles.subtotal}>
          <p class={styles.name}>Subtotal:</p>
          <p class={styles.amount}>{total.formatted_with_code}</p>
        </div>
        <a href={lineItems.hosted_checkout_url}>Proceed to Checkout</a> 
      </Motion.div>
   </div> 
  </Suspense>
  )
}