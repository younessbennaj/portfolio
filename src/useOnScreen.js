import React, { useState, useRef, useEffect } from "react";

export function useOnScreen(ref, threshold = 0, rootMargin = '0px') {
    // State and setter for storing whether element is visible
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Update our state when observer callback fires
                setIntersecting(entry.isIntersecting);
            },
            {
                rootMargin,
                //Détecter quand la visibilité franchit la barre des 50%
                threshold
            }
        );
        if (ref.current) {
            //Une fois l'observateur créé, il faut lui donner un élément cible à observer :
            //Ici c'est une référence à notre section
            observer.observe(ref.current);
        }
        return () => {
            observer.unobserve(ref.current);
        };
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return isIntersecting;
}