import React from "react";
import "./footer.css";
import { FaGithub } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
    return (
        <footer>
            {/* <a href="#" className="footer__logo">Anujeet</a> */}
            <ul className="permalinks">
                {/* <li><a href="#">Home</a></li> */}
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://github.com/Anujeet23" target="_blank"><FaGithub/></a>
                <a href="https://www.linkedin.com/in/anujeet-kunturkar/" target="_blank"><BsLinkedin/> </a>
                <a href="https://leetcode.com/anujeet23/" target="_blank"><SiLeetcode/></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; 2024 Anujeet Kunturkar. All rights reserved</small>
            </div>
        </footer>
    );
};

export default Footer;