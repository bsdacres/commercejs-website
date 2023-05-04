import { createEffect, createSignal } from "solid-js"
import styles from "./styles.module.css"
import commerce from "~/lib/commerce"
import { Motion } from "@motionone/solid"



export default function ProductPage(props){
  const [quantity, setQuantity] = createSignal(1)
  const [selected, setSelected] = createSignal(null)
  createEffect(()=>{
    
  commerce.cart.retrieve().then((cart) => console.log(cart))
  })
  
  function handleAddtoCart(){
    commerce.cart.add(`${props.id}, ${quantity}, {${props.variants} : ${selected},}`)
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
          <div class={styles.button}>
            <input type="number" value={quantity()}  onChange={e => setQuantity(e.target.value)} onchange={console.log(quantity)} />
            <p onclick={handleAddtoCart}>Add to Shopping Bag  </p>
          </div>
        </Motion.div>
      </div>
    </div>
  )
  console.log(selected)
}