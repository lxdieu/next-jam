import Layout from "../../src/component/Layout";
import ReactMarkdown from "react-markdown";
import configData from "../../data/config.json";
import axios from "axios";

export default function Post({ configData, page, pages, posts }) {
  return (
    <Layout config={configData} pages={pages} posts={posts}>
      <article className="post page post-full">
        <header className="post-header">
          <h1 className="post-title">{page.data.title}</h1>
        </header>
        <div className="post-content">
          <ReactMarkdown children={page.data.desciption} />
        </div>
        <div className="post-content">
          <ReactMarkdown children={page.data.dontent} />
        </div>
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const data = await axios.get(`${process.env.API}/news/post/`, {
    headers: {
      "X-Flatten": true,
      "X-Languages": "vi",
    },
  });
  const postPath = data.data.items.map((post) => ({
    params: {
      slug: post.id,
    },
  }));
  return {
    paths: postPath,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data = await axios.get(`${process.env.API}/news/post/${params.slug}`, {
    headers: {
      "X-Flatten": true,
      "X-Languages": "vi",
    },
  });

  const listPages = await axios.get(`${process.env.API}/news/page`, {
    headers: {
      "X-Flatten": true,
      "X-Languages": "vi",
    },
  });

  const listPosts = await axios.get(`${process.env.API}/news/post`, {
    headers: {
      "X-Flatten": true,
      "X-Languages": "vi",
    },
  });
  const page = data.data;
  const pages = listPages.data.items;
  const posts = listPosts.data.items;

  return {
    props: {
      configData,
      page,
      pages,
      posts,
    },
  };
}
