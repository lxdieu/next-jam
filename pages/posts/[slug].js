import Layout from "../../src/component/Layout";
import ReactMarkdown from "react-markdown";
import configData from "../../data/config.json";
import axios from "axios";
export default function Post({ configData, page, pages }) {
  const data = JSON.parse(page);

  return (
    <Layout config={configData} pages={pages}>
      <article className="post page post-full">
        <header className="post-header">
          <h1 className="post-title">{data.data.title}</h1>
        </header>
        <div className="post-content">
          <ReactMarkdown children={data.data.Desciption} />
        </div>
        <div className="post-content">
          <ReactMarkdown children={data.data.Content} />
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
  const page = JSON.stringify(data.data);
  const pages = [];

  return {
    props: {
      configData,
      page,
      pages,
    },
  };
}
