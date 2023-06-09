import { useParams } from "solid-start";
import { createStore } from "solid-js/store";
import { createEffect,createResource, createSignal } from "solid-js";
import styles from "./styles.module.css"
import commerce from "~/lib/commerce";
import ProductPage from "~/routes/Store/ProductPage"
import { Motion } from "@motionone/solid";
import { stripHtml } from "string-strip-html";
import { Title } from "solid-start";



export default function Products() {
  const [listing, setListing] = createSignal(undefined)
  const [desc, setDesc] = createSignal(undefined)
  const [variants, setVariants] = createSignal(undefined)
  const [group, setGroup] = createSignal(undefined)
  const [] = createSignal(0)
  const page = useParams();
  var regex = /(<([^>]+)>)/ig;
  
  createEffect(()=>{
    commerce.products.retrieve(page.id).then((res) => {
      setListing(res);
      setVariants(res.variant_groups[0].options)
      setGroup(res.variant_groups[0].id)
      console.log(res)
      console.log(variants())
      console.log(group())
      console.log(variants().name)
    });
  })
  return(
    <Motion.div 
    animate={{ opacity: [0, 1] }}
    transition={{ duration: 3.5, easing: "ease-in-out" }}
    class={styles.params}>
      <Title>Covenaunt | {listing() &&  listing().name}</Title>
        <ProductPage 
        name = {listing() && listing().name}
        image = {listing() && listing().assets[0].url}
        price = {listing() && listing().price.raw}
        description = {listing() && listing().description.replaceAll(regex, "")}
        variants = {variants() && variants()}
        id = {listing() && listing().id}
        />
      </Motion.div>
  )
}



