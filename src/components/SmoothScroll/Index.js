import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    const scroller = document.querySelector('.scroll-container');

    gsap.to(scroller, {
      y: () => -(scroller.scrollHeight - document.documentElement.clientHeight),
      ease: 'none',
      scrollTrigger: {
        trigger: scroller,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        invalidateOnRefresh: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    ScrollTrigger.scrollerProxy(scroller, {
      scrollTop(value) {
        return arguments.length
          ? (scroller.scrollTop = value)
          : scroller.scrollTop;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: scroller.style.transform ? 'transform' : 'fixed',
    });

    ScrollTrigger.addEventListener('refresh', () => ScrollTrigger.refresh());

    return () => {
      ScrollTrigger.removeEventListener('refresh', () => ScrollTrigger.refresh());
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <div className="scroll-container">
      {children}
    </div>
  );
};

export default SmoothScroll;
