import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

import TestComponent from "../components/testComponent";
import * as pageStyle from "./blog.module.scss";
import { Helmet } from "react-helmet";

export default function Template({ data }) {
  const { mdx } = data; // data.markdownRemark holds your post data
  const { frontmatter, body, excerpt } = mdx;
  const preComponent = (props) => {
    // console.log(props);
    // return (
    //   <SyntaxHighlighter language="javascript" style={docco}>
    //     {props.children.props.children}
    //   </SyntaxHighlighter>
    // );
    return <pre {...props} />;
  };
  return (
    <Layout headerImageURL={frontmatter.thumbnail} title={frontmatter.title} description={excerpt}>
      <Helmet>
        <meta name="og:type" content="article" />
        <meta name="og:image" content={frontmatter.thumbnail} />
      </Helmet>
      {frontmatter.ytCoverId && (
        <iframe className={pageStyle.coverVideo} src={`https://www.youtube.com/embed/${frontmatter.ytCoverId}`} height="500" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen />
      )}
      <h1 className="title">{frontmatter.title}</h1>
      <p>Updated {frontmatter.updated}</p>
      <MDXProvider components={{ TestComponent, pre: preComponent }}>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
      {/* <div dangerouslySetInnerHTML={{ __html: html }} /> */}
    </Layout>
  );
}
export const pageQuery = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      body
      excerpt
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        updated(formatString: "MMMM DD, YYYY")
        title
        tags
        thumbnail
        ytCoverId
      }
    }
  }
`;
