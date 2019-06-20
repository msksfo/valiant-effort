import React from "react"
import Head from "../components/head"
import Layout from "../components/layout/layout"
import contactStyles from "../styles/contact.module.scss"

const Contact = () => {
    return (
        <Layout>
            <Head title="Contact" />
            <div className={contactStyles.wrapper}>
                <div className={contactStyles.contact}>
                    <p className={contactStyles.contact}>
                        Our website is still under construction. Please be
                        patient with us. Our contact form will be finished soon.
                    </p>

                    <p>
                        In the meantime, if you'd like to get in touch, you can
                        reach Taurus at (831)-402-6782, Alex at (707)-342-8422.
                        You can also email us at the following address:
                        valianteffortllc@gmail.com
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default Contact
