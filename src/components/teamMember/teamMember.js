import React, {useState}  from "react"
import cx from 'classnames'
import teamMemberStyles from "../teamMember/teamMember.module.scss"



const TeamMember = props => {
   const [isActive, setActive] = useState(false)

   const handleClick = (e) => {
        // console.log(e.currentTarget.nextElementSibling)
         setActive(!isActive);
    }

    return (
        <li className={teamMemberStyles.teamMemberLi}>
            
            <img
                className={teamMemberStyles.profilePic}
                src={ !isActive ? `${props.cartoonImageSource}` : `${props.imageSource}`}
                alt={props.name}
            />

            <button className={teamMemberStyles.btn} onClick={handleClick}>
                <span className={teamMemberStyles.open}>&#8964;</span>
                    <span className={teamMemberStyles.close}>&times;</span>
            </button>

            <div className={ isActive ? cx(teamMemberStyles.textContent, teamMemberStyles.active) : cx(teamMemberStyles.textContent) }>
                <h3 className={teamMemberStyles.teamMemberName}>{props.name}</h3>

                {props.quote && (
                    <q className={teamMemberStyles.quote}>{props.quote}</q>
                )}

                <p>{props.bio}</p>
            </div>
               
        </li>
    )
}

export default TeamMember
