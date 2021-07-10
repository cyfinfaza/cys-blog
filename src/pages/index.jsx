import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"

// markup
const IndexPage = ({data}) => {
  const posts = data.allMarkdownRemark.edges.map(edge=>edge.node)
  return (
    <Layout>
      {
        posts.map(post=>(
          <>
          <h1><a href={post.fields.slug}>{post.frontmatter.title}</a></h1>
          <p>{post.frontmatter.date} &bull; {post.frontmatter.tags.join(", ")}</p>
          </>
        ))
      }
    </Layout>
  )
}

export const pageQuery = graphql`
query {
  allMarkdownRemark {
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
`

export default IndexPage