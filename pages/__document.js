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
          >
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-174908859-1"
          ></script>
          <script>
            window.dataLayer = window.dataLayer || []; function gtag()
            {dataLayer.push(arguments)}
            gtag('js', new Date()); gtag('config', 'UA-174908859-1');
          </script>
        </Head>

        <body>
          af
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
