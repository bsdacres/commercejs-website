import { For, createEffect, createSignal } from "solid-js"
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
  })

  return(
   <div class={styles.cart}>
    <Motion.div 
    animate={{ x: [2000, 1] } }
    transition={{ duration: 1, easing: "ease-in-out" }}
    class={styles.lineContainer}>
      <For each={lineItems.line_items} fallback={<div>Your Cart is Empty</div>}>
          {(line) => (<LineComponent  {...line}  />)}   
      </For>
    </Motion.div> 
    <Motion.div 
        animate={{ x: [2000, 1] } }
<<<<<<< HEAD
        transition={{ duration: 1, easing: "ease-in-out" }}
=======
        transition={{ duration: 1.4, easing: "ease-in-out" }}
>>>>>>> 4e15d29344ed1b3b45edb73481549dc785737a19
        class={styles.checkout}>
        <div class={styles.subtotal}>
          <p class={styles.name}>Subtotal:</p>
          <p class={styles.amount}>{total.formatted_with_code}</p>
        </div>
<<<<<<< HEAD
        <a href={lineItems.hosted_checkout_url}>Proceed to Checkout</a> 
=======
        <a >Proceed to Checkout</a> 
>>>>>>> 4e15d29344ed1b3b45edb73481549dc785737a19
      </Motion.div>
   </div> 
  )
}