import React from "react";
import './services.css';
import { BiCheck } from "react-icons/bi";

const Services = () => {
    return (
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services and Interests</h2>

            <div className="container services__container">
                 {/* Web Development */}
                <article className="service">
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Proficient in JavaScript, delivering dynamic applications. </p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Expertise in ReactJS/NextJs and Tailwind.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Demonstrating proficiency in Redux for efficient state management.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Understanding of Custom-Hooks/Parcel/Babel, and Google Firebase for cloud services.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Integrating live data from APIs for dynamic, user-centric applications.</p>
                        </li>
                        {/* <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li> */}
                    </ul>
                </article>
                    
                    {/* DSA in Java */}
                    <article className="service">
                    <div className="service__head">
                        <h3>DSA in Java</h3>
                        {/* <h6>Primary</h6> */}
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Leveraged Java as the primary programming language for problem-solving.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Mastering LeetCode with over 190 problems and counting.....</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Successfully conquered over 250 CodeChef problems.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Demonstrated commitment to ongoing learning by consistently solving DSA problems.</p>
                        </li>
                        {/* <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li> */}
                    </ul>
                </article>
                    
                    {/* Machine Learning */}
                    <article className="service">
                    <div className="service__head">
                        <h3>Machine Learning</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Learner of Machine Learning Inspired by the Best - Andrew Ng.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Specializing in advanced machine learning algorithms.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Primarily focused on improving performance.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Completed a specialized Machine Learning certification, emphasizing continuous learning.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Applied Machine Learning skills in remote internships at Prodigy Infotech</p>
                        </li>
                    </ul>
                </article>
            </div>

        </section>
    );
};

export default Services;
