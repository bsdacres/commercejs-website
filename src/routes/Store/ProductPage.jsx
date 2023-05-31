import { createEffect, createSignal, useContext } from "solid-js"
import styles from "./styles.module.css"
import commerce from "~/lib/commerce"
import { Motion } from "@motionone/solid"
import { useCartContext } from "~/context/CartContext"
<<<<<<< HEAD
import { createStore } from "solid-js/store"
=======
>>>>>>> 4e15d29344ed1b3b45edb73481549dc785737a19



export default function ProductPage(props){
  const [quantity, setQuantity] = createSignal(1)
<<<<<<< HEAD
  const [selected, setSelected] = createStore(null)
  const { cart, setCart } = useCartContext()
  
  function addtoCart(id, amount, variant ){
    commerce.cart.add(id, amount, variant).then(response => setCart(response)).catch(
      console.log('there was an error')
    )
=======
  const [selected, setSelected] = createSignal(null)
  const { cart, setCart } = useCartContext()
  
  function addtoCart(){
    commerce.cart.add('prod_p6dP5gMjB9wn7k', 1, { 'vgrp_LvJjoPW4nwe0nO' : 'optn_QG375vjZzR5rMO' }).then(response => setCart(response))
>>>>>>> 4e15d29344ed1b3b45edb73481549dc785737a19
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
<<<<<<< HEAD
              <For each={props.variants} fallback={<div></div>}>
                  {(variant) => <option onclick={() => setSelected(variant.id)} >{variant.name}</option>}
              </For>
          </div>
          <button onclick={() => addtoCart(props.id, quantity,   )} class={styles.button}>
=======
          <For each={props.variants} fallback={<div></div>}>
              {(variant) => <a onclick={() => setSelected(variant.id)} >{variant.name}</a>}
          </For>
          </div>
          <button onclick={addtoCart()} class={styles.button}>
>>>>>>> 4e15d29344ed1b3b45edb73481549dc785737a19
            <p>Add to Shopping Bag</p>
          </button>
        </Motion.div>
      </div>
    </div>
  )
  console.log(selected)
}