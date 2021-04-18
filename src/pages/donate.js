import React from "react"
import Head from "../components/head"
import Layout from "../components/layout/layout"
import donateStyles from "../styles/donate.module.scss"
import cartoon from "../images/btCartoon.jpg"
import { Link } from "gatsby"
import cx from "classnames"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebook,
    faTwitter
} from '@fortawesome/free-brands-svg-icons'
import circles from '../images/circles.png'

const Donate = () => {
    const percent = (4210 / 20000) * 100;

    return (
        <Layout>
            <Head title="Donate" />

            <section className={donateStyles.wrapper}>
                <figure>
                        <img
                            className={donateStyles.cartoon}
                            src={cartoon}
                            alt="BT-13 cartoon"
                        />
                </figure>

                <div className={donateStyles.missionStatementContainer}>
                    <div className={donateStyles.missionStatement}>
                        <h1>Our<br /><span>Mission</span> <br /> & <span>Vision</span></h1>

                         <p>Valiant Effort Foundation educates the world about how the Army Air Corps trained pilots during WW2. We share the amazing story and history of the airplane by flying in to museum events and air shows. Giving the public this direct access to the aircraft brings history to life in a way no textbook can.</p>

                         <a href='#donate' className={donateStyles.join}>Join Us</a>
                    </div>

                    <div className={donateStyles.howYouCanHelp}>
                        <div className={donateStyles.help}>
                            <h2>How You Can Help</h2>
                    
                             <p>
                                If you are able to donate, any amount will help and will be greatly appreciated! You can make your donation through our <Link to='#donate' className={donateStyles.linkToDonate}> GoFundMe campaign</Link>. If you'd prefer to help out with a cash or check
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
                                friends, your babysitter, your favorite teacher, etc.
                                It's all about getting the word out.  
                            </p>
                            {/* 
                            <button className={donateStyles.share}>Share</button>
                            */} 
                        </div>
                        
                        <div className={donateStyles.moneyDistribution}>
                            <p className={donateStyles.heading}>Where Your Money Goes</p>

                            <div className={donateStyles.progressBarContainer}>
                                <div className={donateStyles.progressBar}>

                                    <div className={donateStyles.progressBarFill}></div>

                                    <div className={donateStyles.progressBarText}>
                                        <p><span>{percent}%</span><br />
                                        $20,000</p>
                                    </div>
                                </div>   
                            </div>
                            <p className={donateStyles.subheading}>100% of your donation goes toward the restoration and maintaiance of our BT-13. </p>
                        </div>
                    </div>
                </div>

                <div id='donate' className={donateStyles.donateTextWrapper}>

                    <div className={donateStyles.donateText}>
                        <p className={donateStyles.heading}>Donate to Valiant Effort</p>

                        <a
                            className={donateStyles.donateButton}
                            href="https://www.gofundme.com/help-us-save-annie-our-bt13"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Donate
                        </a>
                    </div>

                    <div className={donateStyles.cardsWrapper}>

                        <div className={cx(donateStyles.card, donateStyles.shareYourWhy)}>
                            <p className={donateStyles.shareYourWhyHeading}>#shareyourwhy</p> 

                            <div className={donateStyles.shareYourWhyContent}>
                                <p>Help us gain momentum and create a ripple effect by sharing WHY you donated. </p>

                                <div className={donateStyles.socialIconsWrapper}>
                                    <a
                                        href='https://www.facebook.com/sharer/sharer.php?u=https%3A//valianteffort.netlify.app/donate'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className={donateStyles.socialMediaLink}
                                        aria-label='Facebook'
                                    >
                                        <FontAwesomeIcon 
                                            icon={faFacebook}
                                            fixedWidth
                                            className={donateStyles.facebook}
                                            aria-hidden='true'
                                            title='Facebook'
                                        />
                                    </a>
                                
                                    <img src={circles} className={donateStyles.circles}/>
                                    <a
                                        href='https://twitter.com/share?url=https%3A%2F%2Fvalianteffort.netlify.app%2Fdonate&text=I%20donated%20because%20we%20are%20the%20guardians%20of%20history.&hashtags=WASP%2CWWII%2Caviation%2Chistory%2Cveterans%2Cavgeek%2CVultee'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className={donateStyles.socialMediaLink}
                                        aria-label='Twitter'
                                    >
                                        <FontAwesomeIcon 
                                            icon={faTwitter}
                                            fixedWidth
                                            className={donateStyles.twitter}
                                            aria-hidden='true'
                                            title='Twitter'
                                        />
                                    </a>
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>
                
                <div className={donateStyles.videoSectionWrapper}>
                    <div className={donateStyles.pinnedContentWrapper}>
                        <p className={donateStyles.promoVideoPin}>
                            Finally, we'd love it if you'd take a moment to watch
                            our promo video below. We put a lot
                            of love into creating it, and we think it perfectly
                            expresses why restoring this plane is so important to
                            us. We hope you enjoy it.
                        </p>
                    </div>
                
                    <article className={donateStyles.videoOuterWrapper}>
                        <div className={donateStyles.iframeContainer}>
                            <iframe
                                title="Annie's Story - The Bay's BT-13"
                                src="https://www.youtube.com/embed/ASc0dtO40gI"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            ></iframe>
                        </div>
                    </article>
                </div>
            </section>
        </Layout>
    )
}

export default Donate
