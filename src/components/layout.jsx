import React from "react";
import { useState } from "react";
import { ReactSVG } from "react-svg";
import SVG from "react-inlinesvg";

import * as componentStyle from "./layout.module.scss";
import LinkButton from "./linkButton";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";

const Layout = ({ children, column = true, headerImageURL, title, description, noHelmet = false }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const titleString = title ? `${title} - Cy's Blog` : `Cy's Blog`;
  return (
    <div className={`${componentStyle.layoutContainer} ${menuOpen && componentStyle.menuOpen}`}>
      {!noHelmet && (
        <Helmet>
          <title>{titleString}</title>
          <meta name="og:title" content={titleString} />
          <meta name="og:site_name" content={"Cy's Blog"} />
          <meta name="description" content={description} />
          <meta name="og:description" content={description} />
        </Helmet>
      )}
      {headerImageURL && <div className={componentStyle.coverImage} style={{ "--background-image-url": `url(${headerImageURL})` }} />}
      <div className={componentStyle.menuCover} style={{ display: "none" }}>
        <span onClick={(_) => setMenuOpen(false)} className={`material-icons-round ${componentStyle.menuCloseButton}`}>
          close
        </span>
        <div className={componentStyle.menuCoverContent}>
          <h1>Welcome</h1>
          {/* <a href="/" className={componentStyle.logoBox}>
            <ReactSVG className="logoBoxLogo" src="/c_animated.svg" />
          </a> */}
          {/* <h2>Welcome to Cy's blog</h2> */}
          <LinkButton internalLink="/" icon="home" label="Home" />
          <LinkButton internalLink="/theming" icon="palette" label="Theming" />
          <LinkButton internalLink="/tags" icon="tag" label="Tags" />
          <LinkButton externalLink="https://cy2.me" icon={<SVG src="/c_outlined.svg" />} label="Cy's Portfolio" />
          <LinkButton externalLink="https://github.com/cyfinfaza/cys-blog" icon={<SVG src="/github.svg" />} label="Source Code" />
          {/* <a href="/theming">
            <h2>Theming</h2>
          </a>
          <h2>#webdev</h2>
          <h2>#projectmanagement</h2>
          <h2>#embeddedsystems</h2>
          <h2>#stories</h2>
          <h2>#philosophy</h2>
          <h2>#reviews</h2>
          <h2>#french</h2> */}
        </div>
      </div>
      <div className={componentStyle.general}>
        <div className={`${componentStyle.headerBar} global-headerBar`}>
          <Link to="/" className={componentStyle.logoBox}>
            {/* <div className={componentStyle.logoBox}> */}
            <ReactSVG className="logoBoxLogo" src="/c_animated.svg" />
            <h1>Cy's Blog</h1>
            {/* </div> */}
          </Link>
          <div>
            {/* <input className={componentStyle.headerSearch} type="text" placeholder="Search"> */}
            <span onClick={(_) => setMenuOpen(true)} className={`material-icons-round ${componentStyle.menuOpenButton}`}>
              menu
            </span>
          </div>
        </div>
        {column ? (
          <div className={componentStyle.contentContainer}>
            <div>{children}</div>
          </div>
        ) : (
          { children }
        )}
      </div>
    </div>
  );
};

export default Layout;
