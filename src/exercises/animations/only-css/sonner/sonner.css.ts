import { style } from "@vanilla-extract/css";

export const wrapper = style({
  display: "grid",
  gap: "12px",
});

export const toaster = style({
  display: "grid",
  gap: "12px",
});

export const card = style({
  background: "white",
  border: "1px solid #eeeeee",
  borderRadius: "8px",
  boxShadow: "0 4px 12px #0000001a",
  gridArea: "1 / 1",
  height: "74px",
  transform:
    "scale(calc(1 - var(--index) * var(--scale-increment))) translateY(calc(var(--index) * var(--translate-increment)))",
  vars: {
    "--scale-increment": "0.05",
    "--translate-increment": "-13%",
  },
  width: "356px",
});

export const buttonAddToast = style({
  background: "white",
  border: "none",
  borderRadius: "9999px",
  boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.08), 0px 2px 2px rgba(0, 0, 0, 0.04)",
  color: "black",
  cursor: "pointer",
  display: "inline-block",
  fontSize: "14px",
  height: "32px",
  marginTop: "auto",
  paddingInline: "12px",
  width: "auto",
});
