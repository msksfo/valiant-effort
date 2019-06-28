import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import Head from "../components/head"
import successStyles from "../styles/success.module.scss"

const Success = () => {
    return (
        <Layout>
            <Head title="Success" />
            <div className={successStyles.wrapper}>
                <div className={successStyles.successMessage}>
                    <p>
                        Thanks so much for reaching out! We'll be in touch
                        shortly.
                    </p>

                    <p>
                        <Link className={successStyles.linkToHome} to="/">
                            Head home
                        </Link>
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default Success
