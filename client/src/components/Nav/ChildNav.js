import React from "react";
//import {AppBar, Tabs, Tab} from 'material-ui';
//import MissionBtn from "../NavBtns";
//import missionsImage from "../../../public/images/icons/clean01.png"
import logo from '../../assets/logo/logo_big_wide.png'
import teamImg from '../../assets/icons/fam01.png'
import rewardsImg from '../../assets/icons/reward01.png'
import missionsImg from '../../assets/icons/clean01.png'


import "./Nav.css";


export const ChildNav = () =>
    <nav className="navbar navbar-inverse navbar-top">
        <div className="container-fluid">
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
                    <li className={"nav-icon"}><a href="/" className={"child_missions"}>
                        <img
                            alt="Missions" className={"nav-icon-img"}
                            src={missionsImg}/>
                        <div className={"nav-icon-text"}>Mission</div>
                    </a></li>
                    <li className={"nav-icon"}><a href="/" className={"child_rewards"}>
                        <img
                            alt="Rewards" className={"nav-icon-img"}
                            src={rewardsImg}/>
                        <div className={"nav-icon-text"}>Rewards</div>
                    </a></li>

                </ul>
            </div>
        </div>
    </nav>
;


