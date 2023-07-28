import { createEffect, createSignal, useContext, on } from "solid-js"
import styles from "./styles.module.css"
import commerce from "~/lib/commerce"
import { Motion } from "@motionone/solid"
import { useCartContext } from "~/context/CartContext"
import { createStore } from "solid-js/store"



export default function ProductPage(props){
  const [quantity, setQuantity] = createSignal(1)
  const [selected, setSelected] = createSignal(null)
  const [selectItem, setSelectedItem] = createSignal(null)
  const [img, setImg] = createSignal(props.image)
  const { cart, setCart, setCartItems, cartItems, SetViewCart } = useCartContext()

  const item = {
    [props.variant_groups] : ""
  }

  console.log(img())
  
  createEffect(on(selected, (selected) => {
    item[props.variant_groups] = selected;
    delete item.false
  }, { defer: false }));

  
  async function addtoCart(id, amount, variant ){
    await commerce.cart.add(id, amount, variant).then(response => setCart(response)).catch(
      console.log('there was an error')
    )
    setCartItems(cart().total_items)
    SetViewCart(true)
  }

  return(
    <div class={styles.productPage}>
      <div class={styles.productContainer}>
        <Motion.img
          animate={{ x: [-1000, 0] }}
          transition={{ duration: 2 , easing: "ease-in-out" }}
          class={styles.productImg} src={img()} />
        <Motion.div 
          animate={{ x: [1000, 0] }}
          transition={{ duration: 2 , easing: "ease-in-out" }}
          class={styles.productData}>
          <h1 class={styles.prodtitle}>{props.name}</h1>
          <p class={styles.price}>${props.price}</p>
          <div class={styles.addtocart}>
            <select class={styles.variants} value={selected} onChange={e =>setSelected(e.target.value)}>
              <option value="" selected hidden >Size</option>
                <For each={props.variants} fallback={<div></div>}>
                    {(variant) => <option value={variant.id} >{variant.name}</option>}
                </For>
            </select>
            <button onclick={() => addtoCart(props.id, quantity,item)} class={styles.button}>
              <p>Add to Bag</p>
            </button>
          </div>
          <div class={styles.text}>
            <p>
              Visit Hastiludes.com to view full product lore
            </p>
            <p>{props.description}</p>
          </div>
        </Motion.div>
      </div>
    </div>
  )
  console.log(selected)
}