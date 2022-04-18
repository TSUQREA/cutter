import * as React from "react"
import Document, { Html, Head, Main, NextScript } from 'next/document'


export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  render() {
    const name = process.env.serviceName
    const nameplain = process.env.serviceNamePlain
    const domain = process.env.serviceDomain
    const description = process.env.serviceDescription
    const icon = process.env.serviceIcon
    return (
      <Html lang="ja">
        <Head>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content={description}/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="format-detection" content="telephone=no"/>

        <link rel="icon" href={icon} />
      </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
