import React from "react"
import Head from "../components/head"
import Layout from "../components/layout/layout"
import eventStyles from "../styles/events.module.scss"

const Events = () => {
    return (
        <Layout>
            <Head title="Events" />
            <div className={eventStyles.wrapper}>
                <div className={eventStyles.iframeContainer}>
                    <iframe
                        title="Valiant Effort Calendar Of Events"
                        src="https://calendar.google.com/calendar/b/2/embed?wkst=1&amp;bgcolor=%23039BE5&amp;ctz=America%2FLos_Angeles&amp;src=ZWNjdDNkZHIxcHJzY2ZpMmRtYnAycmZtZWtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%238E24AA&amp;color=%230B8043&amp;showTitle=0&amp;showPrint=0&amp;showCalendars=0"
                        scrolling="no"
                    ></iframe>
                </div>
            </div>
        </Layout>
    )
}

export default Events
