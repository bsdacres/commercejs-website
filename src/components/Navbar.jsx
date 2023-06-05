import { A } from "@solidjs/router"
import  styles from './styles.module.css'
import { createEffect, createSignal } from "solid-js"
import { Show } from "solid-js"
import { Motion } from "@motionone/solid"
import commerce from "~/lib/commerce"
import Cart from "./Cart"
import { useCartContext } from "~/context/CartContext"


export default function Navbar(){
  const { cart, setCart, viewCart, SetViewCart } = useCartContext()
  const [modal, setModal] = createSignal(false)
  const toggleCart = () => setCartState(!cartState);
  const toggle = () => setModal(!modal())

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
      <A target="_blank" href="https://hastiludes.com/">Universe</A>
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
        <a onclick={() => SetViewCart(true)}>Cart {cart.total_items}</a>
      </div>
    </div>
   </nav> 
  </>
  )
}