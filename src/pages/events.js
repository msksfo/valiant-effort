import React from "react"
import Head from "../components/head"
import Layout from "../components/layout/layout"
import eventStyles from "../styles/events.module.scss"

const Events = () => {
    return (
        <Layout>
            <Head title="Events" />
            <div className={eventStyles.wrapper}>
                <p>We currently have no events scheduled. Check back soon.</p>
            </div>
        </Layout>
    )
}

export default Events
