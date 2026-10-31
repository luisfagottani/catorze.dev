import { keyframes, style } from "@vanilla-extract/css";

const orbit = keyframes({
  from: {
    transform:
      "translate(-50%, -50%) rotateY(0deg) translateZ(74px) rotateY(360deg)",
    zIndex: 2,
  },
  to: {
    transform:
      "translate(-50%, -50%) rotateY(360deg) translateZ(74px) rotateY(0deg)",
    zIndex: 2,
  },
});

export const container = style({
  perspective: "500px",
  position: "relative",
  transformStyle: "preserve-3d",
});

export const circle = style({
  background: "#21201c",
  borderRadius: "50%",
  height: "96px",
  position: "relative",
  width: "96px",
  zIndex: 2,
});

export const orbitingCircle = style({
  animation: `${orbit} 6s linear infinite`,
  background: "#fad757",
  borderRadius: "50%",
  height: "32px",
  left: "50%",
  position: "absolute",
  top: "50%",
  transform: "translate(-50%, -50%)",
  width: "32px",
  zIndex: 0,
});
