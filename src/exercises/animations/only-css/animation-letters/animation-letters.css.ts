import { keyframes, style } from "@vanilla-extract/css";
import { vars } from "../../../../styles/theme.css";

const reveal = keyframes({
  from: {
    opacity: 0,
    transform: "translateY(100%)",
  },
  to: {
    opacity: 1,
    transform: "translateY(0)",
  },
});

export const h1 = style({
  color: vars.color.black,
  fontSize: 32,
  fontWeight: 600,
  letterSpacing: -0.05,
  lineHeight: 1.2,
  overflow: "hidden",
});

export const span = style({
  animation: `${reveal} 1.3s cubic-bezier(0.19, 1, 0.22, 1) forwards var(--data-index)`,
  display: "inline-block",
  transform: "translateY(100%)",
});

export const button = style({
  appearance: "none",
  background: "#fff",
  borderRadius: 9999,
  boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.08), 0px 2px 2px rgba(0, 0, 0, 0.04)",
  color: vars.color.black,
  fontSize: 14,
  fontWeight: 500,
  height: 32,
  marginTop: 24,
  paddingInline: 12,
  position: "relative",
  width: "100%",
});
