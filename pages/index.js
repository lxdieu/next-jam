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
    <Layout config={config} pages={pages} posts={posts}>
      <div className="post-feed">
        <p>Home Page</p>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const listPosts = await axios.get(`${process.env.API}/news/post/`, {
    headers: {
      "X-Flatten": true,
      "X-Languages": "vi",
    },
  });

  const listPages = await axios.get(`${process.env.API}/news/page/`, {
    headers: {
      "X-Flatten": true,
      "X-Languages": "vi",
    },
  });
  const pages = listPages.data.items;
  const posts = listPosts.data.items;
  return {
    props: {
      configData,
      pages,
      posts,
    },
  };
}
