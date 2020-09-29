import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";

import { TweenMax, TimelineLite, Power3 } from "gsap";

//Assets
import wave from "../assets/wave.jpg";
import heroBg from "../assets/hero-bg.jpg";
import profile from "../assets/me.jpg";

import "./style.scss";

const App = () => {

    let hero = useRef(null);
    let image = useRef(null);
    let content = useRef(null);

    let tl = new TimelineLite();

    useEffect(() => {

        // Content vars
        let headlineFirst = content.children[0].children[0];
        let headlineSecond = headlineFirst.nextSibling;
        let paragraph = content.children[1];
        let button = content.children[2];

        console.log(headlineFirst, headlineSecond, paragraph, button);

        TweenMax.to(hero, 0, { css: { visibility: 'visible' } });

        //Content animation
        tl.staggerFrom([headlineFirst.children, headlineSecond.children], 1, {
            y: 80,
            ease: Power3.easeOut,
            delay: .8
        }, .15, 'Start')
            .from(paragraph, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.4)
            .from(button, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.6)

        //Image animation 
        tl.from(image, 1.2, { y: 1280, ease: Power3.easeOut }, 'Start')
            .from(image.firstElementChild, 2, { scale: 1.6, ease: Power3.easeOut }, .2)
    }, [tl]);

    return (
        <div className="container">

            {/* NAVBAR */}
            <header className="navbar">
                <a href="#menu-mobile" className="navbar__toggle-btn">
                    <span className="navbar__burger-icon"></span>
                </a>
                <nav id="menu-mobile" className="navigation-mobile">
                    {/* <a href="#" className="navigation-mobile__close">close</a> */}
                    <ul className="navigation-mobile__list">
                        <li><a href="#">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <nav className="navigation-desktop">
                    <ul className="navigation-desktop__list">
                        <li><a href="#">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>

            {/* HERO SECTION */}
            <main className="hero" ref={el => hero = el}>
                <div className="hero__content">
                    <div className="hero__content-inner" ref={el => content = el}>
                        <h1 className="hero__title">
                            <div className="hero__title-line">
                                <div className="hero__title-line-inner">I'm Youness Bennaj,</div>
                            </div>
                            <div className="hero__title-line">
                                <div className="hero__title-line-inner">a JavaScript Developer.</div>
                            </div>
                        </h1>
                        <p className="paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita possimus laborum earum adipisci dolores architecto perspiciatis ducimus itaque commodi est, ipsum, sit, aliquid quod! Soluta consequuntur saepe aperiam fuga beatae.</p>
                        <button className="hero__btn">Get in touch</button>
                    </div>
                </div>
                <hr />
                <div className="hero__image-container">
                    <div className="hero__image" ref={el => image = el}>
                        <img src="https://via.placeholder.com/375x530" alt="" />
                    </div>
                </div>
            </main>

            {/* STUDIES SECTION */}
            <section className="studies">

                <h2 className="title-2">What kind of subject have I studied ?</h2>

                <div className="studies__item">
                    <h4 className="title-4">Sed ut perspiciatis</h4>
                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p>
                    <button>Learn more</button>
                </div>

                <div className="studies__item">
                    <h4 className="title-4">Lorem ipsum dolor</h4>
                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p>
                    <button>Learn more</button>
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