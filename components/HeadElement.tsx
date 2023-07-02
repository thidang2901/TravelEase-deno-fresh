import { Head } from "$fresh/runtime.ts";

export type HeadProps = {
  url?: URL;
  title: string;
  description: string;
  image?: string;
};

export function HeadElement({ description, image, title, url }: HeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <meta name="description" content={description} />

      {/* Facebook Meta Tags */}
      {url && <meta property="og:url" content={url.href} />}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      {url && <meta property="twitter:domain" content={url.hostname} />}
      {url && <meta property="twitter:url" content={url.href} />}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Head>
  );
}
