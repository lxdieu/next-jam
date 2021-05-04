import ReactMarkdown from "react-markdown";

export default function Layout({ children, config, ...props }) {
  return (
    <footer id="colophon" className="site-footer inner">
      <div className="site-info">
        <ReactMarkdown children={config.footerContent} />
      </div>
    </footer>
  );
}
