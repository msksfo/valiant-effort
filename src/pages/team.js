import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Head from "../components/head"
import Layout from "../components/layout/layout"
import teamStyles from "../styles/team.module.scss"

import martin from "../images/martin.jpg"
import alex from "../images/alex2.jpg"
import taurus from "../images/taurus2.jpg"
import bob from "../images/bob.jpg"
import greg from "../images/greg.jpg"
import keith from "../images/keith.jpg"
import edgar from "../images/edgar.jpg"
import cat from "../images/catOnPlane.png"

import TeamMember from "../components/teamMember/teamMember"

const Team = () => {
    
    const data = useStaticQuery(graphql`
        query CloudinaryImage {
            allCloudinaryMedia(sort: {fields: created_at, order: DESC}) {
                edges {
                    node {
                        secure_url
                    }
                }
            }
        }
    `)
    
     const cloudinaryImages = data.allCloudinaryMedia.edges
     
    const uploadToCloudinary = ( imageUrl) => {

        const uploadPreset = 'valiantEffortProject';
        const uploadEndpoint = 'https://api.cloudinary.com/v1_1/tesguerra/upload/'

        const fd = new FormData();
        fd.append('file', imageUrl);
        fd.append('upload_preset', uploadPreset)

        fetch(uploadEndpoint, {
            method: 'POST',
            body: fd,
        })
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleChange = (e) => {
        // because the initial styling is color: transparent. if the user chooses a file, let them see it's value.

        //? why doesn't document.querySelector('.fileInput') work???? 
       const fileInput = document.querySelector('input[type="file"]');
       
       if(e.target.value) {
           fileInput.style.color = 'inherit'
       }
       
    }

    const handleSubmit = (e) => {
        const myForm = document.querySelector('form')
        e.preventDefault();

        const password = prompt('Teammember: please enter the secret password')

        if (!password || password !== process.env.GATSBY_IMAGE_UPLOAD_PASSWORD) {
             myForm.reset();
            return;
        }


        const selectedFile = document.querySelector('[type=file]').files[0];
        // console.log('correct', selectedFile)
        uploadToCloudinary(selectedFile);                               
    }
     

    return (
        <Layout>
            <Head title="Team" />
            <div className={teamStyles.wrapper}>
                <section className={teamStyles.team}>
                    <div className={teamStyles.cartoon}></div>
                    <div className={teamStyles.introText}>
                        <p>When you are finished reading about us, <a className={teamStyles.scrollLink} href='#image-gallery'>scroll</a> down to see photos of the restoration project, as captured by members of the team. We're glad to have you here. Thanks so much for your interest and support!<br></br> Sincerely,</p>
                        
                        <p><span className={teamStyles.signatures}>Skipper, Big Daddy, Knobby, Francis, Gandolf, Hot Dog, and 3 Ball</span> ( We'll leave it to you to figure out who's who ) 
                        </p> 
                    </div>
                    

                    <ul className={teamStyles.teamList}>
                        <TeamMember
                            name="Martin Michaud"
                            quote="We are guardians of history"
                            bio="With 23,000 flight hours under his belt, Martin is without a doubt the most experienced pilot in the group. Somewhere along the way, he also picked up the love of warbirds, in which he has amassed over 1,000 in several types. That combined experience has served him well as a full time flight instructor, and in that cpacity, he has trained many pilots in civilian aircraft as well as warbirds."
                            imageSource={`${martin}`}
                            borderColor="#43c44c"
                        />

                        <TeamMember
                            name="Taurus Fey"
                            quote="In many ways, I feel that Annie chose me. I am grateful for the opportunity she has given me in being one of her caretakers, and seeing her return to the sky is the great aim that I and the team have in site. It's a tremendous honor!"
                            bio="Taurus' love of flying Annie is equalled by his passion for maintaining her in an airworthy state. As the leader of this effort, he has put in countless hours in saving the airframe from disposal and planning it's ultimate repair."
                            imageSource={`${taurus}`}
                            borderColor="#e78a53"
                        />

                        <TeamMember
                            name="Greg Ely"
                            bio="A master mechanic, Greg was the individual that initially brought Annie back to flying condition in the 1980's. Much to our relief, he enthusiastically volunteered his expertise in restoring her back to a flyable condition."
                            imageSource={`${greg}`}
                            borderColor="#5d53e7"
                        />

                        <TeamMember
                            name="Bob Goodwyn"
                            bio="A highly skilled pilot in his own right, Bob brings over 16,000 hours of flight experience (much of it in tail wheel) to the group, as well as an equal zeal in seeing Annie return to the skies."
                            imageSource={`${bob}`}
                            borderColor="rgb(247, 187, 36)"
                        />

                        <TeamMember
                            name="Alex Esguerra"
                            quote="In the last four years of flying Annie, she has taught me more about the life of a WW2 aviator than I have learned in the last four decades!"
                            bio="A long time military aviation buff, Alex has spent a good majority of his time flying Annie by honoring the veterans who actually flew that aircraft type. While he celebrates all veterans, he is especially passionate about the Women Airforce Service Pilots, a couple of which, he has personally flown in Annie."
                            imageSource={`${alex}`}
                            borderColor="#157eed"
                        />

                        <TeamMember
                            name="Keith Zimbauer"
                            bio="Keith has been involved in custom fabrication work and restoring cars, race cars, and boats for over 20 years. He brings an extensive knowledge of sheet metal working to our team as well as an extensive overall expertise in all things mechanical. Keith has been a high school and college auto shop teacher and presently works as a project manager for a large construction company. Keith has had a life long interest in aviation and vintage airplanes and brings a wealth of knowledge to our team! "
                            imageSource={`${keith}`}
                            borderColor="#97154b"
                        />

                        <TeamMember
                            name="Edgar Xiong"
                            quote="It is our duty to preserve and tell Annie's story"
                            bio="Edgar is a recent addition to our group, however he has been a long time fan and supporter of Annie. He is an up and coming warbird pilot who is presently earning his chops in aerobatic flight in Decathalons and otherwise flying anything he can. Filled with a passions for aviation from a young age, Edgar is pursuing his passion in aviation daily and it shows with his willingness to get his hands dirty and learn during our work sessions. We are looking forward to watching him go through the warbird checkout process!"
                            imageSource={`${edgar}`}
                            borderColor="#008080"
                        />
                    </ul>
                </section>
                
                
                <section id='image-gallery' className={teamStyles.imageGallery}>
                    <div className={teamStyles.headerWrapper}>
                        
                        <header>
                            <img src={`${cat}`} className={teamStyles.cat}/>
                            <h1>Annie's Restoration Journey In Pictures</h1>
                        </header>
                        
                        <form method='post' onSubmit={handleSubmit} >
                            <label htmlFor='imageUpload'> Select image to upload (teammembers only)   
                                <input className={teamStyles.fileInput} type='file' id='imageUpload' accept='image/*' onChange={handleChange}></input>
                            </label>

                            <input className={teamStyles.submit} type='submit' name='submit' value='Upload Image'/>
                        </form>
                    </div>
                    
                
                    <div className={teamStyles.outerContainer}>
                        <div className={teamStyles.innerContainer}>
                            <div className={teamStyles.imageGalleryWrapper}>
                                <div className={teamStyles.images}>
                                
                                    {
                                        cloudinaryImages.map((image, idx) => {

                                            return <img 
                                                        className={teamStyles.image}
                                                        key={idx}
                                                        src={image.node.secure_url}
                                                        alt={'Team members doing restoration work on Annie'}
                                                    />
                                        })
                                    }
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
            </div>
        </Layout>
    )
}

export default Team
