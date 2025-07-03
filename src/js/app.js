import { gsap } from "gsap";

gsap.to("#hand", {
  duration: 0.5,
  rotation: 15,
  repeat: -1,
  yoyo: true,
  transformOrigin: "bottom",
});
