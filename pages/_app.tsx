import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ParallaxProvider } from "react-scroll-parallax";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ParallaxProvider>
      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
    </ParallaxProvider>
  );
}
