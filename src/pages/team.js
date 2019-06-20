import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Head from "../components/head"
import Layout from "../components/layout/layout"
import teamStyles from "../styles/team.module.scss"

import cirrus from "../images/cirrus.jpg"
import martin from "../images/martin.jpg"
import alex from "../images/alex2.jpg"
import taurus from "../images/taurus.jpg"
import bob from "../images/bob.jpg"
import greg from "../images/greg.jpg"

import TeamMember from "../components/teamMember/teamMember"

const Team = () => {
    const data = useStaticQuery(graphql`
        query {
            allTeamMembersJson {
                edges {
                    node {
                        name
                        quote
                        bio
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <Head title="Team" />
            <div className={teamStyles.wrapper}>
                <ul className={teamStyles.teamList}>
                    <TeamMember
                        name="Martin Michaud"
                        quote="We are guardians of history"
                        bio="With 23,000 flight hours under his belt, Martin is without a doubt the most experienced pilot in the group. Somewhere along the way, he also picked up the love of warbirds, in which he has amassed over 1,000 in serveral types. That combined experience has served him well as a full time flight instructor, and in that cpacity, he has trained many pilots in civilian aircraft as well as warbirds."
                        imageSource={`${martin}`}
                        borderColor="#43c44c"
                    />

                    <TeamMember
                        name="Taurus"
                        quote="Taurus quote here"
                        bio="Taurus married Midori"
                        imageSource={`${taurus}`}
                        borderColor="#e78a53"
                    />

                    <TeamMember
                        name="Greg Eli"
                        quote="Greg quote here"
                        bio="Greg bio"
                        imageSource={`${greg}`}
                        borderColor="rgb(247, 187, 36)"
                    />

                    <TeamMember
                        name="Bob Goddwin"
                        quote="Bob quote here"
                        bio="Bob bio"
                        imageSource={`${bob}`}
                        borderColor="#5d53e7"
                    />

                    <TeamMember
                        name="Alex Esguerra"
                        quote="In the last four years of flying Annie, she has taught me more about the life of a WW2 aviator than I have learned in the last four decades!"
                        bio="Alex is the best pilot. Plus he loves the plane the most. He should get to keep it."
                        imageSource={`${alex}`}
                        borderColor="#157eed"
                    />

                    <TeamMember
                        name="Keith Zimbauer"
                        quote="Keith quote here"
                        bio="Keith bio"
                        imageSource={`${cirrus}`}
                        borderColor="#97154b"
                    />
                </ul>
            </div>
        </Layout>
    )
}

export default Team
