import { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <title>Hey, Here is buguwu!</title>
      <Head>
        <meta name="description" content="buguwu's personal website" />
        <meta name="keywords" content="buguwu bug personalwebsite" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Hey, Here is buguwu!" />
        <meta property="og:description" content="H! Here is buguwu! 这里是buguwu的个人主页~" />
        <meta property="og:image" content="https://qwq.lgbt/avatar.jpg" />
        <meta property="og:url" content="https://qwq.lgbt" />
        <meta property="og:type" content="website" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}