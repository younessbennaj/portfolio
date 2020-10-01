import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";

import { TweenMax, TimelineLite, Power3, gsap } from "gsap";

//Assets
import wave from "../assets/wave.jpg";
import heroBg from "../assets/hero-bg.jpg";
import profile from "../assets/me.jpg";

//Components 
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import "./style.scss";

function useOnScreen(ref, threshold = 0, rootMargin = '0px') {
    // State and setter for storing whether element is visible
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Update our state when observer callback fires
                setIntersecting(entry.isIntersecting);
            },
            {
                rootMargin,
                //Détecter quand la visibilité franchit la barre des 50%
                threshold
            }
        );
        if (ref.current) {
            //Une fois l'observateur créé, il faut lui donner un élément cible à observer :
            //Ici c'est une référence à notre section
            observer.observe(ref.current);
        }
        return () => {
            observer.unobserve(ref.current);
        };
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return isIntersecting;
}

let tl = new TimelineLite();

const App = () => {

    let section = useRef(null);
    const onScreen = useOnScreen(section, 0, "-100px");

    let item1 = useRef(null);
    let item2 = useRef(null);

    let title = useRef(null);


    useEffect(() => {

        //Studies section vars 
        let headline = title.children[0];
        let innerHeadline = headline.children[0];

        if (onScreen) {
            tl.to(innerHeadline, { top: 0, bottom: 0, opacity: 1, delay: .8, ease: Power3.easeOut }, 'Start')
                .staggerTo([item1, item2], .8, { top: 0, bottom: 0, opacity: 1, ease: Power3.easeOut }, .15)
        } else {

        }

    }, [onScreen]);


    return (
        <div className="container">
            <Navbar />
            <Hero />

            {/* STUDIES SECTION */}
            <section className="studies" ref={section}>
                <h2 className="title-2" ref={el => title = el}>
                    <div className="title-2-line">
                        <div className="title-2-line-inner">
                            What kind of subject have I studied ?
                        </div>
                    </div>
                </h2>

                <div className="studies__item" >
                    <div className="studies__item-inner" ref={el => item1 = el}>
                        <h4 className="title-4">Sed ut perspiciatis</h4>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p>
                        <button>Learn more</button>
                    </div>
                </div>

                <div className="studies__item">
                    <div className="studies__item-inner" ref={el => item2 = el}>
                        <h4 className="title-4">Lorem ipsum dolor</h4>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p>
                        <button>Learn more</button>
                    </div>
                </div>

            </section>

            {/* ABOUT SECTION */}
            <section className="about">
                <div className="about__image">
                    <img src="https://via.placeholder.com/750x440" alt="" />
                </div>
                <div className="about__content">
                    <div>
                        <h4 className="title-4">Sed ut perspiciatis unde omnis</h4>
                        <p className="paragraph">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p>
                    </div>
                </div>
            </section>

            {/* SKILLS SECTION */}
            <section className="skills">
                <h2 className="title-2">Discover my differents skills</h2>
                <p className="title-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                <div className="skills__items">
                    <div className="skills__item"><img src="" alt="" /></div>
                    <div className="skills__item"><img src="" alt="" /></div>
                    <div className="skills__item"><img src="" alt="" /></div>
                    <div className="skills__item"><img src="" alt="" /></div>
                    <div className="skills__item"><img src="" alt="" /></div>
                    <div className="skills__item"><img src="" alt="" /></div>
                    <div className="skills__item"><img src="" alt="" /></div>
                    <div className="skills__item"><img src="" alt="" /></div>
                </div>
            </section>

            {/* CONTACT SECTION */}
            <section className="contact">
                <p className="title-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                <button className="btn">My resume</button>
                <button className="btn">Contact me</button>
            </section>

            {/* PORTFOLIO SECTION */}
            <section className="portfolio">
                <h2 className="title-2">You can check my differents projects</h2>
                <p className="title-3 portfolio__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                <div className="portfolio__items">
                    <div className="portfolio-card">
                        <img src="https://via.placeholder.com/430x275" alt="" />
                        <div className="portfolio-card__content">
                            <h6 className="title-4">Sed ut perspiciatis</h6>
                            <p className="paragraph">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
                        </div>
                    </div>
                    <div className="portfolio-card">
                        <img src="https://via.placeholder.com/430x275" alt="" />
                        <div className="portfolio-card__content">
                            <h6 className="title-4">Sed ut perspiciatis</h6>
                            <p className="paragraph">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
                        </div>
                    </div>
                    <div className="portfolio-card">
                        <img src="https://via.placeholder.com/430x275" alt="" />
                        <div className="portfolio-card__content">
                            <h6 className="title-4">Sed ut perspiciatis</h6>
                            <p className="paragraph">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}

            <footer className="footer">
                <div className="footer__nav">
                    <ul>
                        <li><a href="#home"><strong>Home</strong></a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <div className="footer__button-group">
                        <button className="btn">Contact me</button>
                        <button className="btn">My resume</button>
                    </div>
                </div>

                <hr />

                <div className="footer__social-links">
                    <p>© 2020 - Youness Bennaj</p>
                    <ul>
                        <li>Follow me:</li>
                        <li><a href="#">twitter</a></li>
                        <li><a href="#">github</a></li>
                        <li><a href="#">linkedIn</a></li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}

const root = document.getElementById("root");

ReactDOM.render(
    <App />,
    document.getElementById("root")
)