import styles from "./styles.module.css"
import { Motion } from "@motionone/solid"

export default function LineComponent(props){
  return(
  
    <Motion.div class={styles.lineitem}
    animate={{ x: [2000, 0] } }
    transition={{ duration: 2, easing: "ease-in-out" }}
    >
      <img class={styles.img}src={props.image.url} />
      <div style={styles.lines}>
        <p><b>{props.product_name}</b></p>
        <p>Quantity: {props.quantity}</p>
        <p>size: {props.selected_options[0].option_name}</p>
        <p>{props.price.formatted_with_code}</p>
        <button>Remove</button>
      </div>
    </Motion.div>
    )
}