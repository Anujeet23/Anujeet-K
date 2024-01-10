import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";


const HeaderSocials = () => {
    return(
        <div className="header_socials">
            <a href="https://www.linkedin.com/in/anujeet-kunturkar/" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com/Anujeet23" target="_blank"><FaGithub/></a>
            <a href="https://leetcode.com/anujeet23/" target="_blank"><SiLeetcode/></a>
            <a href="https://www.codechef.com/users/anujeet23" target="_blank"><SiCodechef/></a>
        </div>
    );
};

export default HeaderSocials;