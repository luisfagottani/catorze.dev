import { globalStyle, keyframes, style } from "@vanilla-extract/css";

const spin = keyframes({
  "0%": {
    opacity: "1",
  },
  "100%": {
    opacity: "0.15",
  },
});

export const blueButton = style({
  background: "linear-gradient(180deg, #1994ff 0%, #157cff 100%)",
  border: "none",
  borderRadius: "8px",
  boxShadow:
    "0px 0px 1px 1px rgba(255, 255, 255, 0.08) inset, 0px 1px 1.5px 0px rgba(0, 0, 0, 0.32), 0px 0px 0px 0.5px #1a94ff",
  cursor: "pointer",
  fontSize: "13px",
  fontWeight: "500",
  height: "32px",
  overflow: "hidden",
  position: "relative",
  width: "148px",
});

globalStyle(`${blueButton} span`, {
  alignItems: "center",
  color: "white",
  display: "flex",

  justifyContent: "center",

  textShadow: "0px 1px 1.5px rgba(0, 0, 0, 0.16)",
  width: "100%",
});

export const outerWrapper = style({
  display: "flex",
  justifyContent: "center",
  padding: "120px 40px",
});

export const wrapper = style({
  height: "var(--spinner-size, 20px)",
  width: "var(--spinner-size, 20px)",
});

export const spinner = style({
  height: "var(--spinner-size, 20px)",
  left: "50%",
  position: "relative",
  top: "50%",
  width: "var(--spinner-size, 20px)",
});

export const bar = style({
  animation: `${spin} 1.2s linear infinite`,
  background: "var(--spinner-color)",
  borderRadius: "6px",
  height: "8%",
  left: "-10%",
  position: "absolute",
  selectors: {
    "&:nth-child(1)": {
      animationDelay: "-1.2s",
      transform: "rotate(0.0001deg) translate(146%)",
    },
    "&:nth-child(2)": {
      animationDelay: "-1.1s",
      transform: "rotate(30deg) translate(146%)",
    },
    "&:nth-child(3)": {
      animationDelay: "-1.0s",
      transform: "rotate(60deg) translate(146%)",
    },
    "&:nth-child(4)": {
      animationDelay: "-0.9s",
      transform: "rotate(90deg) translate(146%)",
    },
    "&:nth-child(5)": {
      animationDelay: "-0.8s",
      transform: "rotate(120deg) translate(146%)",
    },
    "&:nth-child(6)": {
      animationDelay: "-0.7s",
      transform: "rotate(150deg) translate(146%)",
    },
    "&:nth-child(7)": {
      animationDelay: "-0.6s",
      transform: "rotate(180deg) translate(146%)",
    },
    "&:nth-child(8)": {
      animationDelay: "-0.5s",
      transform: "rotate(210deg) translate(146%)",
    },
    "&:nth-child(9)": {
      animationDelay: "-0.4s",
      transform: "rotate(240deg) translate(146%)",
    },
    "&:nth-child(10)": {
      animationDelay: "-0.3s",
      transform: "rotate(270deg) translate(146%)",
    },
    "&:nth-child(11)": {
      animationDelay: "-0.2s",
      transform: "rotate(300deg) translate(146%)",
    },
    "&:nth-child(12)": {
      animationDelay: "-0.1s",
      transform: "rotate(330deg) translate(146%)",
    },
  },
  top: "-3.9%",
  width: "24%",
});
