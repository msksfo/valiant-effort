import React from "react"
import Head from "../components/head"
import Layout from "../components/layout/layout"
import donateStyles from "../styles/donate.module.scss"
import cartoon from "../images/bt-cartoon-a.jpg"
import { Link } from "gatsby"

const Donate = () => {
    return (
        <Layout>
            <Head title="Donate" />

            <section className={donateStyles.wrapper}>
                <div className={donateStyles.donateText}>
                    <p>
                        If you'd like to donate to our cause, you may do so
                        through our GoFundMe campaign, by clicking the button
                        below. If you'd prefer to help out with a cash or check
                        donation, please get in touch with{" "}
                        <Link
                            className={donateStyles.linkToContact}
                            to="/contact"
                        >
                            Alex or Taurus
                        </Link>{" "}
                        through our contact page.
                    </p>

                    <p>
                        If you're unable to help out financially, we understand!
                        You could also share the project on your favorite social
                        media platform, or share via word of mouth to your
                        parents, your babysitter, your favorite teacher, etc.
                        It's all about getting the word out.
                    </p>

                    <p>
                        Finally, we'd love it if you'd take a moment to watch
                        our promo video at the bottom of this page. We put a lot
                        of love into creating it, and we think it perfectly
                        expresses why restoring this plane is so important to
                        us. We hope you enjoy it.
                    </p>

                    <a
                        className={donateStyles.donateButton}
                        href="https://www.gofundme.com/help-us-save-annie-our-bt13"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Donate
                    </a>
                </div>

                <figure>
                    <img
                        className={donateStyles.cartoon}
                        src={cartoon}
                        alt=""
                    />
                </figure>

                <article className={donateStyles.iframeContainer}>
                    <iframe
                        title="Annie's Story - The Bay's BT-13"
                        src="https://www.youtube.com/embed/ASc0dtO40gI"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </article>
            </section>
        </Layout>
    )
}

export default Donate
