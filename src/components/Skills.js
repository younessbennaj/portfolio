import React, { useState, useRef, useEffect } from "react";
import { useOnScreen } from "../useOnScreen";
import { TweenMax, TimelineLite, Power3 } from "gsap";

let tl = new TimelineLite();

const Skills = () => {

    let section = useRef(null);
    let skills = useRef(null);
    let title = useRef(null);
    let subtitle = useRef(null);
    let items = useRef(null);

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
                .staggerFrom(items.children, .8, { y: 800, ease: Power3.easeOut }, .2)
        }

    }, [onScreen]);
    return (
        <section className="skills" ref={section}>
            <div className="skills-inner" ref={el => skills = el}>
                <h2 className="title-2" ref={el => title = el}>
                    <div className="title-2-line">
                        <div className="title-2-line-inner">
                            Discover my differents skills
                        </div>
                    </div>
                </h2>
                <h3 className="title-3" ref={el => subtitle = el}>
                    <div className="title-3-line">
                        <div className="title-3-line-inner">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        </div>
                    </div>
                </h3>
                <div className="skills__items" ref={el => items = el}>

                    {[1, 2, 3, 4, 5, 6, 7, 8].map(val => {
                        return <div key={val} className="skills__item"><img src="" alt="" /></div>;
                    })}
                </div>
            </div>
        </section>
    );
}

export default Skills;