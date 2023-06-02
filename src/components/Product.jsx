import { A } from '@solidjs/router';
import product from './product.module.css'
import { Motion } from '@motionone/solid';




export default function Product(props) {
  return (
 <>
   <A class={product.anchor} href={props.id}>
    <div class={product.wrapper}>
      <Motion.div 
          hover={{ scale: 1.1 }}
          class={product.product}>
        <img class ={product.img} src={props.image.url} alt='clothing' />
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
