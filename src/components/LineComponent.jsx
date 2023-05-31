import styles from "./styles.module.css"
import { Motion } from "@motionone/solid"
<<<<<<< HEAD
import commerce from "~/lib/commerce"
import { useCartContext } from "~/context/CartContext"

export default function LineComponent(props){
  const { cart, setCart } = useCartContext()
  function removeItem(item){
    commerce.cart.remove(item).then((response) => setCart(response));
  }

  
  return(
    
=======

export default function LineComponent(props){
  return(
  
>>>>>>> 4e15d29344ed1b3b45edb73481549dc785737a19
    <Motion.div class={styles.lineitem}
    animate={{ x: [2000, 0] } }
    transition={{ duration: 2, easing: "ease-in-out" }}
    >
      <img class={styles.img}src={props.image.url} />
      <div style={styles.lines}>
        <p><b>{props.product_name}</b></p>
        <p>Quantity: {props.quantity}</p>
<<<<<<< HEAD
        <p>size: </p>
        <p>{props.price.formatted_with_code}</p>
        <button onClick={()=> removeItem(props.id)} >Remove</button>
=======
        <p>size: {props.selected_options[0].option_name}</p>
        <p>{props.price.formatted_with_code}</p>
        <button>Remove</button>
>>>>>>> 4e15d29344ed1b3b45edb73481549dc785737a19
      </div>
    </Motion.div>
    )
}