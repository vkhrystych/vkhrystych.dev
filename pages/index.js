import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

import getPosts from "../lib/getPosts";

export default function Home({ posts }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>
          Hi, I'm Vlad. I think you're probably looking for a few words about me
          on this page. So, let's start.
        </p>

        <p>I creating user interfaces on React since 2015.</p>

        <p>
          At this time, I worked for small and large companies, and also was a
          co-founder of the startup. I have over 4 years of commercial
          web-development experience (wow!).
        </p>

        <ul>
          <li>I really love to create layouts</li>
          <li>I solve problems, not playing programming</li>
          <li>On my free time I like to play on my PS4 (yes, I'm geek)</li>
        </ul>

        <p>
          Of course you interested in my previous projects. Let me speak from my
          heart:
        </p>

        <p>
          <strong>2015</strong>
          <br /> <a href="https://everad.com">everad.com</a> - CPA-network and
          my first official work. I make landing-pages all the time: just HTML,
          CSS and me.
        </p>

        <p>
          <strong>2015-2016</strong>
          <br /> <a href="https://openrent.co.uk">openrent.co.uk</a> - webapp
          for longterm rental in London and signing documents directly on
          website. My first collision with Flux architecture, managers from
          England and daily meetings :)
        </p>

        <p>
          <strong>2017</strong>
          <br />
          <a href="https://globalfreelance.ua">globalfreelance.ua</a> - place,
          where guys said: "You'll create new version of our product using
          actual tech stack", but in fact I just fix bunch of old bugs on PHP
          and jQuery.
        </p>

        <p>
          <strong>2017-2020</strong>
          <br />
          <a href="https://milkyweb.net">milkyweb.net</a> - my first serious
          startup: lowcode webapp-builder, based on semantic web core. <br />
          Yeah, I know, that it sounds not so clear :)
        </p>
      </section>

      <style jsx>{`
        ul {
          padding-left: 1.2rem;
        }
      `}</style>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await getPosts();

  return {
    props: {
      posts,
    },
  };
}
