import React, { useState, useRef, useEffect } from "react";
import { useOnScreen } from "../useOnScreen";
import { TweenMax, TimelineLite, Power3 } from "gsap";

//Import components 
import SkillCard from "./SkillCard";
import RoundedIcon from "./RoundedIcon";

let tl = new TimelineLite();

const javascript = {
    title: "javascript",
    description: "Je suis passionné par le développement d’applications dans un environnement JS riche et avancé. Formé au développement JS au cours de mon cursus, je continue depuis à me perfectionner sur ce langage pour en comprendre les spécificités et les particularités."
}

const frontEnd = {
    title: "front end",
    description: "Je suis riche d’une première expérience de deux ans avec AngularJS. Depuis, React JS est devenu mon choix de prédilection pour toute application JS et je continue de me perfectionner. Amoureux des belles interfaces, je suis capable de les intégrer en CSS pure, avec Sass, ou en utilisant des Styled Components."
}

const backEnd = {
    title: "back end",
    description: "Je suis également capable de participer à la conception et au développement de nouvelles fonctionnalités sur une API en NodeJS. Je possède également une connaissance des technologies firebase et firestore."
}

const Skills = () => {

    let section = useRef(null);
    let skills = useRef(null);
    let title = useRef(null);
    let subtitle = useRef(null);
    // let items = useRef(null);

    //UI State 
    const onScreen = useOnScreen(section, 0, "-100px");

    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {

        let headline = title.firstElementChild;
        let subHeadline = subtitle.firstElementChild;

        if (onScreen && !isAnimated) {
            //Lunch animation only the first time we scroll on the section
            setIsAnimated(true);

            TweenMax.to(skills, 0, { css: { visibility: 'visible' } });

            tl.from(headline.firstElementChild, 1, { x: 800, opacity: 0, delay: .8, ease: Power3.easeOut }, 'Start')
                .from(subHeadline.firstElementChild, 1, { x: -800, opacity: 0, ease: Power3.easeOut }, .5)
            // .staggerFrom(items.children, .8, { y: 800, ease: Power3.easeOut }, .2)
        }

    }, [onScreen]);
    return (
        <section className="skills" ref={section} id="skills">
            <div className="skills-inner" ref={el => skills = el}>
                <h2 className="title-2" ref={el => title = el}>
                    <div className="title-2-line">
                        <div className="title-2-line-inner">
                            Découvrez mes différentes compétences
                        </div>
                    </div>
                </h2>
                <h3 className="title-3" ref={el => subtitle = el}>
                    <div className="title-3-line">
                        <div className="title-3-line-inner">
                            Voici une rapide présentation des différents langages et technologies que je maitrise:
                        </div>
                    </div>
                </h3>
                <div className="skills__items">
                    <SkillCard {...javascript} render={() => <RoundedIcon icon={"code-alt"} color="primary" />} />
                    <SkillCard {...frontEnd} render={() => <RoundedIcon icon={"computer"} color="red" />} />
                    <SkillCard {...backEnd} render={() => <RoundedIcon icon={"database"} color="green" />} />
                </div>
                {/* <div className="skills__items" ref={el => items = el}>
                    <div className="skills__item"><img src="https://img.icons8.com/ios-glyphs/120/000000/html-5.png" /></div>
                    <div className="skills__item"><img src="https://img.icons8.com/ios-filled/100/000000/css3.png" /></div>
                    <div className="skills__item"><img src="https://img.icons8.com/ios/100/000000/javascript.png" /></div>
                    <div className="skills__item"><img src="https://img.icons8.com/ios-glyphs/160/000000/react.png" /></div>
                    <div className="skills__item"><img src="https://img.icons8.com/ios-filled/50/000000/sass.png" /></div>
                    <div className="skills__item"><img src="https://img.icons8.com/wired/128/000000/webpack.png" /></div>
                    <div className="skills__item"><img src="https://img.icons8.com/wired/64/000000/babel.png" /></div>
                    <div className="skills__item"><img src="https://img.icons8.com/windows/128/000000/npm.png" /></div>
                </div> */}
            </div>
        </section>
    );
}

export default Skills;