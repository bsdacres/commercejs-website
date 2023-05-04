import { useContext, createContext, createSignal} from "solid-js";
import { createStore } from "solid-js/store";




export const CartContext = createContext([{ count: 0 }, {}]);

export function CartProvider(props) {
  const [state, setState] = createStore({ count: props.count || 0 });
  const counter = [
    state,
    {
      increment() {
        setState("count", (c) => c + 1);
      },
      decrement() {
        setState("count", (c) => c - 1);
      },
    },
  ];

  return (
    <CartContext.Provider value={counter}>
      {props.children}
    </CartContext.Provider>
  );
}