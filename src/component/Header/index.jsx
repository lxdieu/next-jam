import Link from "next/link";
import React from "react";

class Header extends React.Component {
  render() {
    const config = this.props.config;
    const pages = this.props.pages;
    const page = this.props.page;
    const posts = this.props.posts;
    const headerStyle = {
      backgroundImage: "url(" + config.bgimage + ")",
    };
    return (
      <header id="masthead" className="site-header">
        <div
          id="header-bg"
          className="site-header-bg"
          style={headerStyle}
        ></div>
        <div className="site-header-scroll">
          <div className="site-header-inside">
            <div className="site-header-vertical">
              <div className="site-branding">
                <p className="site-logo">
                  <Link href="/">
                    <img src={config.logo} alt="Logo" />
                  </Link>
                </p>
                <h1 className="site-title">
                  <Link href="/">
                    <a>{config.title}</a>
                  </Link>
                </h1>
                <p className="site-description">{config.tagline}</p>
              </div>
              <nav
                id="main-navigation"
                className="site-navigation"
                aria-label="Main Navigation"
              >
                <div className="site-nav-wrap">
                  <div className="site-nav-inside">
                    <h1 style={{ color: "#fff" }}>Page</h1>
                    <ul className="menu">
                      <li className="menu-item ">
                        <Link href="/">
                          <a>Home</a>
                        </Link>
                      </li>
                      {pages &&
                        pages.map((page, index) => {
                          return (
                            <li className="menu-item" key={index}>
                              <Link
                                href={{
                                  pathname: "[slug]",
                                  query: { slug: page.id },
                                }}
                              >
                                <a>{page.data.title}</a>
                              </Link>
                            </li>
                          );
                        })}
                    </ul>
                    <h1 style={{ color: "#fff" }}>Post</h1>
                    {posts && (
                      <ul className="menu">
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
                    )}
                  </div>
                </div>
              </nav>
              <button id="menu-toggle" className="menu-toggle">
                <span className="screen-reader-text">Menu</span>
                <span className="icon-menu" aria-hidden="true"></span>
              </button>
            </div>
          </div>
        </div>
      </header>
    );
  }

  componentDidMount() {
    // TODO: Update this as it is a bit of a hack used because I am retrofitting a layout not built for react
    const header = document.querySelector("#masthead");
    header.classList.add("bg--loaded");

    var menuToggle = document.getElementById("menu-toggle");
    if (menuToggle) {
      menuToggle.addEventListener(
        "click",
        function (e) {
          document.body.classList.toggle("menu--opened");
          e.preventDefault();
        },
        false
      );

      document.body.classList.remove("menu--opened");

      window.addEventListener(
        "resize",
        function () {
          if (menuToggle.offsetParent === null) {
            document.body.classList.remove("menu--opened");
          }
        },
        true
      );
    }
  }
}

export default Header;
