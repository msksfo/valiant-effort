import React from "react"
import Head from "../components/head"
import Layout from "../components/layout/layout.js"
import annieStyles from "../styles/annie.module.scss"
import annieImage from "../images/anniePageImage.jpg"

const Annie = () => {
    return (
        <div>
            <Layout>
                <Head title="Annie" />
                <figure className={annieStyles.annieFigure}>
                    <img
                        className={annieStyles.annieImage}
                        src={annieImage}
                        alt="Annie at engine start"
                    />
                </figure>
                <p className={annieStyles.history}>
                    Annie is the nickname of one 41-21218, the serial number for
                    the BT-13A that was built at Downey Aircraft in Southern
                    California. Delivered in May of 1942 to Merced Army Air
                    Field. We have been able to uncover much of her rich history
                    and are actively researching more about her. It is known
                    that she completed a full tour of duty at Merced over the
                    span of several years, she trained many individuals and did
                    not ever sustain any major damage. Her military records show
                    that she traveled around the country several times for
                    maintenance rework. Her military records have verified that
                    her current markings are historically accurate, the
                    designation for Merced was E and her field number was in
                    fact 524. Once released from the military at the end of WWII
                    as surplus, she was purchased by Soloman "Sol" Sweet, of
                    Sweet Flying Service out of Visalia California. Sol was the
                    founder of the airport in Visalia and a prolific aviator of
                    his time. Not much is known of her time with Sol, and her
                    paper trail goes dark until the early 80's when she was
                    purchased by a private party. Since that time she has gone
                    on to be seen at many airshows, appeared on the big screen
                    alongside Mel Gibson in the 1990's film "Forever Young",
                    been on display at a museum, been featured in a magazine
                    article, and has continued on her journey of teaching men
                    and women the basic skills needed to fly warbirds. Her name
                    originated from a few years back, during some corrosion
                    repair deep inside her wing we uncovered a name written on
                    the metal, invariably put there by a Rosie the Riveter named
                    Annie.
                </p>
            </Layout>
        </div>
    )
}

export default Annie
