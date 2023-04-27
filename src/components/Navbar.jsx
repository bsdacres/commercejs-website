import { A } from "@solidjs/router"
import  styles from './styles.module.css'
import { createEffect, createSignal } from "solid-js"
import { Show } from "solid-js"
import { Motion } from "@motionone/solid"
import commerce from "~/lib/commerce"


export default function Navbar(){
  const [modal, setModal] = createSignal(false)
  const toggle = () => setModal(!modal())

  return(
  <>
    <Show when={modal()}>
    <Motion.div onclick={toggle} 
    animate={{ opacity: [0, 1] }}
    transition={{ duration: 1.5,  easing: "ease-in-out" }}
    
    class={styles.modal}>
      <A href="/store">Store</A>
      <A href="/">Menu</A>
      <A href="/store">Menu</A>
      <A href="/store">Menu</A>
    </Motion.div>
  </Show> 
   <nav class={styles.nav}>
    <div class={styles.menu}>
      <div class={styles.left}>
        <a  onclick={toggle}>Menu</a>
      </div>
      <a>covenaunt</a>
      <div class={styles.right}>
        <A href="/">Cart</A>
      </div>
    </div>
   </nav> 
  </>
  )
}