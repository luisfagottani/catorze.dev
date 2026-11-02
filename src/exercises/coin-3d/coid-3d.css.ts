import { keyframes, style } from "@vanilla-extract/css";

const spin = keyframes({
  to: {
    transform: "rotateY(360deg)",
  },
});
export const root = style({
  height: "56px",
  position: "relative",
  width: "56px",
});

export const wrapper = style({
  animation: `${spin} 4s linear infinite`,
  height: "56px",
  position: "absolute",
  transformStyle: "preserve-3d",
  width: "56px",
});
export const coin = style({
  backfaceVisibility: "hidden",
  background: "#ffcd6c",
  borderRadius: "50%",
  height: "100%",
  position: "absolute",
  width: "100%",
});

export const outer = style([
  {
    transform: "translateZ(3px)",
  },
]);
export const back = style([
  {
    transform: "rotateY(180deg) translateZ(3px)",
  },
]);

export const front = style([
  {
    transform: "translateZ(3px)",
  },
]);

export const frontInner = style([
  coin,
  front,
  {
    background: "#ffaa04",
    transform: "rotateY(180deg) translateZ(-3px)",
  },
]);
export const backInner = style([
  coin,
  back,
  {
    background: "#ffaa04",
    transform: "translateZ(-3px)",
  },
]);

export const coinSide = style([
  {
    background: "#ffaa04",
    borderRadius: 0,
    height: "56px",
    position: "absolute",
    transform: "translateX(26px) rotateY(90deg)",
    width: "6px",
  },
]);
