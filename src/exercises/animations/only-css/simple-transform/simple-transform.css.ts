import { style } from "@vanilla-extract/css";

export const wrapper = style({
  display: "grid",
});

export const ballWrapper = style({
  cursor: "pointer",
  position: "relative",
});

export const ball = style({
  background: "#fad655",
  borderRadius: "50%",
  height: "56px",
  position: "relative",
  selectors: {
    [`${ballWrapper}:hover &`]: {
      transform: "translateY(-20%)",
    },
  },
  transition: "transform 0.2s ease",
  width: "56px",
});
