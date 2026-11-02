import { globalStyle, style } from "@vanilla-extract/css";
export const container = style({
  position: "relative",
  width: "100%",
});
export const list = style({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  margin: "48px 0",
  padding: "0",
  width: "100%",
});

globalStyle(`${list} li`, {
  alignItems: "center",
  cursor: "pointer",
  display: "flex",
  gap: "16px",
  padding: "0",
  width: "386px",
});

export const gameWrapper = style({
  alignItems: "center",
  borderBottom: "1px solid #d4d6d861",
  display: "flex",
  flex: 1,
  justifyContent: "space-between",
  position: "relative",
  selectors: {
    [`${list} li:last-of-type &`]: {
      border: "none",
    },
  },
});

export const activeGame = style({
  display: "grid",
  inset: 0,
  placeItems: "center",
  position: "absolute",
  zIndex: 10,
});

export const contentWrapper = style({
  display: "flex",
  flexDirection: "column",
  padding: "16px 0",

  selectors: {
    [`${activeGame} &`]: {
      padding: 0,
    },
  },
});

export const gameTitle = style({
  color: "black",
  fontSize: "14px",
  fontWeight: "500",
  margin: 0,
});

export const gameDescription = style({
  color: "#63635d",
  fontSize: "14px",
  margin: 0,
});

export const button = style({
  background: "#f1f0ef",
  border: "none",
  borderRadius: "9999px",
  color: "#007aff",
  cursor: "pointer",
  fontSize: "12px",
  fontWeight: "600",
  padding: "4px 12px",
});

export const inner = style([
  {
    alignItems: "flex-start",
    background: "white",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    height: "fit-content",
    overflow: "hidden",
    padding: "16px",

    width: "500px",
  },
]);

export const header = style({
  alignItems: "center",
  display: "flex",
  gap: "16px",
  width: "100%",
});

export const headerInner = style({
  alignItems: "center",
  display: "flex",
  flexGrow: 1,
  justifyContent: "space-between",
});

export const longDescription = style({
  color: "#63635d",
  fontSize: "14px",
});

export const overlay = style({
  background: "rgba(0, 0, 0, 0.2)",
  inset: 0,
  pointerEvents: "none",
  position: "absolute",
  zIndex: 10,
});

globalStyle("body", {
  MozOsxFontSmoothing: "grayscale",
  WebkitFontSmoothing: "antialiased",
});
