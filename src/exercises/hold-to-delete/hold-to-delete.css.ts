import { globalStyle, style } from "@vanilla-extract/css";

export const button = style({
  alignItems: "center",
  backgroundColor: "#f6f5f5",
  border: "none",
  borderRadius: "9999px",
  color: "#21201c",
  cursor: "pointer",
  display: "flex",
  fontWeight: "500",
  height: "40px",
  overflow: "hidden",
  position: "relative",
  selectors: {
    "&:active": {
      transform: "scale(0.98)",
    },
  },
  transition: "transform 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
});

globalStyle(`${button} > div`, {
  alignItems: "center",
  display: "flex",
  gap: "8px",
  height: "100%",
  justifyContent: "center",
  paddingInline: "20px",
  width: "100%",
});

export const overlay = style({
  alignItems: "center",
  backgroundColor: "#FFDBDC",
  clipPath: "inset(0 100% 0 0)",
  color: "#E5484D",
  display: "flex",
  fontWeight: "500",
  height: "100%",
  justifyContent: "center",
  left: 0,
  position: "absolute",
  selectors: {
    [`${button}:active &`]: {
      clipPath: "inset(0 0% 0 0)",
      transition: "clip-path 1.5s linear",
    },
  },
  top: 0,
  transition: "clip-path 0.2s ease-out",

  width: "100%",
  zIndex: 1,
});
