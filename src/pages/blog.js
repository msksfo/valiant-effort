import React from "react"
import Head from "../components/head"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout/layout"
import blogStyles from "../styles/blog.module.scss"

const BlogPage = props => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost(
                sort: { fields: datePublished, order: DESC }
            ) {
                edges {
                    node {
                        id
                        title
                        author
                        slug
                        datePublished(formatString: "DD MMMM, YYYY")
                    }
                }
            }
        }
    `)
    return (
        <Layout>
            <Head title="Blog" />
            <div className={blogStyles.wrapper}>
                <h1 className={blogStyles.pageTitle}>Latest Posts...</h1>

                {/*
                    first, filter out null value nodes, because if you delete a
                    contentful post, the node is still there! (with the value of null)
                */}
                {data.allContentfulBlogPost.edges
                    .filter(value => value !== null)
                    .map(value => {
                        return (
                            <ul className={blogStyles.post} key={value.node.id}>
                                <li>
                                    <Link to={`/blog/${value.node.slug}`}>
                                        <h1
                                            className={blogStyles.blogPostTitle}
                                        >
                                            {value.node.title}
                                        </h1>
                                        <p>
                                            By {value.node.author} ~{" "}
                                            {value.node.datePublished}
                                        </p>
                                    </Link>
                                </li>
                            </ul>
                        )
                    })}
            </div>
        </Layout>
    )
}

export default BlogPage
