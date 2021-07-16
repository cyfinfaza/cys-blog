import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { TestComponent } from "../components/testComponent";
import * as pageStyle from "./blog.module.scss";

export default function Template({ data }) {
  const { mdx } = data; // data.markdownRemark holds your post data
  const { frontmatter, body } = mdx;
  return (
    <Layout headerImageURL={frontmatter.thumbnail}>
      {frontmatter.ytCoverId && (
        <iframe className={pageStyle.coverVideo} src={`https://www.youtube.com/embed/${frontmatter.ytCoverId}`} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen />
      )}
      <h1 className="title">{frontmatter.title}</h1>
      <p>Updated {frontmatter.updated}</p>
      <MDXProvider components={{ TestComponent }}>
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
