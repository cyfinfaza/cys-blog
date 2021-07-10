const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions
	if (node.internal.type === `MarkdownRemark`) {
	  const value = createFilePath({ node, getNode })
	  console.log(value)
	  createNodeField({
		name: `slug`,
		node,
		value,
	  })
	}
  }