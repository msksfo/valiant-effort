import React, { Component } from "react"
import { Link } from "gatsby"
import Head from "../components/head"
import cx from 'classnames'
import indexStyles from "../styles/index.module.scss"

//* TODO: make this component a functional component with hooks?

class Home extends Component {
    constructor(props) {
        super()
        this.state = {
            isOpen: false,
            ariaExpanded: false,
            pageLoaded: false,
        }

        this.toggleMenu = this.toggleMenu.bind(this)
    }

    toggleMenu() {
      
        this.setState(prevState => {
            return {
                isOpen: !prevState.isOpen,
                ariaExpanded: !prevState.ariaExpanded,
                pageLoaded: true
            }
        })
    }

    render() {
        return (
            <div className={indexStyles.wrapper}>
                <Head title="Home" />

                <button
                    onClick={this.toggleMenu}
                    className={indexStyles.toggleMenuOpen}
                    aria-label='open navigation menu'
                >
                    <span className={indexStyles.hamburgerIcon}>
                        <div className={indexStyles.hamburgerTop}></div>
                        <div
                            className={indexStyles.hamburgerMiddle}
                        ></div>
                        <div
                            className={indexStyles.hamburgerBottom}
                        ></div>
                    </span>
                </button>


                <header className={indexStyles.header}>
                   <h1 className={indexStyles.logo}>Valiant Effort</h1>
                </header>
                    {/*
                        the nested ternary in the nav is because the css animation to close the mobile menu was running immediately on page load. #codenewbie here - feel free to tell me another way of solving this problem.
                    */}
                    <nav
                        className={ this.state.isOpen ?
                                    cx(indexStyles.mobileNav, indexStyles.show) 
                                    : this.state.pageLoaded ?
                                    cx(indexStyles.mobileNav, indexStyles.hide) 
                                    : cx(indexStyles.mobileNav)}
                    >
                        

                        <div className={ this.state.isOpen ?
                                    cx(indexStyles.red, indexStyles.show) 
                                    : this.state.pageLoaded ?
                                    cx(indexStyles.red, indexStyles.hide) 
                                    : cx(indexStyles.red)}>
                        
                            <ul
                                className={this.state.isOpen ?
                                    cx(indexStyles.mobileNavList, indexStyles.show)
                                    : this.state.pageLoaded ?
                                    cx(indexStyles.mobileNavList, indexStyles.hide)
                                    : cx(indexStyles.mobileNavList)}
                            >
                                <button
                                    onClick={this.toggleMenu}
                                    className={indexStyles.toggleMenuClose}
                                    aria-label='close navigation menu'
                                >   
                                    &times;
                                </button>
                                
                                <li>
                                    <Link to="/annie">Annie</Link>
                                </li>
                                <li>
                                    <Link to="/team">Team</Link>
                                </li>
                                <li>
                                    <Link to="/blog">Blog</Link>
                                </li>
                                <li>
                                    <Link to="/events">Events</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                                <li>
                                    <Link to="/donate">Donate</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>

                <nav className={indexStyles.fullNav}>
                    <ul className={indexStyles.navList}>
                        <li>
                            <Link to="/annie">Annie</Link>
                        </li>
                        <li>
                            <Link to="/team">Team</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="/events">Events</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/donate">Donate</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Home
