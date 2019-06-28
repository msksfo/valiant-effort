import React, { Component } from "react"
import { Link } from "gatsby"
import Head from "../components/head"
import indexStyles from "../styles/index.module.scss"

class Home extends Component {
    constructor(props) {
        super()
        this.state = {
            isOpen: false,
            ariaExpanded: false,
            backgroundColor: "transparent",
        }

        this.toggleMenu = this.toggleMenu.bind(this)
    }

    toggleMenu() {
        this.setState(prevState => {
            return {
                isOpen: !prevState.isOpen,
                ariaExpanded: !prevState.ariaExpanded,
            }
        })
    }

    render() {
        return (
            <div className={indexStyles.wrapper}>
                <Head title="Home" />

                <header className={indexStyles.header}>
                    <nav
                        style={
                            this.state.isOpen
                                ? { backgroundColor: "rgba(0, 0, 0, .55)" }
                                : { backgroundColor: "transparent" }
                        }
                        className={indexStyles.mobileNav}
                    >
                        <button
                            onClick={this.toggleMenu}
                            className={indexStyles.toggleMenuButton}
                        >
                            <span className={indexStyles.srOnly}>Menu</span>
                            <span className={indexStyles.hamburgerIcon}>
                                <div className={indexStyles.hamburgerTop}></div>
                                <div
                                    className={indexStyles.hamburgerMiddle}
                                ></div>
                                <div
                                    className={indexStyles.hamburgerBottom}
                                ></div>
                            </span>
                        </button>

                        {this.state.isOpen && (
                            <ul
                                id="mobile-nav-list"
                                className={indexStyles.mobileNavList}
                            >
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
                        )}
                    </nav>

                    <h1 className={indexStyles.logo}>Valiant Effort LLC</h1>
                </header>

                <nav className={indexStyles.fullNav}>
                    <ul className={indexStyles.navList}>
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
}

export default Home
