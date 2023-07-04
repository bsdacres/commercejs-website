import styles from "./styles.module.css"
import { Motion } from "@motionone/solid"
import commerce from "~/lib/commerce"
import { useCartContext } from "~/context/CartContext"
import { createStore } from "solid-js/store"

export default function LineComponent(props){
  const { cart, setCart, setCartItems, cartItems } = useCartContext()

  function removeItem(item){
    commerce.cart.remove(item).then((response) => setCart(response));
    setCartItems(cart.total_items)
  }

  
  return(
    
    <Motion.div class={styles.lineitem}
    animate={{ x: [2000, 0] } }
    transition={{ duration: 2, easing: "ease-in-out" }}
    >
      <img class={styles.img}src={props.image.url} />
      <div style={styles.lines}>
        <p><b>{props.product_name}</b></p>
        <p>Quantity: {props.quantity}</p>
        <p>size: {props.selected_option} </p>
        <p>{props.price.formatted_with_code}</p>
        <button onClick={()=> removeItem(props.id)} >Remove</button>
      </div>
    </Motion.div>
    )
}