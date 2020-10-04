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
        <title>Владислав Христич - айти и житие</title>
      </Head>

      <div className={styles.header}>
        <h1 className={utilStyles.heading2Xl}>Блог</h1>
      </div>

      <section className={utilStyles.headingMd}>
        <p>
          Это уютный бложек Владислава Христича. У блога нет конкретной
          тематики, я рассказываю обо всём, чем хотел бы поделиться: от работы
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
