import { useEffect, useRef, forwardRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import ChatButton from './chatButton';
import styles from './chatComponent.styles';

gsap.registerPlugin(ScrollTrigger);
const SCROLL_TRIGGER_ID = `chatAnimation`;

const ChatComponent = forwardRef((props, ref) => {
  const chatboxRef = useRef(null);
  const arrowRef = useRef(null);
  const timeline = useRef(null);

  useEffect(() => {
    //set up the timeline animations using scroll trigger
    timeline.current = gsap.timeline(
      {
        scrollTrigger: {
          id: SCROLL_TRIGGER_ID,
          start: 'top 50%',
          end: 'bottom bottom',
          trigger: ref.current,
        },
      },
      [ref]
    );

    //animate the chatbox
    timeline.current.to(chatboxRef.current, {
      duration: 0.5,
      y: 0,
      ease: 'back',
    });

    //animate clip path of the squiggly arrow
    let arrowClipPath = { current: 100 };
    timeline.current.to(
      arrowClipPath,
      0.5,
      {
        current: 0,
        ease: 'expo.out',
        onUpdate: () => {
          gsap.set(arrowRef.current, {
            'clip-path': `inset(0 0 ${arrowClipPath.current}% 0)`,
          });
        },
      },
      '-=.2'
    );

    timeline.current.to(
      arrowClipPath,
      0.5,
      {
        current: 100,
        ease: 'expo.out',
        onUpdate: () => {
          gsap.set(arrowRef.current, {
            'clip-path': `inset(${arrowClipPath.current}% 0 0% 0)`,
          });
        },
      },
      '+=.25'
    );

    return () => {
      if (!timeline.current) return;
      timeline.current.kill();
      const scrollTriggerRef = ScrollTrigger.getById(SCROLL_TRIGGER_ID);
      if (scrollTriggerRef) {
        scrollTriggerRef.kill(true);
      }
    };
  }, []);

  return (
    <div css={styles}>
      <div className="chatbox-container" ref={chatboxRef}>
        <div className="squiggly-arrow" ref={arrowRef}>
          <span></span>
        </div>
        <div className="chatbox">
          <ChatButton />
        </div>
      </div>
    </div>
  );
});

export default ChatComponent;
