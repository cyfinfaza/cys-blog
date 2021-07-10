module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Cy's Blog",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: ['.mdx', '.md'],
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog-posts`,
        path: `${__dirname}/content/blog`,
      },
    },
    `gatsby-transformer-remark`,
    // {
		// 	resolve: 'gatsby-plugin-theme-switcher',
		// 	options: {
		// 		defaultDarkTheme: 'theme-dark',
		// 		defaultLightTheme: 'theme-light',
		// 	},
		// },
  ],
};
