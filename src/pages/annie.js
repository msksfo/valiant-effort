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
                    California. Delivered in May of 1942, very little is
                    actually known of her history. It was verified that she
                    served as a basic trainer in Modesto Army Airfield for much
                    of her time, and occationally crisscrossed the country
                    several times for maintenance rework. Once released from the
                    military at the end of WWII as surplus, her history is
                    largely unknown until 1983, when she was obtained by a
                    private owner.
                </p>
            </Layout>
        </div>
    )
}

export default Annie
