import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;600&display=swap"
            rel="stylesheet"
          ></link>
          <script
            async
            defer
            data-domain="vkhrystych.dev"
            src="https://plausible.io/js/plausible.js"
          ></script>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
