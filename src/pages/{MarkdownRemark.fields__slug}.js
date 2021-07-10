import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout"

export default function Template({ data }) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <h1 className="title">{frontmatter.title}</h1>
      <p>Updated {frontmatter.updated}</p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}
export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        updated(formatString: "MMMM DD, YYYY")
        title
        tags

      }
    }
  }
`;
