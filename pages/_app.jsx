import '../styles/globals.css'
import '../styles/reset.css'
import '../styles/style.css'
import Layout from '../compornents/layout'
import Script from "next/script";
import * as gtag from "../libs/gtag";
import { useRouter } from "next/router";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {

  const router = useRouter();
  useEffect(() => {
    const handleRouterChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouterChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouterChange);
    };
  }, [router.events]);

  return (
    <Layout>
      <Script
         strategy="afterInteractive"
         src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_MEASUREMENT_ID}`}
       />
       <Script
         id="gtag-init"
         strategy="afterInteractive"
         dangerouslySetInnerHTML={{
           __html: `
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
 
           gtag('config', '${gtag.GA_MEASUREMENT_ID}');
           `,
         }}
       />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
