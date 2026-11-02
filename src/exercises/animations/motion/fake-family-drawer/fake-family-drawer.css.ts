import { globalStyle, style } from "@vanilla-extract/css";

export const wrapper = style({
  background: "#0d0d0d",
  color: "#000",
  display: "grid",
  height: "500px",
  placeItems: "center",
  width: "100%",
});

export const element = style({
  background: "white",
  borderRadius: "16px",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  overflow: "hidden",
  width: "320px",
});

globalStyle(`${element} h1`, {
  fontSize: "18px",
  fontWeight: "600",
  margin: 0,
});

globalStyle(`${element} p`, {
  color: "#63635d",
  margin: 0,
});

export const inner = style({
  padding: "13px 16px",
});

export const button = style({
  background: "white",
  border: "none",
  borderRadius: "8px",
  color: "black",
  fontSize: "14px",
  padding: "8px 16px",
});
