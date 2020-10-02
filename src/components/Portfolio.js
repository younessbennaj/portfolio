import React, { useState, useRef, useEffect } from "react";
import { useOnScreen } from "../useOnScreen";
import { TweenMax, TimelineLite, Power3 } from "gsap";

let tl = new TimelineLite();

const Portfolio = () => {

    let section = useRef(null);
    let portfolio = useRef(null);
    let title = useRef(null);
    let subtitle = useRef(null);
    let cards = useRef(null);

    const onScreen = useOnScreen(section, 0, "-300px 0px 0px -200px");
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {

        if (onScreen && !isAnimated) {
            setIsAnimated(true);
            TweenMax.to(portfolio, 0, { css: { visibility: 'visible' } });

            let headline = title.firstElementChild;
            let subHeadline = subtitle.firstElementChild;

            tl.from(headline.firstElementChild, .8, { y: 80, delay: 0.8, ease: Power3.easeOut }, 'Start')
                .from(subHeadline.firstElementChild, .8, { x: -1800, ease: Power3.easeOut }, .8)
                .staggerFrom(cards.children, 1, { x: 1800, ease: Power3.easeOut }, .8)
        }

    }, [onScreen]);
    return (
        <section className="portfolio" ref={section}>
            <div className="portfolio-inner" ref={el => portfolio = el}>
                <h2 className="title-2" ref={el => title = el}>
                    <div className="title-2-line">
                        <div className="title-2-line-inner">
                            You can check my differents projects
                        </div>
                    </div>
                </h2>
                <h3 className="title-3 portfolio__subtitle" ref={el => subtitle = el}>
                    <div className="title-3-line">
                        <div className="title-3-line-inner">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        </div>
                    </div>
                </h3>
                <div className="portfolio__items" ref={el => cards = el}>
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
            </div>

        </section>
    );
}

export default Portfolio;