import { style } from "@vanilla-extract/css";

export const button = style({
  appearance: "none",
  background: "white",
  border: "none",
  borderRadius: "50%",
  boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.08), 0px 2px 2px rgba(0, 0, 0, 0.04)",
  cursor: "pointer",
  display: "grid",
  height: "40px",
  overflow: "hidden",
  placeItems: "center",
  width: "40px",
});

export const arrowDown = style({
  gridArea: "1 / 1",
  selectors: {
    "&:first-of-type": {
      transform: "translateY(-150%)",
    },
    [`${button}:hover &:first-of-type`]: {
      transform: "translateY(0)",
    },

    [`${button}:hover &:last-of-type`]: {
      transform: "translateY(150%)",
    },
  },
  transition: "transform 200ms cubic-bezier(0.785, 0.135, 0.15, 0.86)",
});
