import { A, Title } from "solid-start";
import commerce from "../lib/commerce";
import CategoryList from "../components/CategoryList";
import ProductList from "../components/ProductList";
import CollectionsPreview from "~/components/CollectionsPreview";
import { onMount } from "solid-js";
import  styles  from "./styles.module.css"
import { Motion } from "@motionone/solid";
import ProductPage from "./Store/ProductPage";
import Product from "~/components/Product";



export default function ({ merchant, categories, products }) {
  const { cart, setCart, viewCart, SetViewCart, cartItems, setCartItems } = useCartContext() 
  onMount(async ()=>{
    commerce.cart.retrieve().then((cart) => setCart(cart));
  }
  )
  return (

  <>
    
    <Motion.div
    class={styles.landing}

    >
      <div draggable class={styles.img}  alt='landing-image'>
        <Motion.div 
        class={styles.gradient}>
          <Motion.div class={styles.grad_container}
>
            <h1>Canto III</h1>
            <h1> A Woodland Tradegy</h1>
            <p>Narrated by Brian Selburn Dacres</p>
          </Motion.div>
        </Motion.div>
       <video src="https://media.discordapp.net/attachments/883034757376639036/1114059295856791614/FFT.mp4" type="video/mp4" autoplay loop muted />
      </div>
      <hr></hr>
      <div class={styles.window}> 
        <div class={styles.left_window} href="/store">
            <div style={styles.wintex}>
              <h1>Amanecer Tunic</h1>
              <p>Dawning, an ode to Aether</p>
              <A href="/store"> Shop Now</A>
            </div>
            
        </div>
        <div href='/store' class={styles.right_window}>
          <div style={styles.wintex}>
            <h1>Serapis Hood</h1>
            <p>Relic of the Abyssal Hymns</p>
            <a href="/store"> Shop Now</a>
          </div>
        </div>
      </div>
      <div class={styles.collect}>
        <div>
        <CollectionsPreview
        title="Canto I: Exordium"
        background='https://cdn.discordapp.com/attachments/883034757376639036/1113703582424903750/FOR-INSTAGRAM-4.jpg'
        />
        <CollectionsPreview
        draggable
        title="Canto II: Abyssal Hymns"
        background='https://cdn.discordapp.com/attachments/883034757376639036/1113703587206397972/IMG_3361-1-1-2.png'
        />
        <CollectionsPreview
        title="Canto III: A Woodland Tragedy"
        background='https://cdn.discordapp.com/attachments/883034757376639036/1107536476280995901/FOR-INSTAGRAM-5.jpg'
        />
        <CollectionsPreview
        title="Canto IV: Ode to Aether"
        background='https://cdn.discordapp.com/attachments/883034757376639036/1113702011335081984/IMG_4095.png'
        />
        </div>
      </div>
      <div>

      </div>
    </Motion.div>
    </> 
  );
}

