import React, { useState, useRef, useEffect } from "react";
import { useOnScreen } from "../useOnScreen";
import { TweenMax, TimelineLite, Power3 } from "gsap";

let tl = new TimelineLite();

const Studies = () => {

    let section = useRef(null);
    let studies = useRef(null);

    let item1 = useRef(null);
    let item2 = useRef(null);

    let title = useRef(null);

    //UI State
    const onScreen = useOnScreen(section, 0, "-100px");

    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {

        //Studies section vars 
        let headline = title.children[0];
        let innerHeadline = headline.children[0];

        if (onScreen && !isAnimated) {
            //Lunch animation only the first time we scroll on the section
            setIsAnimated(true);

            TweenMax.to(studies, 0, { css: { visibility: 'visible' } });

            tl.from(innerHeadline, 1, {
                y: 80,
                ease: Power3.easeOut,
                delay: .2
            }, .15, 'Start')
                .staggerFrom([item1, item2], .8, { y: 800, opacity: 0, ease: Power3.easeOut }, .15)
        }

    }, [onScreen]);

    return (
        <section className="studies" ref={section}>
            <div className="studies-inner" ref={el => studies = el}>
                <h2 className="title-2" ref={el => title = el}>
                    <div className="title-2-line">
                        <div className="title-2-line-inner">
                            Parcours & Formations
                        </div>
                    </div>
                </h2>

                <div className="studies__item">
                    <div className="studies__item-inner" ref={el => item1 = el}>
                        <h4 className="title-4">IFOCOP PARIS XI - Développeur full stack JS (2016 - 2017)</h4>
                        <p>Formation à la programmation JavaScript, aussi bien la dimension front-end (création d’interfaces claires et ergonomiques, intégration des différentes pages), ou back-end (développement et programmation des fonctionnalités et bases de données).</p>
                        <button className="btn btn-outline"><a href="">En savoir plus</a></button>
                    </div>
                </div>

                <div className="studies__item">
                    <div className="studies__item-inner" ref={el => item2 = el}>
                        <h4 className="title-4">MSc Pro Transformation Digitale (Présent)</h4>
                        <p>Au delà de consolider mes connaissances techniques et m’ouvrir à d’autres langages de programmation, le master que j’entreprends développe avant tout l’autonomie et la capacité d’adaptation des étudiants, futurs experts en informatique. Pour cela, l’étudiant va être amené à acquérir une expertise en lien avec une spécialisation.</p>
                        <button className="btn btn-outline"><a href="">En savoir plus</a></button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Studies;