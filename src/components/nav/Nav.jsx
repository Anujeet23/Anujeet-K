import React from "react";
import "./nav.css";
import { IoHomeOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { BiBook } from "react-icons/bi";
import { RiServiceFill } from "react-icons/ri";
import { RiContactsBook2Fill } from "react-icons/ri";
import { useState } from "react";

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#');

    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><IoHomeOutline/></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUser/></a>
            <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
            <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceFill/></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><RiContactsBook2Fill/></a>
        </nav>
    );
};

export default Nav;