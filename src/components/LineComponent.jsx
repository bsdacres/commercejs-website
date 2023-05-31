import styles from "./styles.module.css"
import { Motion } from "@motionone/solid"
import commerce from "~/lib/commerce"
import { useCartContext } from "~/context/CartContext"

export default function LineComponent(props){
  const { cart, setCart } = useCartContext()
  function removeItem(item){
    commerce.cart.remove(item).then((response) => setCart(response));
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
        <p>size: </p>
        <p>{props.price.formatted_with_code}</p>
        <button onClick={()=> removeItem(props.id)} >Remove</button>
      </div>
    </Motion.div>
    )
}