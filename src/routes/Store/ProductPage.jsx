import { createEffect, createSignal, useContext } from "solid-js"
import styles from "./styles.module.css"
import commerce from "~/lib/commerce"
import { Motion } from "@motionone/solid"
import { useCartContext } from "~/context/CartContext"



export default function ProductPage(props){
  const [quantity, setQuantity] = createSignal(1)
  const [selected, setSelected] = createSignal(null)
  const { cart, setCart } = useCartContext()
  
  function addtoCart(){
    commerce.cart.add('prod_p6dP5gMjB9wn7k', 1, { 'vgrp_LvJjoPW4nwe0nO' : 'optn_QG375vjZzR5rMO' }).then(response => setCart(response))
    console.log(cart)
  }

  return(
    <div class={styles.productPage}>
      <div class={styles.productContainer}>
        <Motion.img
          animate={{ x: [-1000, 0] }}
          transition={{ duration: 2 , easing: "ease-in-out" }}
          class={styles.productImg} src={props.image} />
        <Motion.div 
          animate={{ x: [1000, 0] }}
          transition={{ duration: 2 , easing: "ease-in-out" }}
          class={styles.productData}>
          <h1 class={styles.prodtitle}>{props.name}</h1>
          <p>{props.price}</p>
          <div>
            <p>
              Visit Hastiludes.com to view full product lore
            </p>
          </div>
          <p>{props.description}</p>
          <div>
            <p>
              Ready-to-Wear
            </p>
          </div>
          <div class={styles.variants}>
          <For each={props.variants} fallback={<div></div>}>
              {(variant) => <a onclick={() => setSelected(variant.id)} >{variant.name}</a>}
          </For>
          </div>
          <button onclick={addtoCart()} class={styles.button}>
            <p>Add to Shopping Bag</p>
          </button>
        </Motion.div>
      </div>
    </div>
  )
  console.log(selected)
}