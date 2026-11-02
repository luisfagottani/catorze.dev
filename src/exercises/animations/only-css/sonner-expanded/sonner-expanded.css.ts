import { style } from "@vanilla-extract/css";

export const wrapper = style({
  display: "grid",
  gap: "12px",
  maxWidth: "356px",
  width: "100%",
});

export const toaster = style({
  minHeight: "74px",
  position: "relative",
  width: "100%",
});

export const card = style({
  background: "white",
  border: "1px solid #eeeeee",
  borderRadius: "8px",
  bottom: 0,
  boxShadow: "0 4px 12px #0000001a",
  height: "74px",
  left: 0,
  margin: "auto",
  opacity: 0,
  position: "absolute",
  right: 0,

  selectors: {
    "&[data-mounted=true]": {
      opacity: 1,
      transform: "translateY(calc(var(--index) * (100% + 10px) * -1))",
    },
  },
  transform: "translateY(100%)",

  transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
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
