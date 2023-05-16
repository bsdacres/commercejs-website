import { useContext, createContext, createSignal, createEffect, createResource} from "solid-js";
import { createStore } from "solid-js/store";
import commerce from "~/lib/commerce";

export const CartContext = createContext();

const fetchCart = async () => {
  commerce.cart.retrieve()
};

export const CartProvider = (props) => {
  const [cart, setCart] = createSignal();
  const [user] = createResource(cart, fetchCart);
  console.log(user())

  return (
    <CartContext.Provider >
      {props.children}
    </CartContext.Provider>
  );
};