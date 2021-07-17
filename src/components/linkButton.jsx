import React from "react";

import * as componentStyle from "./linkButton.module.scss";

export default function LinkButton({ linksTo, icon, label }) {
  return (
    <a href={linksTo} className={componentStyle.container}>
      <span className="material-icons-round">{icon}</span>
      <span>{label}</span>
    </a>
  );
}
