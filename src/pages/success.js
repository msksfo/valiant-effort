import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import Head from "../components/head"

const Success = () => {
    return (
        <Layout>
            <Head title="Success" />
            <div style={{ padding: "1rem" }}>
                <p>
                    Thanks so much for reaching out! We'll be in touch shortly.
                </p>

                <p>
                    <Link to="/">Head home</Link>
                </p>
            </div>
        </Layout>
    )
}

export default Success
