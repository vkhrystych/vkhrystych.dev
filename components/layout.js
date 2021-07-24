import Head from "next/head";
import Link from "next/link";
import styles from "./layout.module.scss";

const name = "Христич Дэйли";
export const siteTitle = "Христич Дэйли | Жизнь, работа и технологии";

export default ({ children, home }) => {
  return (
    <div className={styles.app}>
      <header>
        <ul className={styles.links}>
          <li>
            <Link href="/">Главная</Link>
          </li>

          <li>
            <Link href="/about">Обо мне</Link>
          </li>
        </ul>
      </header>

      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Блог про жизнь, работу и технологии"
          />
          <meta property="og:image" content="/images/site-preview.jpg" />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="google-site-verification"
            content="ibvOzf8z_Guu0WjHL1nr5N8SBP8clV_P3tqKe-NMuc0"
          />
        </Head>

        <main className="main">{children}</main>

        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Назад</a>
            </Link>
          </div>
        )}

        <footer className={styles.footer}>
          <a href="https://t.me/vkhrystych">
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
    </div>
  );
};
