import React from 'react'
import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise <DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render (): JSX.Element {
    return (
        <Html lang="pt">
            <Head>
                <meta charSet="utf-8" />

                <link href="/favicon.png" rel="icon"/>

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;1,100;1,400&display=swap" rel="stylesheet"/>

                {/* Arquivos de css do Bootstrap e Icones */}
                <link href="/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
                <link rel="stylesheet" href="/assets/vendor/mdi/css/materialdesignicons.min.css" />


            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
  }
}
