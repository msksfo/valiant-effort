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
        <li className={ isActive ? cx(teamMemberStyles.teamMemberLi, teamMemberStyles.liActive) : teamMemberStyles.teamMemberLi}>
            
            <img
                className={isActive ? cx( teamMemberStyles.profilePic, teamMemberStyles.profilePicActive) : teamMemberStyles.profilePic}
                src={ !isActive ? `${props.cartoonImageSource}` : `${props.imageSource}`}
                alt={props.name}
            />

            <button className={teamMemberStyles.btn}
                     onClick={handleClick}
                     aria-label={isActive ? 'Close' : 'Open'}

            >
                 {isActive ? '\u0078'
                            : <span>{'\u2304'}</span>
                }
                            
                    
            </button>

            <div className={ isActive ? cx(teamMemberStyles.textContent, teamMemberStyles.active) : cx(teamMemberStyles.textContent) }>
                <h3 className={teamMemberStyles.teamMemberName}>{props.name}</h3>

                {props.quote && (
                    <q className={teamMemberStyles.quote}>{props.quote}</q>
                )}

                <p className={teamMemberStyles.bio}>{props.bio}</p>
            </div>   
        </li>
    )
}

export default TeamMember
