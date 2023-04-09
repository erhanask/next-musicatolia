import { Html, Head, Main, NextScript } from 'next/document'
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
        <Head>
            <meta name="description" content="Music is love."/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" href="/icons/main-track-icon.svg"/>
        </Head>
        <body>
        <Main />
        <NextScript />
        <Script src="https://open.spotify.com/embed-podcast/iframe-api/v1" async />
      </body>
    </Html>
  )
}
