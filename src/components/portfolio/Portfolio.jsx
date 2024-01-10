import React from "react";
import "./portfolio.css";
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg' 
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'
// import IMG7 from '../../assets/portfolio1.jpg'

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG1} alt=""/>
                    </div>
                    <h3>Drawly</h3>
                    <p>🎨✨An Innovative Drawing Tool✨🎨</p>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/Anujeet23/Drawly" className="btn" target="_blank">Github</a>
                        <a href="https://drawly-five.vercel.app/" className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG2} alt=""/>
                    </div>
                    <h3>NetflixGPT</h3>
                    <p>🍿✨Your Next-Gen Streaming Experience✨🍿</p>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/Anujeet23/NetflixGPT" className="btn" target="_blank">Github</a>
                        <a href="https://netflix-gpt-anujeet23.vercel.app/" className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG3} alt=""/>
                    </div>
                    <h3>Food4Good</h3>
                    <p>🍔✨Savor the Flavors, Live!✨🛵</p>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/Anujeet23/Food4Good" className="btn" target="_blank">Github</a>
                        <a href="https://food4goody.netlify.app/" className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG4} alt=""/>
                    </div>
                    <h3>Portfolio</h3>
                    <p>🌟🚀 Discover My Stellar Portfolio! 🚀✨</p>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/Anujeet23/Anujeet-K" className="btn" target="_blank">Github</a>
                        <a href="https://github.com/Anujeet23" className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article>
                
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG5} alt=""/>
                    </div>
                    <h3>Apartment-Buddy</h3>
                    <p>🌍✨Discover Places by Your Preferences ✨🌟</p>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/Anujeet23/Apartment-Buddy" className="btn" target="_blank">Github</a>
                        <a href="https://anujeet23.github.io/Apartment-Buddy/" className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG6} alt=""/>
                    </div>
                    <h3>Just-Search</h3>
                    <p>📷✨ Search, Capture, Enjoy! ✨🔍</p>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/Anujeet23/Just-Search" className="btn" target="_blank" >Github</a>
                        <a href="https://anujeet23.github.io/Just-Search/" className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Portfolio;