import Link from "next/link";
import React from "react";

class Header extends React.Component {
  render() {
    const config = this.props.config;
    const pages = this.props.pages;
    const posts = this.props.posts;

    return (
      <header id="masthead" className="site-header">
        <div id="header-bg" className="site-header-bg"></div>
        <div className="site-header-scroll">
          <div className="site-header-inside">
            <div className="site-header-vertical">
              <div className="site-branding">
                <p className="site-logo">
                  <Link href="/">
                    <img src={config.logo} alt="Logo" />
                  </Link>
                </p>
              </div>
              <nav
                id="main-navigation"
                className="site-navigation"
                aria-label="Main Navigation"
              >
                <div className="site-nav-wrap">
                  <div className="site-nav-inside">
                    <ul className="menu">
                      <li className="menu-item ">
                        <Link href="/">
                          <a>Home</a>
                        </Link>
                      </li>
                      {pages.map((page, index) => {
                        return (
                          <li className="menu-item" key={index}>
                            <Link
                              href={{
                                pathname: "/[slug]",
                                query: { slug: page.id },
                              }}
                            >
                              <a>{page.data.title}</a>
                            </Link>
                          </li>
                        );
                      })}
                      {posts.map((post, index) => {
                        return (
                          <li className="menu-item" key={index}>
                            <Link
                              href={{
                                pathname: "/posts/[slug]",
                                query: { slug: post.id },
                              }}
                            >
                              <a>{post.data.title}</a>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
