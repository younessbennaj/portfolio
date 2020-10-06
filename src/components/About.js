import React, { useState, useRef, useEffect } from "react";
import { useOnScreen } from "../useOnScreen";
import { TweenMax, TimelineLite, Power3 } from "gsap";

import aboutImage from "../../assets/about.jpg";

let tl = new TimelineLite();

const About = () => {

    let image = useRef(null);
    let content = useRef(null);

    let section = useRef(null);
    let about = useRef(null);

    const onScreen = useOnScreen(section, 0, "-300px 0px 0px -100px");
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {

        if (onScreen && !isAnimated) {
            setIsAnimated(true);

            TweenMax.to(about, 0, { css: { visibility: 'visible' } });

            tl.from(image, 1.2, { y: 1280, ease: Power3.easeOut }, 'Start')
                .from(image.firstElementChild, 2, { scale: 1.6, ease: Power3.easeOut }, .2)
                .from(content, 1, { y: 800, ease: Power3.easeOut }, .8)
        }

    }, [onScreen]);

    return (
        <section className="about" ref={section} id="about">
            <div className="about-inner" ref={el => about = el}>
                <div className="about__image">
                    <div className="about__image-inner" ref={el => image = el}>
                        <img src={aboutImage} alt="" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__content-inner" ref={el => content = el}>
                        <h4 className="title-4">
                            A propos de moi
                    </h4>
                        <p className="paragraph">
                            Je suis actuellement à la recherche d'un contrat de professionnalisation dans le cadre de la formation MSc Pro d'Epitech.
                            Je peux exercer en tant que développeur Front End, notament le développement d'application avec l'écosystème React JS. Je suis également ouvert
                            à toutes autres missions impliquant du développement JS.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;