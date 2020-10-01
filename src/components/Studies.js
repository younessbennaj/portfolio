import React, { useState, useRef, useEffect } from "react";
import { useOnScreen } from "../useOnScreen";
import { TimelineLite, Power3 } from "gsap";

let tl = new TimelineLite();

const Studies = () => {

    let section = useRef(null);
    const onScreen = useOnScreen(section, 0, "-100px");

    let item1 = useRef(null);
    let item2 = useRef(null);

    let title = useRef(null);

    useEffect(() => {

        //Studies section vars 
        let headline = title.children[0];
        let innerHeadline = headline.children[0];

        if (onScreen) {
            tl.to(innerHeadline, { top: 0, bottom: 0, opacity: 1, delay: .8, ease: Power3.easeOut }, 'Start')
                .staggerTo([item1, item2], .8, { top: 0, bottom: 0, opacity: 1, ease: Power3.easeOut }, .15)
        } else {

        }

    }, [onScreen]);

    return (
        <section className="studies" ref={section}>
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
                    <button>Learn more</button>
                </div>
            </div>

            <div className="studies__item">
                <div className="studies__item-inner" ref={el => item2 = el}>
                    <h4 className="title-4">Lorem ipsum dolor</h4>
                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p>
                    <button>Learn more</button>
                </div>
            </div>
        </section>
    );
}

export default Studies;