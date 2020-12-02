import React, { useState, useRef, useEffect } from "react";
import { useOnScreen } from "../useOnScreen";
import { TweenMax, TimelineLite, Power3 } from "gsap";

import { projects } from "../data/projects";

//Components 
import ProjectCard from "../components/ProjectCard";
import Button from "./Button";

let tl = new TimelineLite();

const Portfolio = () => {

    let section = useRef(null);
    let portfolio = useRef(null);
    let title = useRef(null);
    let subtitle = useRef(null);
    // let cards = useRef(null);
    // let button = useRef(null);

    const onScreen = useOnScreen(section, 0, "-400px 0px 0px -200px");
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {

        if (onScreen && !isAnimated) {
            setIsAnimated(true);
            TweenMax.to(portfolio, 0, { css: { visibility: 'visible' } });

            let headline = title.firstElementChild;
            let subHeadline = subtitle.firstElementChild;

            tl.from(headline.firstElementChild, .8, { y: 80, delay: 0.8, ease: Power3.easeOut }, 'Start')
                .from(subHeadline.firstElementChild, .8, { x: -1800, ease: Power3.easeOut }, .8)
            // .staggerFrom(cards.children, 1, { x: 1800, opacity: 0, ease: Power3.easeOut }, .8)
            // .from(button, 1, { y: 300, opacity: 0, ease: Power3.easeOut }, 1)
        }

    }, [onScreen]);
    return (
        <section className="portfolio" ref={section} id="portfolio">
            <div className="portfolio-inner" ref={el => portfolio = el}>
                <h2 className="title-2" ref={el => title = el}>
                    <div className="title-2-line">
                        <div className="title-2-line-inner">
                            Mes projets personnels
                        </div>
                    </div>
                </h2>
                <h3 className="title-3 portfolio__subtitle" ref={el => subtitle = el}>
                    <div className="title-3-line">
                        <div className="title-3-line-inner">
                            Voici quelques uns de mes projets terminés ou en cours de réalisation afin de vous présenter mes compétences et mon savoir-faire.
                        </div>
                    </div>
                </h3>
                <div className="portfolio__items">
                    {projects.map(project => {
                        return <ProjectCard key={project.title} {...project} />
                    })}
                </div>
                <div className="button-container">
                    <Button
                        url="https://github.com/younessbennaj?tab=repositories"
                        size="medium"
                        color="secondary"
                        label="Plus sur Github"
                    />
                </div>
            </div>

        </section>
    );
}

export default Portfolio;