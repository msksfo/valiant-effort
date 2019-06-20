import React from "react"
import Head from "../components/head"
import Layout from "../components/layout/layout"
import { graphql } from "gatsby"
import blogPostStyles from "../styles/blog-post.module.scss"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const BlogPost = props => {
    //* TO GET AN IMAGE FROM CONTENTFUL:
    // 1. customize how certain node types are rendered with options object
    // 2. pass options as the second argument to the documentToReactComponents function
    const options = {
        renderNode: {
            "embedded-asset-block": node => {
                const alt = node.data.target.fields.title["en-US"]
                const srcUrl = node.data.target.fields.file["en-US"].url

                return <img src={srcUrl} alt={alt} />
            },
        },
    }
    return (
        <Layout>
            <Head title={props.data.contentfulBlogPost.title} />
            <div className={blogPostStyles.wrapper}>
                <article className={blogPostStyles.postWrapper}>
                    <h1 className={blogPostStyles.postTitle}>
                        {props.data.contentfulBlogPost.title}
                    </h1>
                    <p className={blogPostStyles.postAuthor}>
                        <span>By {props.data.contentfulBlogPost.author}</span>
                        {props.data.contentfulBlogPost.datePublished}
                    </p>

                    {documentToReactComponents(
                        props.data.contentfulBlogPost.body.json,
                        options
                    )}
                </article>
            </div>
        </Layout>
    )
}

export default BlogPost

export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost(slug: { eq: $slug }) {
            title
            author
            datePublished(formatString: "DD MMMM, YYYY")
            body {
                json
            }
        }
    }
`
