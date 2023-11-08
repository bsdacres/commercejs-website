// @refresh reload
import { Suspense, onMount, onCleanup } from "solid-js";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";
import { useCartContext } from "~/context/CartContext"
import { useAssets } from "solid-js/web";
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";




export default function Root() {
if(typeof window !== "undefined"){
  let d = window.document;
  let script = d.createElement('script')
  onCleanup(() => script.remove());
}

const gtag = () =>{
  
}

  return (
    <Html lang="en">
      <Head>
        <Title>Covenaunt - Fantasy sung through Fabric</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest"></link>
        <script async src="https://www.googletagmanager.com/gtag/js?id=N2D26SW3"></script>
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <CartProvider>
            <Navbar />
              <Routes>
                <FileRoutes />
              </Routes>
              <Footer />
            </CartProvider>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
