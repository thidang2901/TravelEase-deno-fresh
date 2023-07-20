import { AppProps } from "$fresh/server.ts";

import { Footer } from "@/components/Footer.tsx";
import { Header } from "@/components/Header.tsx";

export default function App({ Component }: AppProps) {
  return (
    <body className="box-border m-0 select-none bg-gray-50 font-geologica">
      <div id="notify-container" className="hidden"></div>
      <div
        id="container"
        className="flex flex-col items-center justify-start"
      >
        <Header active="home" />
        <Component />
        <Footer />
      </div>
    </body>
  );
}
