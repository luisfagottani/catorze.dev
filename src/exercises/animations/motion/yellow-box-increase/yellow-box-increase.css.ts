import { style } from "@vanilla-extract/css";

export const wrapper = style({
  background: "#0d0d0d",
  display: "grid",
  height: "400px",
  placeItems: "center",
  width: "100%",
});

export const button = style({
  background: "white",
  border: "none",
  borderRadius: "8px",
  color: "black",
  fontSize: "14px",
  padding: "8px 16px",
});

export const element = style({
  background: "#fad658",
  borderRadius: "12px",
  height: "48px",
  width: "48px",
});

export const secondaryElement = style({
  background: "#fad658",
  borderRadius: "12px",
  height: "180px",
  width: "180px",
});
