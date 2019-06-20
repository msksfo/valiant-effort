import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import Head from "../components/head"

const NotFound = () => {
    return (
        <Layout>
            <Head title="Not Found" />
            <div style={{ padding: "1rem" }}>
                <h1>Page not found</h1>

                <p>
                    <Link to="/">Head home</Link>
                </p>
            </div>
        </Layout>
    )
}

export default NotFound
