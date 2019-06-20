import React from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.scss"

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <h1 className={headerStyles.logo}>Valiant Effort LLC</h1>

            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link
                            className={headerStyles.link}
                            activeClassName={headerStyles.activeLink}
                            to="/annie"
                        >
                            Annie
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={headerStyles.link}
                            activeClassName={headerStyles.activeLink}
                            to="/team"
                        >
                            Team
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={headerStyles.link}
                            activeClassName={headerStyles.activeLink}
                            to="/blog"
                        >
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={headerStyles.link}
                            activeClassName={headerStyles.activeLink}
                            to="/events"
                        >
                            Events
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={headerStyles.link}
                            activeClassName={headerStyles.activeLink}
                            to="/contact"
                        >
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={headerStyles.link}
                            activeClassName={headerStyles.activeLink}
                            to="/donate"
                        >
                            Donate
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
