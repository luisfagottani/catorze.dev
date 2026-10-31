import { style } from "@vanilla-extract/css";
import { vars } from "../styles/theme.css";

export const main = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.lg,
  margin: "0 auto",
  padding: `${vars.space.xl} 0`,
  width: "min(960px, 100% - 2 * var(--padding, 24px))",
});

export const header = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.sm,
});

export const eyebrow = style({
  color: vars.color.accent,
  fontFamily: vars.font.mono,
  fontSize: "0.75rem",
  letterSpacing: "0.08em",
  margin: 0,
  textTransform: "uppercase",
});

export const heading = style({
  fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
  fontWeight: 600,
  letterSpacing: "-0.02em",
  margin: 0,
});

export const subtitle = style({
  color: vars.color.muted,
  margin: 0,
  maxWidth: "42ch",
});

export const stage = style({
  backgroundColor: vars.color.white,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.lg,
  display: "flex",
  flexDirection: "column",
  minHeight: "320px",
  overflow: "hidden",
});

export const stageHint = style({
  color: vars.color.muted,
  fontFamily: vars.font.mono,
  fontSize: "0.875rem",
  margin: "auto",
  padding: vars.space.lg,
  textAlign: "center",
});
