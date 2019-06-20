import React from "react"
import { Link } from "gatsby"
import Head from "../components/head"
import indexStyles from "../styles/index.module.scss"

const Home = () => {
    return (
        <div className={indexStyles.wrapper}>
            <Head title="Home" />

            <h1>Valiant Effort LLC</h1>

            <nav>
                <ul>
                    <li>
                        <Link to="/annie">Annie</Link>
                    </li>
                    <li>
                        <Link to="/team">Team</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/events">Events</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/donate">Donate</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Home
