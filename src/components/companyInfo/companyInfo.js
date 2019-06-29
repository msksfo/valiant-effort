import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhoneVolume } from "@fortawesome/free-solid-svg-icons"
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons"
import companyInfoStyles from "../companyInfo/companyInfo.module.scss"

const CompanyInfo = props => {
    return (
        <div className={companyInfoStyles.companyInfo}>
            <h3 className={companyInfoStyles.companyName}>
                {props.companyName}
            </h3>
            <ul>
                <li>
                    <FontAwesomeIcon size="lg" icon={faEnvelope} />
                    <span className={companyInfoStyles.info}>
                        {props.companyEmail}
                    </span>
                </li>

                <li>
                    <FontAwesomeIcon size="lg" icon={faPhoneVolume} />
                    <span className={companyInfoStyles.info}>
                        Taurus ~ {props.taurusPhone}
                    </span>
                </li>

                <li>
                    <FontAwesomeIcon size="lg" icon={faPhoneVolume} />
                    <span className={companyInfoStyles.info}>
                        Alex ~ {props.alexPhone}
                    </span>
                </li>

                <li>
                    <a
                        href="https://www.facebook.com/valianteffortllc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={companyInfoStyles.socialLink}
                    >
                        <FontAwesomeIcon size="lg" icon={faFacebookSquare} />
                        <span className={companyInfoStyles.info}>
                            Like us on facebook
                        </span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default CompanyInfo
