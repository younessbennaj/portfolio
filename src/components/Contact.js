import React, { useState, useRef, useEffect } from "react";
import { useOnScreen } from "../useOnScreen";
import { TweenMax, TimelineLite, Power3 } from "gsap";

let tl = new TimelineLite();

const Contact = () => {

    let section = useRef(null);
    let contact = useRef(null);
    let title = useRef(null);
    let resumeButton = useRef(null);
    let contactButton = useRef(null);

    const onScreen = useOnScreen(section, 0, "-200px 0px 0px -100px");
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {



        if (onScreen && !isAnimated) {
            setIsAnimated(true);
            TweenMax.to(contact, 0, { css: { visibility: 'visible' } });
            tl.from(title, 1, { opacity: 0, scale: 1.6, ease: Power3.easeOut }, 'Start')
                .from(resumeButton, .8, { y: -500, ease: Power3.easeOut }, .8)
                .from(contactButton, .8, { y: -500, ease: Power3.easeOut }, 1)
                .to(contactButton, 0.1, { x: "+=10", ease: Power3.easeOut, yoyo: true, repeat: 5 }, 1.8)

        }

    }, [onScreen]);
    return (
        <section className="contact" ref={section}>
            <div className="contact-inner" ref={el => contact = el}>
                <p className="title-3" ref={el => title = el}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                </p>
                <button className="btn btn-primary" ref={el => resumeButton = el}>My resume</button>
                <button className="btn btn-outline" ref={el => contactButton = el}>Contact me</button>
            </div>
        </section>
    );
}

export default Contact;