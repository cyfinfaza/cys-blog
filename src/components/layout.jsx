import React from "react";
import { useState } from "react";
import { ReactSVG } from "react-svg";

import * as componentStyle from "./layout.module.scss";

const Layout = ({ children, column = true }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`${componentStyle.layoutContainer} ${menuOpen && componentStyle.menuOpen}`}>
      <div className={componentStyle.menuCover} style={{ display: "none" }}>
        <span onClick={(_) => setMenuOpen(false)} className={`material-icons-round ${componentStyle.menuCloseButton}`}>
          close
        </span>
        <div className={componentStyle.menuCoverContent}>
          <h1>Welcome to Cy's Blog</h1>
          <a href="/theming">
            <h2>Theming</h2>
          </a>
          <h2>#webdev</h2>
          <h2>#projectmanagement</h2>
          <h2>#embeddedsystems</h2>
          <h2>#stories</h2>
          <h2>#philosophy</h2>
          <h2>#reviews</h2>
          <h2>#french</h2>
        </div>
      </div>
      <div className={componentStyle.general}>
        <div className={`${componentStyle.headerBar} global-headerBar`}>
          <a href="/" className={componentStyle.logoBox}>
            {/* <div className={componentStyle.logoBox}> */}
              <ReactSVG src="/c_animated.svg" />
              <h1>Cy's Blog</h1>
            {/* </div> */}
          </a>
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
