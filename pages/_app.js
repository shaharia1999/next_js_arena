import '@/styles/globals.css';
import { useEffect } from "react";
import AOS from "aos";
import 'bootstrap/dist/css/bootstrap.css'
import "aos/dist/aos.css";




export default function App({ Component, pageProps }) {

  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps}  className="bg-white" />)
}
