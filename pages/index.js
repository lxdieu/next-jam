import Layout from "../src/component/Layout";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import configData from "../data/config.json";
import axios from "axios";
import getConfig from "next/config";

export default function Home(props) {
  const { publicRuntimeConfig } = getConfig();
  const posts = props.posts;
  const pages = props.pages;
  const config = props.configData;

  return (
    <Layout config={config} pages={pages}>
      <div className="post-feed">
        {posts &&
          posts.map((post, index) => {
            return (
              <article className="post" key={index}>
                <header className="post-header">
                  <h2 className="post-title">
                    <Link
                      href={{
                        pathname: "/posts/[slug]",
                        query: { slug: post.id },
                      }}
                    >
                      <a rel="bookmark">{post.data.title}</a>
                    </Link>
                  </h2>
                  <div className="post-meta">
                    Published on{" "}
                    <time className="published" dateTime="2020-02-20 00:00">
                      {post.data.createTime}
                    </time>
                  </div>
                </header>

                <Link
                  href={{
                    pathname: "/posts/[slug]",
                    query: { slug: post.id },
                  }}
                >
                  <a className="post-thumbnail">
                    <img
                      className="thumbnail"
                      src={post.data.featureImage[0]}
                      alt={post.data.title}
                    />
                  </a>
                </Link>

                <div className="post-content">
                  <ReactMarkdown children={post.data.Desciption} />
                </div>
                <p className="read-more">
                  <Link
                    // href={{
                    //   pathname: "/posts/[slug]",
                    //   query: { slug: post.id },
                    // }}
                    href={`./posts/${post.id}.html`}
                  >
                    <a className="read-more-link">
                      Keep reading{" "}
                      <span
                        className="icon-arrow-right"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </Link>
                </p>
              </article>
            );
          })}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await axios.get(`${process.env.API}/news/post/`, {
    headers: {
      "X-Flatten": true,
      "X-Languages": "vi",
    },
  });
  const pages = [];
  // const pages = sb.pages.filter(
  //   (page) => page.path !== "/" && !page.path.startsWith("/posts/")
  // );
  // const posts = data.data.items.filter(
  //   (page) => page.path !== "/" && page.path.startsWith("/posts/")
  // );
  const posts = data.data.items;
  return {
    props: {
      configData,
      pages,
      posts,
    },
  };
}
