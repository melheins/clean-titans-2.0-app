import React from "react";
import {Link} from 'react-router-dom';
import logo from '../../assets/logo/logo_big_wide.png'
import teamImg from '../../assets/icons/T.png'
import apprImg from '../../assets/icons/A.png'
import rewardsImg from '../../assets/icons/R.png'
import missionsImg from '../../assets/icons/M.png'
import heroesImg from '../../assets/icons/H.png'


import "./Nav.css";


export const ParentNav = () =>
    <nav className="parentnav navbar navbar-inverse navbar-top">
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="collapsed navbar-toggle">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"/> <span className="icon-bar"/>
                    <span className="icon-bar"/>
                </button>
                <a href="/" className="">
                    <img className={"header-logo"} src={logo} alt="logo"/>
                </a>
                <ul className={"nav navbar-nav navbar-right"}>
                    <li className={"nav-icon"}><Link to='/parent/approvals'>
                        <img alt="Approvals"
                             className={"nav-icon-img"}
                             src={apprImg}/>
                        <div className={"nav-icon-text"}>Approvals</div>
                    </Link></li>
                    <li className={"nav-icon"}><Link to='/parent/team'>
                        <img alt="Team"
                             className={"nav-icon-img"}
                             src={teamImg}/>
                        <div className={"nav-icon-text"}>Team</div>
                    </Link></li>
                    <li className={"nav-icon"}><Link to='/parent/missions'>
                        <img
                            alt="Missions" className={"nav-icon-img"}
                            src={missionsImg}/>
                        <div className={"nav-icon-text"}>Mission</div>
                    </Link></li>
                    <li className={"nav-icon"}><Link to='/parent/rewards'>
                        <img
                            alt="Rewards" className={"nav-icon-img"}
                            src={rewardsImg}/>
                        <div className={"nav-icon-text"}>Rewards</div>
                    </Link></li>
                    <li className={"nav-icon"}><Link to='/childlogin'>
                        <img
                            alt="Child Login" className={"nav-icon-img"}
                            src={heroesImg}/>
                        <div className={"nav-icon-text"}>Hero's Login</div>
                    </Link></li>

                </ul>
            </div>
        </div>
    </nav>
;


