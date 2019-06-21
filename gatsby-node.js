// this file is for working with the createPages API from gatsby

const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    // 1. GET THE PATH to template component, with path.resolve(relative path to blog post template )
    const blogTemplate = path.resolve("./src/templates/blog-post.js")

    // 2. GET THE SLUG we created with a graphql query (or with contentful slug)
    //* use async on module.exports and await here, because graphql(``) returns a promise
    // could also use standard .then()
    const res = await graphql(`
        query {
            allContentfulBlogPost {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)
    console.log(res)
    // 3. CREATE A NEW PAGE for each markdown (or contentful) blog post
    // create a page (based on the blog-post template) for every markdown file

    //* tell create page...
    // 1. the path to the new COMPONENT (the template -> blog-post.js, which is the variable saved in blogTemplate above)
    // 2. the PATH to the rendered blog post -> .../blog/blog-post This will be dynamic based off of the slug
    // 3. the CONTEXT, what to pass down to the template -> the SLUG!

    res.data.allContentfulBlogPost.edges.forEach(edge => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: `${edge.node.slug}`,
            },
        })
    })
}
