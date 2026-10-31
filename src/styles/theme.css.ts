import { createTheme } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
  color: {
    accent: "#8b5cf6",
    bg: "#09090b",
    black: "#000000",
    border: "#27272a",
    muted: "#a1a1aa",
    surface: "#18181b",
    text: "#fafafa",
    white: "#ffffff",
  },
  font: {
    body: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
    mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
  },
  radius: {
    lg: "20px",
    md: "12px",
  },
  space: {
    lg: "24px",
    md: "16px",
    sm: "8px",
    xl: "40px",
    xs: "4px",
  },
});
