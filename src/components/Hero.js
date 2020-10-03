import React, { useRef, useEffect } from 'react';
import { TweenMax, TimelineLite, Power3 } from "gsap";

let tl = new TimelineLite();

const Hero = () => {

    let hero = useRef(null);
    let image = useRef(null);
    let content = useRef(null);
    let rectangle = useRef(null);
    let circle = useRef(null);

    useEffect(() => {

        // Content vars
        let headlineFirst = content.children[0].children[0];
        let headlineSecond = headlineFirst.nextSibling;
        // let paragraph = content.children[1];
        let button = content.children[1];

        TweenMax.to(hero, 0, { css: { visibility: 'visible' } });

        //Content animation
        tl.staggerFrom([headlineFirst.children, headlineSecond.children], 1, {
            y: 80,
            ease: Power3.easeOut,
            delay: .8
        }, .15, 'Start')
            .from(button, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.6)

        //Image animation 
        tl.from(image, 1.2, { y: 1280, ease: Power3.easeOut }, 'Start')
            .from(image.children[1].firstElementChild, 2, { scale: 1.6, ease: Power3.easeOut }, .2)
            .from(rectangle, 1, {opacity: 0, x: 800, ease: Power3.easeOut}, .2)
            .from(circle, 1, {opacity: 0, y: -800, ease: Power3.easeOut}, .1)
    }, [tl]);
    return ( 
        <main className="hero" ref={el => hero = el}>
                <div className="hero__content">
                    <div className="hero__content-inner" ref={el => content = el}>
                        <h1 className="hero__title">
                            <div className="hero__title-line">
                                <div className="hero__title-line-inner">I'm Youness Bennaj,</div>
                            </div>
                            <div className="hero__title-line">
                                <div className="hero__title-line-inner">a JavaScript Developer.</div>
                            </div>
                        </h1>
                        {/* <p className="paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita possimus laborum earum adipisci dolores architecto perspiciatis ducimus itaque commodi est, ipsum, sit, aliquid quod! Soluta consequuntur saepe aperiam fuga beatae.</p> */}
                        <button className="hero__btn">Get in touch</button>
                    </div>
                </div>
                <hr />
                <div className="hero__image-container">
                    {/* <div className="circle-container" ref={el => circle = el}> */}
                    <div className="hero__image" ref={el => image = el}>
                        <div className="circle" ref={el => circle = el}>
                        </div>
                        <div className="hero__image-inner">
                        <img 
                            srcSet="
                                    https://via.placeholder.com/170x256 170w,
                                    https://via.placeholder.com/230x340 230w,
                                    https://via.placeholder.com/320x480 320w,
                                    https://via.placeholder.com/375x530 375w"
                                    

                            sizes=" (min-width: 1600px) 375px,
                                    (min-width: 1440px) 320px,
                                    (min-width: 1024px) 230px,
                                    (min-width: 768px) 170px"

                            alt="Youness Bennaj" />
                        </div>
                    </div>
                    {/* </div> */}
                    <div className="rectangle" ref={el => rectangle = el}>
                    </div>
                </div>
            </main>
     );
}
 
export default Hero;