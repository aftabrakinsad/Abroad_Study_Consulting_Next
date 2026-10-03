import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head>
        <link rel="icon" href="/ico.png" />
      </Head>
      <body className="bg-gray-900 text-gray-100 antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
