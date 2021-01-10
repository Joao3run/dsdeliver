import React from 'react';
import './styles.css'
import {ReactComponent as YouTubeIcon} from "../../assets/img/Youtube.svg";
import {ReactComponent as LinkedinIcon} from "../../assets/img/Linkedin.svg";
import {ReactComponent as InstagranIcon} from "../../assets/img/Instagram.svg";

const Footer = () => {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.youtube.com/devsuperior" target="_blank">
                    <YouTubeIcon/>
                </a>
                <a href="https://www.linkedin.com/school/devsuperior/" target="_blank">
                    <LinkedinIcon/>
                </a>
                <a href="https://instagram.com/devsuperior.ig" target="_blank">
                    <InstagranIcon/>
                </a>
            </div>
        </footer>
    )
};

export default Footer;
