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
                    <p>
                        Our website is still under construction. Please be
                        patient with us. Our contact form will be finished soon.
                    </p>

                    <p>
                        In the meantime, if you'd like to get in touch, choose
                        the most convenient option from the list below.
                    </p>

                    <ul className={contactStyles.contactList}>
                        <li className={contactStyles.contactMethod}>
                            Alex ~ 707-342-8422
                        </li>
                        <li className={contactStyles.contactMethod}>
                            Taurus ~ 831-402-6782
                        </li>
                        <li className={contactStyles.contactMethod}>
                            valianteffortllc@gmail.com
                        </li>
                    </ul>
                </div>
            </div>
        </Layout>
    )
}

export default Contact
