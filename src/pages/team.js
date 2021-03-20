import React from "react"
import Head from "../components/head"
import Layout from "../components/layout/layout"
import teamStyles from "../styles/team.module.scss"

import martin from "../images/martin.jpg"
import martinCartoon from '../images/martinCartoon.png'
import alex from "../images/alex2.jpg"
import alexCartoon from "../images/alexCartoon.png"
import taurus from "../images/taurus2.jpg"
import taurusCartoon from '../images/taurusCartoon.png'
import bob from "../images/bob.jpg"
import bobCartoon from '../images/bobCartoon.png'
import greg from "../images/greg.jpg"
import gregCartoon from '../images/gregCartoon.png'
import keith from "../images/keith.jpg"
import keithCartoon from '../images/keithCartoon.png'
import edgar from "../images/edgar.jpg"
import edgarCartoon from '../images/edgarCartoon.png'

import TeamMember from "../components/teamMember/teamMember"


const Team = () => {
     
    return (
        <Layout>
            <Head title="Team" />
            <div className={teamStyles.wrapper}>
                <section className={teamStyles.team}>
                    
                    <div className={teamStyles.introText}>
                        <p> We're glad to have you here. Thanks so much for your interest and support!<br></br> Sincerely,</p>
                        
                        <p><span className={teamStyles.signatures}>Skipper, Big Daddy, Knobby, Francis, Gandolf, Hot Dog, and 3 Ball</span> ( We'll leave it to you to figure out who's who ) 
                        </p> 
                    </div>
                    

                    <ul className={teamStyles.teamList}>
                        <TeamMember
                            name="Martin Michaud"
                            quote="We are guardians of history"
                            bio="With 23,000 flight hours under his belt, Martin is without a doubt the most experienced pilot in the group. Somewhere along the way, he also picked up the love of warbirds, in which he has amassed over 1,000 in several types. That combined experience has served him well as a full time flight instructor, and in that cpacity, he has trained many pilots in civilian aircraft as well as warbirds."
                            imageSource={`${martin}`}
                            cartoonImageSource={`${martinCartoon}`}
                            borderColor="#43c44c"
                           
                        />

                        <TeamMember
                            name="Taurus Fey"
                            quote="In many ways, I feel that Annie chose me. I am grateful for the opportunity she has given me in being one of her caretakers, and seeing her return to the sky is the great aim that I and the team have in site. It's a tremendous honor!"
                            bio="Taurus' love of flying Annie is equalled by his passion for maintaining her in an airworthy state. As the leader of this effort, he has put in countless hours in saving the airframe from disposal and planning it's ultimate repair."
                            imageSource={`${taurus}`}
                            cartoonImageSource={`${taurusCartoon}`}
                            borderColor="#e78a53"
                        />

                        <TeamMember
                            name="Greg Ely"
                            bio="A master mechanic, Greg was the individual that initially brought Annie back to flying condition in the 1980's. Much to our relief, he enthusiastically volunteered his expertise in restoring her back to a flyable condition."
                            imageSource={`${greg}`}
                            cartoonImageSource={`${gregCartoon}`}
                            borderColor="#5d53e7"
                        />

                        <TeamMember
                            name="Bob Goodwyn"
                            bio="A highly skilled pilot in his own right, Bob brings over 16,000 hours of flight experience (much of it in tail wheel) to the group, as well as an equal zeal in seeing Annie return to the skies."
                            imageSource={`${bob}`}
                            cartoonImageSource={`${bobCartoon}`}
                            borderColor="rgb(247, 187, 36)"
                        />

                        <TeamMember
                            name="Alex Esguerra"
                            quote="In the last four years of flying Annie, she has taught me more about the life of a WW2 aviator than I have learned in the last four decades!"
                            bio="A long time military aviation buff, Alex has spent a good majority of his time flying Annie by honoring the veterans who actually flew that aircraft type. While he celebrates all veterans, he is especially passionate about the Women Airforce Service Pilots, a couple of which, he has personally flown in Annie."
                            imageSource={`${alex}`}
                            cartoonImageSource={`${alexCartoon}`}
                            borderColor="#157eed"
                        />

                        <TeamMember
                            name="Keith Zimbauer"
                            bio="Keith has been involved in custom fabrication work and restoring cars, race cars, and boats for over 20 years. He brings an extensive knowledge of sheet metal working to our team as well as an extensive overall expertise in all things mechanical. Keith has been a high school and college auto shop teacher and presently works as a project manager for a large construction company. Keith has had a life long interest in aviation and vintage airplanes and brings a wealth of knowledge to our team! "
                            imageSource={`${keith}`}
                            cartoonImageSource={`${keithCartoon}`}
                            borderColor="#97154b"
                        />

                        <TeamMember
                            name="Edgar Xiong"
                            quote="It is our duty to preserve and tell Annie's story"
                            bio="Edgar is a recent addition to our group, however he has been a long time fan and supporter of Annie. He is an up and coming warbird pilot who is presently earning his chops in aerobatic flight in Decathalons and otherwise flying anything he can. Filled with a passions for aviation from a young age, Edgar is pursuing his passion in aviation daily and it shows with his willingness to get his hands dirty and learn during our work sessions. We are looking forward to watching him go through the warbird checkout process!"
                            imageSource={`${edgar}`}
                            cartoonImageSource={`${edgarCartoon}`}
                            borderColor="#008080"
                        />
                    </ul>
                </section>
               
            </div>
        </Layout>
    )
}

export default Team
