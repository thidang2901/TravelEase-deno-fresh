import { AppProps } from "$fresh/server.ts";

import { Footer } from "@/components/Footer.tsx";
import { Header } from "@/components/Header.tsx";

export default function App({ Component }: AppProps) {
  return (
    <>
      <div id="notify-container" className="hidden"></div>
      <div
        id="container"
        className="flex flex-col items-center justify-start min-h-screen m-0 select-none bg-gray-50 font-geologica"
      >
        <Header active="home" />
        <Component />
        <Footer />
      </div>
    </>
  );
}
