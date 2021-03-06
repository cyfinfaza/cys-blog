import { graphql, Link } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";

// markup
const IndexPage = ({ data }) => {
  const posts = data.allMdx.edges.map((edge) => edge.node);
  return (
    <Layout description="A multimedia blog, written by Cy.">
      {/* <Layout headerImageURL="/homepage/1.jpg"> */}
      <h1 className="title">Hi!</h1>
      <p>Welcome to my work-in-progress blog.</p>
      <h2>
        You probably don't like this theme. Change it <Link to="/theming">here</Link>!
      </h2>
      <p>Right now the only cool thing about my blog is the theming system. Or maybe the menu animation. If you want, you can first open the menu, then get to the theming UI from there. Up to you.</p>
      <h1 className="title">Posts</h1>
      {posts.map((post) => (
        <>
          <h1>
            <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
          </h1>
          <p>
            {post.frontmatter.date} &bull; {post.frontmatter.tags.join(", ")}
          </p>
        </>
      ))}
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allMdx {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            tags
            thumbnail
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default IndexPage;
