import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DURATION = 1;
const ID = `scrollTrigger`;

//the scroll trigger hook receives a wrapper element and an array of section elements
//when the wrapper element enters the viewport, the section elements will animate in with a staggered delay
//you can pass the same element as the element and the wrapper, if you want an element to be it's own trigger
function useScrollAnimation(
  wrapperRef,
  sectionRefs = [],
  callbacks,
  options = {}
) {
  const documentHidden = useRef(false);
  const timeline = useRef(null);
  const [hasMounted, setHasMounted] = useState(false);

  const { delay } = options;
  const duration = options.duration !== undefined ? options.duration : DURATION;
  const staggerDelay =
    options.staggerDelay !== undefined ? options.staggerDelay : 0.15;
  const startPercent = options.startPercent || 50;
  const { onUpdate, onEnter, onEnterBack, onLeave, onLeaveBack } =
    callbacks || {};

  useEffect(() => {
    if (!wrapperRef.current) return;
    if (hasMounted) return;
    setHasMounted(true);

    timeline.current = gsap.timeline({
      scrollTrigger: {
        id: ID,
        start: `top ${
          typeof startPercent === 'number' ? startPercent + `%` : startPercent
        }`,
        end: 'bottom bottom',
        trigger: wrapperRef.current,
        toggleActions: 'play none none none',
        scrub: false,
        once: true,
        onEnter: onEnter ? ({ progress }) => onEnter(progress) : () => {},
        onEnterBack: onEnterBack ? onEnterBack : () => {},
        onLeave: onLeave ? onLeave : () => {},
        onLeaveBack: onLeaveBack ? onLeaveBack : () => {},
      },
    });

    if (!sectionRefs || sectionRefs.length === 0) return;

    const animation = timeline.current.staggerTo(
      [...sectionRefs.map((ref) => ref.current)],
      duration,
      {
        stagger: staggerDelay,
        y: 0,
        opacity: 1,
        delay: delay,
        ease: 'expo.out',
        onUpdate: onUpdate
          ? () => {
              onUpdate(animation.progress());
            }
          : () => {},
      }
    );
  }, [
    sectionRefs,
    wrapperRef,
    onUpdate,
    onEnter,
    onEnterBack,
    onLeave,
    onLeaveBack,
    delay,
    duration,
    staggerDelay,
    startPercent,
    hasMounted,
    setHasMounted,
  ]);
}

export default useScrollAnimation;
