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
                            What kind of subject have I studied ?
                        </div>
                    </div>
                </h2>

                <div className="studies__item" >
                    <div className="studies__item-inner" ref={el => item1 = el}>
                        <h4 className="title-4">Sed ut perspiciatis</h4>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p>
                        <button className="btn btn-outline">Learn more</button>
                    </div>
                </div>

                <div className="studies__item">
                    <div className="studies__item-inner" ref={el => item2 = el}>
                        <h4 className="title-4">Lorem ipsum dolor</h4>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p>
                        <button className="btn btn-outline">Learn more</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Studies;