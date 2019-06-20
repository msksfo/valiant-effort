import React from "react"
import footerStyles from "../footer/footer.module.scss"

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer className={footerStyles.footer} style={{ fontSize: "1rem" }}>
            <p className={footerStyles.copyright}>
                Copyright &copy; {year}{" "}
                <a
                    href="https://msksfo.github.io/TangoEchoDesign/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    TangoEcho Design
                </a>{" "}
                All Rights Reserved
            </p>
        </footer>
    )
}

export default Footer
