import React from 'react';
import NextDocument, {DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript,} from 'next/document';

export default class Document extends NextDocument {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () => originalRenderPage({
      enhanceApp: App => props => <App {...props} />,
      enhanceComponent: Component => Component,
    });

    const initialProps = await NextDocument.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
        </>
      ),
    };
  }

  render(): JSX.Element {
    return (
      <Html lang="pt-BR">
        <Head/>
        <body>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    );
  }
}
