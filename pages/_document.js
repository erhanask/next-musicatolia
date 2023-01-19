import { Html, Head, Main, NextScript } from 'next/document'
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script src="https://open.spotify.com/embed-podcast/iframe-api/v1" async />
      </body>
    </Html>
  )
}
