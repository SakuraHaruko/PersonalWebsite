import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <title>{process.env.NEXT_PUBLIC_TITLE}</title>
      <Head>
        <meta name="description" content={process.env.NEXT_PUBLIC_DESCRIPTION} />
        <meta name="keywords" content="buguwu bug homepage" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={process.env.NEXT_PUBLIC_TITLE} />
        <meta property="og:description" content={process.env.NEXT_PUBLIC_DESCRIPTION} />
        <meta property="og:image" content="https://example.com/your-image.jpg" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_BASEURL_PROD} />
        <meta property="og:type" content="website" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-V8YRTESQW8"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag() {
              dataLayer.push(arguments);
              }
              gtag('js', new Date());
              gtag('config', 'G-V8YRTESQW8');
      `,
    }}
  />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}