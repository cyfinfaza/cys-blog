const { createFilePath } = require('gatsby-source-filesystem')

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