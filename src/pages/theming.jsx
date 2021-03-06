import React from "react";
import { useState, useContext, useEffect } from "react";
import Layout from "../components/layout";
import * as pageStyle from "./theming.module.scss";
import refreshTheme from "../logic/refreshTheme";
import { ReactSVG } from "react-svg";

const ThemeCard = () => {
  return <div></div>;
};

const colorThemes = [
  {
    name: "Light",
    class: "color-light",
    desc: "A standard, white-background, light theme.",
  },
  {
    name: "Light Gray",
    class: "color-lightgray",
    desc: "Basically a light theme, but the background is a little darker.",
  },
  {
    name: "Sepia",
    class: "color-sepia",
    desc: "Yellowish sepia theme, like the pages of a book or aged newspaper.",
  },
  {
    name: "Gray",
    class: "color-lowcontrast",
    desc: "Low-contrast theme, featuring a gray background and grayish text.",
  },
  {
    name: "Cobalt",
    class: "color-cobalt",
    desc: "A beautiful dark cobalt blue theme, with light text.",
  },
  {
    name: "Dark",
    class: "color-dark",
    desc: "Charcoal/slate style background, with almost-white text.",
  },
  {
    name: "Black",
    class: "color-black",
    desc: "An OLED-style dark theme, with white text for contrast.",
  },
  {
    name: "Hacker",
    class: "color-hacker",
    desc: 'A green on black terminal-style "hacker" theme.',
  },
];

const fontThemes = [
  {
    name: "Sans",
    class: "font-sans",
    desc: "A bold, modern, UI-style font with absolutely no serifs.",
  },
  {
    name: "Serif",
    class: "font-serif",
    desc: "A stylish but not too complex font style.",
  },
  {
    name: "Elaborate",
    class: "font-elaborate",
    desc: "A complex, older-style font for those who really like serifs.",
  },
  {
    name: "Monospace",
    class: "font-monospace",
    desc: "A flashy monospace font, great with the hacker theme.",
  },
];

const logoThemes = [
  {
    name: "RGB",
    class: "logo-rgb",
  },
  {
    name: "Monochrome",
    class: "logo-mono",
  },
  {
    name: "Hidden",
    class: "logo-hidden",
  },
];

const headerPosThemes = [
  {
    name: "Static",
    class: "headerpos-static",
    desc: "Header scrolls with page",
  },
  {
    name: "Sticky",
    class: "headerpos-sticky",
    desc: "Header sticks to top of page when scrolling",
  },
];

const ThemingPage = () => {
  const isBrowser = typeof window !== "undefined";
  const [selectedThemes, setSelectedThemes] = useState(isBrowser ? JSON.parse(localStorage.getItem("theming")) || {} : {});
  useEffect(() => {
    // console.log(selectedThemes);
    localStorage.setItem("theming", JSON.stringify(selectedThemes));
    refreshTheme();
  }, [selectedThemes]);
  const selectedColorTheme = selectedThemes.color || "color-light";
  const selectedFontTheme = selectedThemes.font || "font-sans";
  const selectedLogoTheme = selectedThemes.logo || "logo-rgb";
  const selectedHeaderPosTheme = selectedThemes.headerPos || "headerpos-static";
  if (!isBrowser) return <></>;
  return (
    <Layout title="Theming" description="Make my blog yours (not literally).">
      <h1 className="title">Theming &amp; Customization</h1>
      <p>Make my blog yours (not literally).</p>
      <h1>Color</h1>
      <div className={pageStyle.pickerGrid}>
        {colorThemes.map((theme) => {
          console.log(selectedColorTheme == theme.class ? pageStyle.selected : "");
          return (
            <div className={`${theme.class} ${selectedColorTheme == theme.class ? pageStyle.selected : ""}`} onClick={(_) => setSelectedThemes({ ...selectedThemes, color: theme.class })} key={theme.class}>
              <h2>{theme.name}</h2>
              <p>{theme.desc}</p>
            </div>
          );
        })}
      </div>
      <h1>Font</h1>
      <div className={pageStyle.pickerGrid}>
        {fontThemes.map((theme) => (
          <div className={`${theme.class} ${selectedFontTheme == theme.class && pageStyle.selected}`} onClick={(_) => setSelectedThemes({ ...selectedThemes, font: theme.class })} key={theme.class}>
            <h2>{theme.name}</h2>
            <p>{theme.desc}</p>
          </div>
        ))}
      </div>
      <h1>Logo</h1>
      <div className={pageStyle.pickerGrid}>
        {logoThemes.map((theme) => (
          <div className={`${theme.class} ${selectedLogoTheme == theme.class && pageStyle.selected}`} onClick={(_) => setSelectedThemes({ ...selectedThemes, logo: theme.class })} key={theme.class}>
            <h2>{theme.name}</h2>
            <p>
              <div className={`${pageStyle.c_logo} ${theme.class} themeSampleCard`}>
                <ReactSVG className="logoBoxLogo" src="/c_animated.svg" />
              </div>
            </p>
          </div>
        ))}
      </div>
      {/* <h1>Header Position</h1>
      <div className={pageStyle.pickerGrid}>
        {headerPosThemes.map((theme) => (
          <div className={`${theme.class} ${selectedHeaderPosTheme == theme.class && pageStyle.selected}`} onClick={(_) => setSelectedThemes({ ...selectedThemes, headerPos: theme.class })} key={theme.class}>
            <h2>{theme.name}</h2>
            <p>{theme.desc}</p>
          </div>
        ))}
      </div> */}
    </Layout>
  );
};

export default ThemingPage;
