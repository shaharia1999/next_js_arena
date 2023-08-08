import '@/styles/globals.css';
import { useEffect } from "react";
import AOS from "aos";
import 'bootstrap/dist/css/bootstrap.css'
import "aos/dist/aos.css";
import { QueryClient,QueryClientProvider } from 'react-query';





export default function App({ Component, pageProps }) {
   const queryClient= new QueryClient()
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <QueryClientProvider client={queryClient}>
         <Component {...pageProps}  className="bg-white" />
    </QueryClientProvider>
  )
}
