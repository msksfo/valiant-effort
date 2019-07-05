import React from "react"
import Head from "../components/head"
import Layout from "../components/layout/layout"
import CompanyInfo from "../components/companyInfo/companyInfo"
import contactStyles from "../styles/contact.module.scss"
import ContactForm from "../components/contactForm/contactForm"

const Contact = () => {
    return (
        <Layout>
            <Head title="Contact" />
            <div className={contactStyles.wrapper}>
                <section className={contactStyles.contact}>
                    <CompanyInfo
                        companyName="Valiant Effort LLC"
                        companyEmail="valianteffortllc@gmail.com"
                        alexPhone="707-342-8422"
                        taurusPhone="831-402-6782"
                    />

                    <ContactForm />
                </section>
            </div>
        </Layout>
    )
}

export default Contact
