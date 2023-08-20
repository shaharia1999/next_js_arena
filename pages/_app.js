import '@/styles/globals.css';
import { useEffect } from "react";
import AOS from "aos";
import 'bootstrap/dist/css/bootstrap.css'
import "aos/dist/aos.css";
import { QueryClient,QueryClientProvider } from 'react-query';
import Script from 'next/script';





export default function App({ Component, pageProps }) {
   const queryClient= new QueryClient()
  const getLayout = Component.getLayout || ((page) => page);
  
  return getLayout(
    <QueryClientProvider client={queryClient}>
       <Script
        src="https://code.jquery.com/jquery-3.3.1.min.js"
        strategy="beforeInteractive"
        onLoad={() =>
          console.log(window.bKash,` shaharia`)
        }
      />
       <Script
        src="https://scripts.pay.bka.sh/versions/1.2.0-beta/checkout/bKash-checkout.js"
        strategy="beforeInteractive"
        onLoad={() =>
          console.log(window.bKash,` shaharia`)
        }
      />
       <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.7.26/sweetalert2.min.js"
        strategy="beforeInteractive"
        onLoad={() =>
          console.log(window.bKash,` shaharia`)
        }
      />
         <Component {...pageProps}  className="bg-white" />
    </QueryClientProvider>
  )
}
