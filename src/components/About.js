import React, { useState, useRef, useEffect } from "react";
import { useOnScreen } from "../useOnScreen";
import { TimelineLite, Power3 } from "gsap";

let tl = new TimelineLite();

const About = () => {

    let image = useRef(null);
    let content = useRef(null);

    let section = useRef(null);
    const onScreen = useOnScreen(section, 0, "-200px");

    useEffect(() => {
        console.log(onScreen);

        // if (onScreen) {
        //     tl.to(image, 1.2, { top: 0, bottom: 0, ease: Power3.easeOut }, 'Start')
        //         .from(image.firstElementChild, 2, { scale: 1.6, ease: Power3.easeOut }, .2)
        //         .to(content, .8, { transform: "translate(0%, -100%)", opacity: 1, ease: Power3.easeOut }, 1);
        // }

    }, [onScreen]);

    return (
        <section className="about" ref={section}>
            <div className="about__image">
                <div className="about__image-inner" ref={el => image = el}>
                    <img src="https://via.placeholder.com/750x440" alt="" />
                </div>
            </div>
            <div className="about__content">
                <div className="about__content-inner" ref={el => content = el}>
                    <h4 className="title-4">
                        Sed ut perspiciatis unde omnis
                    </h4>
                    <p className="paragraph">
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;