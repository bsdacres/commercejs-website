import { A } from "@solidjs/router"
import  styles from './styles.module.css'
import { createEffect, createSignal, onMount} from "solid-js"
import { Show } from "solid-js"
import { Motion } from "@motionone/solid"
import commerce from "~/lib/commerce"
import Cart from "./Cart"
import { useCartContext } from "~/context/CartContext"
import { createStore } from "solid-js/store"


export default function Navbar(){
  const { cart, setCart, viewCart, SetViewCart, cartItems, setCartItems } = useCartContext()
  const [modal, setModal] = createSignal(false)
  const toggleCart = () => setCartState(!cartState);
  const toggle = () => setModal(!modal())
  createEffect(() =>{
    if(cart()){
      setCartItems(cart().total_items)
    }
  })


  return(
  <>
    <Show when={modal()}>
    <Motion.div onclick={toggle} 
    animate={{ opacity: [.01, 1] }}
    transition={{ duration: .7,  easing: "ease-in-out" }}
    class={styles.modal}>
      <A href="/store">Store</A>
      <A href="/">About</A>
      <A href="/store">Stockists</A>
      <A target="_blank" href="https://hastiludes.com/">Archive</A>
      <A href="/contact">Contact</A>
    </Motion.div>
  </Show> 
  <Show when={viewCart()}>
      <a onclick={() => SetViewCart(false)} class={styles.exit}>X</a>
      <Cart />
  </Show>
   <nav class={styles.nav}>
    <div class={styles.menu}>
      <div class={styles.left}>
        <a onclick={toggle}>Menu</a>
      </div>
      <A href="/">covenaunt</A>
      <div class={styles.right}>
        <a onclick={() => SetViewCart(true)}>Cart ({cartItems()})</a>
      </div>
    </div>
   </nav> 
  </>
  )
}