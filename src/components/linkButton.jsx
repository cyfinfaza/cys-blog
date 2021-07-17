import { Link } from "gatsby";
import React from "react";

import * as componentStyle from "./linkButton.module.scss";

export default function LinkButton({ externalLink, internalLink, icon, label }) {
  const contents = (
    <>
      <span className="material-icons-round">{icon}</span>
      <span>{label}</span>
    </>
  );
  return (
    <>
      {externalLink && (
        <a href={externalLink} className={componentStyle.container}>
          {contents}
        </a>
      )}
      {internalLink && (
        <Link to={internalLink} className={componentStyle.container}>
          {contents}
        </Link>
      )}
    </>
  );
}
