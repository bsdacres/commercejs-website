import { A, Title } from "solid-start";
import commerce from "../lib/commerce";
import CategoryList from "../components/CategoryList";
import ProductList from "../components/ProductList";
import CollectionsPreview from "~/components/CollectionsPreview";
import { onMount } from "solid-js";
import  styles  from "./styles.module.css"
import { Motion } from "@motionone/solid";

onMount(async ()=>{
const merchant = await commerce.merchants.about();
const { data: categories } = await commerce.categories.list();
const { data: products } = await commerce.products.list();

return {
  props: {
    merchant,
    categories,
    products,
  },
};}
)

const style = 
{
  height: "65vh",
  width: "70vw",
  "border-radius": "20px",
}
export default function ({ merchant, categories, products }) {
  return (

  <>
    
    <Motion.div
    class={styles.landing}>
      <h1>Que sueñes con los angelitos</h1>
      <div draggable class={styles.img}  alt='landing-image'/>
      <p>"An oeuvre of epic poetry, sung through fabric, narrated by Brian Dacres."</p>
      <div class={styles.collect}>
        <CollectionsPreview
        title="Nono"
        background='https://pbs.twimg.com/media/FdA7n0-XoAA1FBB?format=jpg&name=large'
        />
        <CollectionsPreview
        draggable
        title="Nono"
        background='https://pbs.twimg.com/media/FLFc-DlXEAY0JRP.jpg'
        />
        <CollectionsPreview
        title="Nono"
        background='https://pbs.twimg.com/media/FLFc-DlXEAY0JRP.jpg'
        />
        <CollectionsPreview
        title="Nono"
        background='https://pbs.twimg.com/media/FLFc-DlXEAY0JRP.jpg'
        />
        
      </div>
    </Motion.div>
    </> 
  );
}

/*export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
} */
