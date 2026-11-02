import { style } from "@vanilla-extract/css";
import { vars } from "../../../../styles/theme.css";

export const wrapper = style({
  display: "grid",
});

export const card = style({
  alignItems: "flex-end",
  borderRadius: "16px",
  boxShadow: `
     0px 0px 0px 1px rgba(9, 9, 11, 0.08),
    0px 1px 2px -1px rgba(9, 9, 11, 0.08),
    0px 2px 4px 0px rgba(9, 9, 11, 0.04);`,
  cursor: "pointer",
  display: "flex",
  minHeight: "340px",
  minWidth: "340px",
  overflow: "hidden",
  textDecoration: "none",
});

export const cardDescription = style({
  backgroundColor: vars.color.white,
  border: `1px solid ${vars.color.white}`,
  borderRadius: vars.radius.md,
  boxShadow: `
    0px 0px 0px 1px rgba(0, 0, 0, 0.08),
    0px 1px 2px -1px rgba(0, 0, 0, 0.08),
    0px 2px 4px 0px rgba(0, 0, 0, 0.04);`,
  fontSize: "13px",
  margin: "var(--margin)",
  padding: "10px 14px 13px",
  position: "relative",
  selectors: {
    [`${card}:hover &`]: {
      transform: "translateY(0)",
    },
    [`${card}:focus-visible &`]: {
      transform: "translateY(0)",
    },
  },
  transform: "translateY(calc(100% + var(--margin) + 1px))",
  transition: "transform 500ms cubic-bezier(0.19, 1, 0.22, 1)",
  vars: {
    "--margin": "6px",
  },
  width: "100%",
});

export const cardTitle = style({
  color: vars.color.muted,
  fontWeight: 600,
  margin: 0,
  padding: 0,
});

export const cardSubtitle = style({
  color: "#717175",
  lineHeight: "1",
  margin: 0,
  marginTop: "4px",
  padding: 0,
});

export const cardIcon = style({
  position: "absolute",
  right: vars.space.md,
  top: vars.space.md,
});
