import Head from "next/head";
import Link from "next/link";
import styles from "./layout.module.scss";

const name = "Vladyslav Khrystych";
export const siteTitle = "Vladyslav Khrystych - front-end and chips";

export default ({ children, home }) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main>{children}</main>

      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}

      <footer className={styles.footer}>
        <a href="https://t.me/gitstatus">
          <img alt="telegram icon" src="/images/telegram.svg" />
        </a>

        <a href="https://twitter.com/vkhrystych">
          <img alt="twitter icon" src="/images/twitter.svg" />
        </a>

        <a href="https://facebook.com/iwantvladique">
          <img alt="facebook icon" src="/images/facebook.svg" />
        </a>
      </footer>
    </div>
  );
};
