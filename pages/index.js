import Head from "next/head";
import utilStyles from "../styles/utils.module.scss";
import styles from "../components/layout.module.scss";
import indexPageStyles from "../components/index-page.module.scss";
import Layout from "../components/layout";
import PostCard from "../components/PostCard";

import { getSortedPostsData } from "../lib/posts";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>Христич Дэйли | Жизнь, работа и технологии</title>
      </Head>

      <div className={styles.header}>
        <h1 className={utilStyles.heading2Xl}>Блог</h1>
      </div>

      <section className={utilStyles.headingMd}>
        <p className={utilStyles.blogDescription}>
          Привет, я - Владислав Христич. Я айтишник, предприниматель и блогер.
        </p>

        <p className={utilStyles.blogDescription}>
          У этого блога нет конкретной тематики, я рассказываю обо всём, чем хотел бы поделиться: от работы
          до игровых консолей.
        </p>
      </section>

      <h2>Посты</h2>

      <div className={indexPageStyles.posts}>
        {allPostsData.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            href="/blog/[id]"
            as={`/blog/${post.id}`}
          />
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
