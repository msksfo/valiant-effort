import React from "react"
import Header from "../header/header"
import Footer from "../footer/footer"
import layoutStyles from "../layout/layout.module.scss"

const Layout = props => {
    return (
        <div className={layoutStyles.wrapper}>
            <Header />

            <main className={layoutStyles.main}>{props.children}</main>

            <Footer />
        </div>
    )
}

export default Layout
