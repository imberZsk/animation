import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Gtag } from "@/components/gtag";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Gtag />
      <div className={`bg-background font-body text-text`}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
