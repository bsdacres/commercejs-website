import { A } from '@solidjs/router';
import product from './product.module.css'
import { Motion } from '@motionone/solid';
import { spring, stagger,timeline } from 'motion';
import commerce from '~/lib/commerce';
import { createSignal,createEffect } from 'solid-js';


export default function Product(props) {

  return (
    <a href={props.c} >

    <div class={product.wrapper}>
      <Motion.div 
          hover={{ scale: 1.2 }}
          class={product.product}>
        <img class ={product.img} src={props.image.url} alt='clothing' />
        <div class={product.productdata}> 
          <p  class="product-title">{props.name}</p>
          <p>{props.price.formatted_with_symbol}</p>
        </div>
      </Motion.div>
    </div>  
    </a>
  );
}
