import { useContext, createContext, createSignal, createEffect, createResource} from "solid-js";
import { createStore } from "solid-js/store";
import commerce from "~/lib/commerce";




export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cart, setCart] = createSignal();
  const [cartState, setCartSet] = createSignal(false)
 

  createEffect(() => {
    const fetchCart = async () => {
      const carts = await commerce.cart.retrieve();
      setCart(carts);
      console.log(cart())
    };

    fetchCart();
  });

  return (
    <CartContext.Provider value={{ cart, setCart, cartState, setCartSet }}>
      {props.children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext)