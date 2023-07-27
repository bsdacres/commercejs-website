import { A } from '@solidjs/router';
import product from './product.module.css'
import { Motion } from '@motionone/solid';




export default function Product(props) {
  return (
 <>
   <A class={product.anchor} href={props.permalink}>
    <div class={product.wrapper}>
      <Motion.div 
          hover={{ y:-20 }}
          transition={{
            duration: .5
          }}
          class={product.product}>
        <img class={product.img} src="https://www.prada.com/content/dam/pradabkg_products/3/395/39546X/111LF0UB0/39546X_111L_F0UB0_S_222_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1000.1000.jpg" alt='Loading'  />
        <div  class={product.productdata}> 
          <p  class="product-title">{props.name}</p>
          <p>${props.price.raw}</p>
        </div>
      </Motion.div>
    </div>  
  </A> 
  </>
  );
}
