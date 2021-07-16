const { createFilePath } = require('gatsby-source-filesystem')

// exports.createSchemaCustomization = ({ actions }) => {
// 	const { createTypes } = actions
  
// 	createTypes(`
// 	  type Mdx implements Node {
// 		frontmatter: MdxFrontmatter!
// 	  }
// 	  type MdxFrontmatter {
// 		layout: String!
// 		title: String!
// 		tags: [String]
// 		date: Date!
// 		updated: Date!
// 		thumbnail: String
// 		ytCoverId: String
// 	  }
// 	`)
//   }

exports.onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions
	if (node.internal.type === `Mdx`) {
	  const value = createFilePath({ node, getNode })
	  console.log(value)
	  createNodeField({
		name: `slug`,
		node,
		value,
	  })
	}
  }