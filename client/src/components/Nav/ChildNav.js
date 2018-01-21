import React from "react";
import {Link} from 'react-router-dom';
import logo from '../../assets/logo/logo_big_wide.png'
import rewardsImg from '../../assets/icons/R.png'
import missionsImg from '../../assets/icons/M.png'


import "./Nav.css";


export const ChildNav = () =>
    <nav className="childnav navbar navbar-inverse navbar-top">
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
                    <li className={"nav-icon"}><Link to='/child/missions'>
                        <img
                            alt="Missions" className={"nav-icon-img"}
                            src={missionsImg}/>
                        <div className={"nav-icon-text"}>Mission</div>
                    </Link></li>
                    <li className={"nav-icon"}><Link to='/child/rewards'>
                        <img
                            alt="Rewards" className={"nav-icon-img"}
                            src={rewardsImg}/>
                        <div className={"nav-icon-text"}>Rewards</div>
                    </Link></li>

                </ul>
            </div>
        </div>
    </nav>
;


