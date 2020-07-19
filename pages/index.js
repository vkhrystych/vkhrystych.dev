import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

import getUsers from "../lib/getUsers";

export default function Home(props) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>25 years old front-end engineer. Coding, games and blogs.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>

        <p>My favorite Kanye West tweet is:</p>

        <p>{props.quote}</p>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const quote = await getUsers();

  return {
    props: {
      quote,
    },
  };
}
