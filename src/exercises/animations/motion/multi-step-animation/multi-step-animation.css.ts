import { globalStyle, keyframes, style } from "@vanilla-extract/css";

const pulse = keyframes({
  "50%": {
    opacity: 0.5,
  },
});

export const multiStepWrapper = style({
  backgroundColor: "white",
  borderRadius: "12px",
  boxShadow:
    "0 0 0 1px rgba(0, 0, 0, 0.08), 0px 2px 2px rgba(0, 0, 0, 0.04), 0px 8px 8px -8px rgba(0, 0, 0, 0.04)",
  margin: "100px auto",
  overflow: "hidden",
  position: "relative",
  width: "550px",
});

export const multiStepInner = style({
  padding: "24px",
});

export const actions = style({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "32px",
});

export const secondaryButton = style({
  backgroundColor: "transparent",
  border: "none",
  borderRadius: "9999px",
  boxShadow:
    "0 0 0 1px rgba(0, 0, 0, 0.08), 0px 2px 2px rgba(0, 0, 0, 0.04), 0px 8px 8px -8px rgba(0, 0, 0, 0.04)",
  color: "#63635d",
  cursor: "pointer",
  fontSize: "14px",
  fontWeight: 500,
  height: "32px",
  selectors: {
    "&:hover:not(:disabled)": {
      color: "black",
    },
  },
  width: "80px",
});

export const primaryButton = style({
  background: "linear-gradient(180deg, #1994ff 0%, #157cff 100%)",
  border: "none",
  borderRadius: "9999px",
  boxShadow:
    "0px 0px 1px 1px rgba(255, 255, 255, 0.08) inset, 0px 1px 1.5px 0px rgba(0, 0, 0, 0.32), 0px 0px 0px 0.5px #1a94ff",
  color: "white",
  cursor: "pointer",
  fontSize: "14px",
  fontWeight: 600,
  height: "32px",
  overflow: "hidden",
  position: "relative",
  width: "120px",
});

globalStyle(`${primaryButton} span`, {
  alignItems: "center",
  color: "white",
  display: "flex",
  justifyContent: "center",
  textShadow: "0px 1px 1.5px rgba(0, 0, 0, 0.16)",
  width: "100%",
});

export const heading = style({
  fontWeight: 600,
  marginBottom: "8px",
});

export const skeletons = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  marginTop: "20px",
});

export const skeleton = style({
  animation: `${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
  background: "#f2f1f0",
  borderRadius: "6px",
  height: "16px",
});

globalStyle(`${multiStepWrapper} button:disabled`, {
  cursor: "not-allowed",
  opacity: 0.5,
});
