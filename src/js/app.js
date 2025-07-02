import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.to(".box", {
  duration: 5,
  rotation: 360,
  scale: 2,
  scrollTrigger: {
    trigger: ".box",
    scrub: true,
  },
});
