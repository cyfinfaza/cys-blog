import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx";

import { TestComponent } from '../components/testComponent'

export default function Template({ data }) {
  const { mdx } = data; // data.markdownRemark holds your post data
  const { frontmatter, body } = mdx;
  return (
    <Layout>
      <h1 className="title">{frontmatter.title}</h1>
      <p>Updated {frontmatter.updated}</p>
      <MDXProvider components={{TestComponent}}>
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

      }
    }
  }
`;
