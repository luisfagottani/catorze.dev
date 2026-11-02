import { style } from "@vanilla-extract/css";

/** Inline frame — stage stays in the prose column. */
export const stage = style({
  background: "var(--color-surface)",
  border: "var(--hairline)",
  margin: 0,
  maxWidth: "var(--prose-width)",
  padding: 0,
});

export const caption = style({
  borderBottom: "var(--hairline)",
  color: "var(--color-muted)",
  fontFamily: "var(--font-mono)",
  fontSize: "0.72rem",
  fontWeight: 600,
  letterSpacing: "0.06em",
  margin: 0,
  padding: "0.55rem 0.85rem",
  textTransform: "uppercase",
});

export const fixture = style({
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  minHeight: "14rem",
  overflow: "auto",
  padding: "1.5rem",
});
