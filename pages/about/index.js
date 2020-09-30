import Head from "next/head";

import utilStyles from "../../styles/utils.module.css";
import styles from "../../components/layout.module.scss";

import Layout from "../../components/layout";

export default () => {
  return (
    <Layout>
      <Head>
        <title>Обо мне</title>
      </Head>

      <header className={styles.header}>
        <img
          alt="Vladyslav Khrystych"
          src="/images/avatar.jfif"
          className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
        />
        <h1 className={utilStyles.heading2Xl}>Влад Христич, 26 лвл</h1>
      </header>

      <section className={utilStyles.headingMd}>
        <p>
          Пишу фронт-енд на Реакте, воспитываю чихуахуа, шучу шутки в Твиттер. В
          свободное время веду{" "}
          <a href="https://t.me/kyiveat">Телеграм-канал о ресторанах Киева</a>{" "}
          (очень люблю поесть).
        </p>

        <p>
          Я работал как в больших, так и маленьких компаниях, запускал блоги,
          делал стартап и получал инвестиции. В плохие времена вёл курсы по
          вёрстке для новичков (все мы грешны)
        </p>

        <p>
          {" "}
          В работе мне нравится хороший темп, налаженные процессы и адекватная
          бюрократия.
        </p>

        <p>
          Блог мне нужен для того, чтобы выговориться. Тут не будет Патреонов и
          прочих онлифанс.
        </p>

        <p>
          Ещё мне очень нравятся компьютерные игры, к ним я отношусь трепетно,
          как к объектам искусства. Любимые тайтлы: Dark Souls 3, Dead Cells,
          Rimworld и Death stranding.
        </p>

        <p>Интерестинг фэктс:</p>

        <ul>
          <li>Я редкий вид фронтэндера, который любит верстать</li>
          <li>
            Ненавижу оверинжиниринг и люблю решать задачи, а не плодить
            абстракции
          </li>
          <li>
            Невероятно люблю электронику. Механические клавиатуры, наушники,
            консоли - это всё обо мне. Ну, и конечно же, чем больше мониторов -
            тем лучше
          </li>
        </ul>
      </section>

      <style jsx>{`
        ul {
          padding-left: 1.2rem;
        }
      `}</style>
    </Layout>
  );
};
