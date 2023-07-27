import { useContext, createContext, createSignal, createEffect, createResource} from "solid-js";
import { createStore } from "solid-js/store";
import commerce from "~/lib/commerce";




export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cart, setCart] = createSignal();
  const [viewCart, SetViewCart] = createSignal()
  const [ cartItems, setCartItems ] =  createSignal(0)
  const [products, setProducts] = createSignal()


  createEffect(() => {
    const fetchCart = async () => {
      const carts = await commerce.cart.retrieve();
      setCart(carts);
      commerce.products.list().then((res) =>{
        setProducts(res.data)
      });
      console.log(cart())
    };

    fetchCart();
    commerce.products.list().then((res) =>{
      setProducts(res.data)
    });
  });

  return (
    <CartContext.Provider value={{ cart, setCart, viewCart, SetViewCart, cartItems, setCartItems, products }}>
      {props.children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext)