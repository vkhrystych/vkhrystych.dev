import Head from "next/head";
import Layout from "../../components/layout";
import Date from "../../components/Date";
import utilStyles from "../../styles/utils.module.scss";

import { getAllPostIds, getPostData } from "../../lib/posts";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{`${postData.title} | Христич Дэйли`}</title>
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

        iframe {
          width: 100%;
          height: 400px;
        }

        table {
          margin: 50px 0;
        }

        thead {
          color: #495057;
          background-color: #e9ecef;
          border-color: #dee2e6;
          border-bottom: 2px solid #dee2e6;
        }

        thead th {
          padding: 10px;
        }

        tbody td {
          padding: 0.75rem;
          vertical-align: middle;
          border-top: 1px solid #dee2e6;
          background-color: rgba(0, 0, 0, 0.02);
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
