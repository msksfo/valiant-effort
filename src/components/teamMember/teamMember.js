import React from "react"
import teamMemberStyles from "../teamMember/teamMember.module.scss"

const TeamMember = props => {
    return (
        <li
            style={{ borderTop: `3px solid ${props.borderColor}` }}
            className={`${teamMemberStyles.teamMemberLi}`}
        >
            <img
                className={teamMemberStyles.profilePic}
                src={`${props.imageSource}`}
                alt={props.name}
            />

            <h3 className={teamMemberStyles.teamMemberName}>{props.name}</h3>

            {props.quote && (
                <q className={teamMemberStyles.quote}>{props.quote}</q>
            )}

            <p>{props.bio}</p>
        </li>
    )
}

export default TeamMember
