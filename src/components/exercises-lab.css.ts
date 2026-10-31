import { style } from "@vanilla-extract/css";
import { vars } from "../styles/theme.css";

const ink = "#18181b";
const inkMuted = "#71717a";
const line = "#e4e4e7";

export const root = style({
  display: "flex",
  flex: 1,
  flexDirection: "column",
  minHeight: "320px",
  width: "100%",
});

export const list = style({
  borderBottom: `1px solid ${line}`,
  display: "flex",
  overflowX: "auto",
  paddingInline: vars.space.sm,
  scrollbarWidth: "none",
  selectors: {
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
});

export const trigger = style({
  "@media": {
    "(hover: hover) and (pointer: fine)": {
      ":hover": {
        color: ink,
      },
    },
  },
  appearance: "none",
  background: "transparent",
  border: 0,
  borderRadius: vars.radius.md,
  color: inkMuted,
  cursor: "pointer",
  flex: "0 0 auto",
  fontSize: "0.875rem",
  fontWeight: 500,
  minHeight: "44px",
  paddingInline: "14px",
  position: "relative",
  selectors: {
    "&::after": {
      backgroundColor: vars.color.accent,
      borderRadius: "999px",
      bottom: 0,
      content: '""',
      height: "2px",
      left: "14px",
      opacity: 0,
      position: "absolute",
      right: "14px",
      transition: "opacity 150ms ease",
    },
    "&:focus-visible": {
      outline: `2px solid ${vars.color.accent}`,
      outlineOffset: "-2px",
    },
    '&[data-state="active"]': {
      color: ink,
    },
    '&[data-state="active"]::after': {
      opacity: 1,
    },
  },
  transition: "color 150ms ease",
  whiteSpace: "nowrap",
});

export const panel = style({
  display: "grid",
  flex: 1,
  minHeight: "280px",
  padding: vars.space.lg,
  placeItems: "center",
  selectors: {
    "&[hidden]": {
      display: "none",
    },
  },
});
