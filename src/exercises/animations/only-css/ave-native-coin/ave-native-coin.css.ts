import { style } from "@vanilla-extract/css";

export const coinContainer = style({
  cursor: "pointer",
  display: "flex",
  height: "72px",
  position: "relative",
  width: "72px",
});

export const coinWrapper = style({
  height: "100%",
  position: "absolute",
  selectors: {
    [`${coinContainer}:hover &`]: {
      transform: "rotateY(360deg)",
    },
  },
  transformStyle: "preserve-3d",
  transition: "transform 1s ease-in-out",
  width: "100%",
});

export const coin = style({
  borderRadius: "9999px",
  height: "72px",
  inset: 0,
  position: "absolute",
  width: "72px",
});

export const coinSide = style({
  background: "#1ba869",
  borderRadius: 0,
  height: "72px",
  position: "absolute",
  transform: "translateX(26px) rotateY(90deg)",
  width: "9px",
});

export const coinSideBack = style([
  coin,
  {
    backgroundColor: "#1ba869",
    transform: "translateZ(-5px)",
  },
]);

export const coinSideFront = style([
  coin,
  {
    backgroundColor: "#1ba869",
    transform: "translateZ(5px)",
  },
]);

export const coinStart = style([
  coin,
  {
    transform: "translateZ(-6px)",
  },
]);

export const coinVerse = style([
  coin,
  {
    transform: "rotateY(180deg) translateZ(-6px)",
  },
]);
