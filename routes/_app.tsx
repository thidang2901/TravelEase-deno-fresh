import { Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/server.ts";
import { Footer } from "@/components/Footer.tsx";
import { Header } from "@/components/Header.tsx";

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <title>Travel Ease</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>

      <div id="notify-container" className="hidden"></div>

      <div
        id="container"
        className="flex flex-col min-h-screen m-0 bg-gray-100 select-none font-geologica"
      >
        <Header />
        <Component />
        <Footer />
      </div>
    </>
  );
}
