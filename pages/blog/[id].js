import Head from "next/head";
import Layout from "../../components/layout";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.scss";

import { getAllPostIds, getPostData } from "../../lib/posts";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <article className={utilStyles.post}>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />

        <div className={utilStyles.tags}>
          <h4>Теги</h4>

          <ul>
            {postData.tags
              ? postData.tags.map((tag, tagIndex) => (
                  <li key={tagIndex}>#{tag}</li>
                ))
              : null}
          </ul>
        </div>
      </article>

      <style jsx global>{`
        body {
          background: #efefef;
        }

        code {
          color: #fff;
          background: darkblue;
        }

        blockquote {
          color: gray;
          margin-left: 0;
          margin-top: 2em;
          font-size: 1.1em;
          padding-left: 30px;
          font-style: italic;
          margin-bottom: 2em;
          border-left: 3px solid black;
        }
      `}</style>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
