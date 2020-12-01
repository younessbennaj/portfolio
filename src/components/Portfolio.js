import React, { useState, useRef, useEffect } from "react";
import { useOnScreen } from "../useOnScreen";
import { TweenMax, TimelineLite, Power3 } from "gsap";

import { projects } from "../data/projects";

//Components 
import ProjectCard from "../components/ProjectCard";

let tl = new TimelineLite();

const Portfolio = () => {

    let section = useRef(null);
    let portfolio = useRef(null);
    let title = useRef(null);
    let subtitle = useRef(null);
    let cards = useRef(null);
    let button = useRef(null);

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
                .staggerFrom(cards.children, 1, { x: 1800, opacity: 0, ease: Power3.easeOut }, .8)
                .from(button, 1, { y: 300, opacity: 0, ease: Power3.easeOut }, 1)
        }

    }, [onScreen]);
    return (
        <section className="portfolio" ref={section} id="portfolio">
            <div className="portfolio-inner" ref={el => portfolio = el}>
                <h2 className="title-2" ref={el => title = el}>
                    <div className="title-2-line">
                        <div className="title-2-line-inner">
                            Mes projets personnels en développement front end
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
                <div className="portfolio__items" ref={el => cards = el}>
                    {projects.map(project => {
                        return <ProjectCard {...project} />
                    })}
                    {/* <div className="portfolio-card">
                        <img src={countryQuiz} alt="" />
                        <div className="portfolio-card__content">
                            <h6 className="title-4">Country Quiz App</h6>
                            <p className="paragraph">
                                Creation d'un quizz sur les capitales du monde utilisant l'API https://restcountries.eu/. Utilisation de la librarie React pour concevoir la solution. L'utilisateur peut répondre aux question et lorsqu'il a faux, il est dirigé vers la page des scores pour obtenir son résulat.
                            </p>
                        </div>
                        <button className="btn btn-outline"><a target="_blank" href="https://affectionate-bell-b6f3ec.netlify.app/">Voir l'app</a></button>
                    </div>
                    <div className="portfolio-card">
                        <img src={socialAppImage} alt="" />
                        <div className="portfolio-card__content">
                            <h6 className="title-4">React Social App</h6>
                            <p className="paragraph">
                                Une application type réseau social réalisé avec React et son ecosytème. Utilsation de firebase pour le back-end et le service d'authentification. Pour le style des composants, utilisation de styled-components et mise en place d'un storybook. Utilisation d'un état global avec React-Redux.
                            </p>
                        </div>
                        <button className="btn btn-outline"><a target="_blank" href="https://social-app-younessbennaj.herokuapp.com/">Voir l'app</a></button>
                    </div>
                    <div className="portfolio-card">
                        <img src={socialAppImage} alt="" />
                        <div className="portfolio-card__content">
                            <h6 className="title-4">React Social App - v2 (en cours)</h6>
                            <p className="paragraph">
                                Nouvelle version de l'application type réseau social. Meilleure gestion des states en utilisant la bonne gestion des états locaux: props drilling, co-location des states et composition, distinctions entre Server State et UI state. Objectif: Se passer de redux et d'un state global très peu maintenable et qui influe sur les performances (re-render de l'app à chaque update du state).
                            </p>
                        </div>
                        <button className="btn btn-outline"><a target="_blank" href="https://github.com/younessbennaj/react-social-app-v2">Dépôt Github</a></button>
                    </div>
                    <div className="portfolio-card">
                        <img src={baseConverterImage} alt="" />
                        <div className="portfolio-card__content">
                            <h6 className="title-4">Base converter</h6>
                            <p className="paragraph">Réalisation d'une petite application permettant de convertir un nombre en base 10 en base 2 ou 16. L'objectif était la mise en place d'une stratégie de test d'intégration en utilisant la combinaison de Jest et React-Testing-Library.</p>

                        </div>
                        <button className="btn btn-outline"><a target="_blank" href="">Dépôt Github</a></button>
                    </div>
                    <div className="portfolio-card">
                        <img src={workoutJournal} alt="" />
                        <div className="portfolio-card__content">
                            <h6 className="title-4">Workout Journal (en cours)</h6>
                            <p className="paragraph">Développement d'une petite application permettant d'enregistrer les performances réalisées lors d'une séance de sport (musculation dans notre cas). Elle devra prendre la forme d'un journal de bord présentant chaqu'une des séances réalisées et des différentes séries et répétitions réalisés sur chacun des exercices. A notez l'utilisation de Mock Service Worker JS, pour mocker l'utilisation d'une API permettant un developpement plus rapide du front de l'application sans avoir à attendre la mise en place d'une API fonctionnelle pour le moment. Tentative également de mettre en place des tests e2e avec Cypress.</p>
                        </div>
                        <button className="btn btn-outline"><a target="_blank" href="https://github.com/younessbennaj/workout-journal">Dépôt Github</a></button>
                    </div>
                    <div className="portfolio-card">
                        <img src={ticTacToeGameImage} alt="" />
                        <div className="portfolio-card__content">
                            <h6 className="title-4">Tic Tac Toe Game</h6>
                            <p className="paragraph">Réalisation d'un jeu du morpion entre deux jours sur le même navigateur. L'objectif étant d'utiliser la programmation orienté objet post ES6, en utilisant les class ES6 et leur isolation grâce au ES Module. A noter également l'utilisation de l'élement Canvas pour dessiner notre jeu dans le navigateur.</p>
                        </div>
                        <button className="btn btn-outline"><a target="_blank" href="">Dépôt Github</a></button>

                    </div>
                    <div className="portfolio-card">
                        <img src={userAppImage} alt="" />
                        <div className="portfolio-card__content">
                            <h6 className="title-4">User App</h6>
                            <p className="paragraph">Réalisation d'une très petite application qui présente une petite liste d'utilisateur sous forme de tableau avec possibilité de filtré. Ici l'objectif était de pouvoir ajouter la possibilité pour l'utilisateur d'utiliser un "dark theme" grâce à l'utilisation de styled-components permettant la mise en place d'un thème pour l'application.</p>
                        </div>
                        <button className="btn btn-outline"><a target="_blank" href="https://github.com/younessbennaj/user-app">Dépôt Github</a></button>

                    </div>
                    <div className="portfolio-card">
                        <img src={jsCalculatorImage} alt="" />
                        <div className="portfolio-card__content">
                            <h6 className="title-4">JS Calculator</h6>
                            <p className="paragraph">Réalisation d'une calculatrice utilisant seulement HTML/CSS/JavaScript et l'utilisation de jQuery. Utilisation de CSS Gird pour le layout de la calculatrice. Utilisation de OOP avec les classes ES6 et de JSDoc pour documenter cette classe.</p>
                        </div>
                        <button className="btn btn-outline"><a target="_blank" href="https://github.com/younessbennaj/js-calculator">Dépôt Github</a></button>

                    </div>
                    <div className="portfolio-card">
                        <img src={pomodoroImage} alt="" />
                        <div className="portfolio-card__content">
                            <h6 className="title-4">Pomodoro Clock</h6>
                            <p className="paragraph">Conception d'un timer inspiré de la technique de gestion du temps developpé par  Francesco Cirillo. Ce timer permet de découper le temps en sessions de 25 minutes (par défaut), entrecoupées de courtes pauses de 5 mintutes (toujours par défaut). L'utilsateur à ensuite le choix de modifier ces valeurs par défaut. Utilisation très basique de React et des Class Components.</p>
                        </div>
                        <button className="btn btn-outline"><a target="_blank" href="https://github.com/younessbennaj/pomodoro-clock">Dépôt Github</a></button>
                    </div>
                    <div className="portfolio-card">
                        <img src={drumMachineImage} alt="" />
                        <div className="portfolio-card__content">
                            <h6 className="title-4">Drum Machine</h6>
                            <p className="paragraph">Petit projet front représentant une petite boite à rythme qui réagit aux clics de l'utilisateur. L'object principal étant la compréhension de la balise audio.</p>
                        </div>
                        <button className="btn btn-outline"><a target="_blank" href="">Dépôt Github</a></button>
                    </div>
                 */}
                </div>
                <div className="button-container">
                    <button ref={el => button = el} className="btn btn-outline"><a target="_blank" href="https://github.com/younessbennaj?tab=repositories" target="_blank">Plus sur Github</a></button>
                </div>
            </div>

        </section>
    );
}

export default Portfolio;