import { createEffect, createSignal, useContext } from "solid-js"
import styles from "./styles.module.css"
import commerce from "~/lib/commerce"
import { Motion } from "@motionone/solid"
import { useCartContext } from "~/context/CartContext"
import { createStore } from "solid-js/store"



export default function ProductPage(props){
  const [quantity, setQuantity] = createSignal(1)
  const [selected, setSelected] = createSignal(null)
  const [selectItem, setSelectedItem] = createSignal(null)
  const { cart, setCart, setCartItems, cartItems, SetViewCart } = useCartContext()

  const item = {
    [props.variant_groups] : ""
  }
  createEffect(()=>{
    item[props.variant_groups] = selected();
    delete item.false
    console.log(item)
  }, [selected()])

  
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
          class={styles.productImg} src={props.image} />
        <Motion.div 
          animate={{ x: [1000, 0] }}
          transition={{ duration: 2 , easing: "ease-in-out" }}
          class={styles.productData}>
          <h1 class={styles.prodtitle}>{props.name}</h1>
          <p>${props.price}</p>
          <div>
            <p>
              Visit Hastiludes.com to view full product lore
            </p>
          </div>
          <p>{props.description}</p>
          <div class={styles.addtocart}>
            <select class={styles.variants} value={selected} onChange={e =>setSelected(e.target.value)}>
              <option value="" selected hidden > Select Size</option>
                <For each={props.variants} fallback={<div></div>}>
                    {(variant) => <option value={variant.id} >{variant.name}</option>}
                </For>
            </select>
            <button onclick={() => addtoCart(props.id, quantity,item)} class={styles.button}>
              <p>Add to Shopping Bag</p>
              

            </button>
          </div>
        </Motion.div>
      </div>
    </div>
  )
  console.log(selected)
}