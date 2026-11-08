import { globalStyle, keyframes, style } from "@vanilla-extract/css";

const spin = keyframes({
  "0%": {
    opacity: "1",
  },
  "100%": {
    opacity: "0.15",
  },
});

export const feedbackWrapper = style({
  alignItems: "center",
  display: "flex",
  height: "500px",
  justifyContent: "center",
  width: "100%",
});

export const feedbackButton = style({
  alignItems: "center",
  background: "white",
  border: "1px solid #e9e9e7",
  borderRadius: "8px",
  display: "flex",
  fontWeight: 500,
  height: "36px",
  outline: "none",
  padding: "0 12px",
  position: "relative",
});

globalStyle(`${feedbackButton} span`, {
  display: "block",
  fontSize: "14px",
});

export const feedbackPopover = style({
  background: "#f5f6f7",
  borderRadius: "12px",
  boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.08), 0px 2px 2px rgba(0, 0, 0, 0.04)",
  height: "192px",
  outline: "none",
  overflow: "hidden",
  padding: "4px",
  position: "absolute",
  width: "364px",
});

export const placeholder = style({
  color: "#63635d",
  fontSize: "14px",
  left: "16px",
  position: "absolute",
  top: "17px",
});

export const successWrapper = style({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  justifyContent: "center",
});

globalStyle(`${successWrapper} svg`, {
  marginTop: "-4px",
});

globalStyle(`${successWrapper} h3`, {
  color: "#21201c",
  fontSize: "14px",
  fontWeight: 500,
  marginBottom: "4px",
  marginTop: "8px",
});

globalStyle(`${successWrapper} p`, {
  color: "#63635d",
  fontSize: "14px",
});

export const feedbackForm = style({
  background: "white",
  border: "1px solid #e6e7e8",
  borderRadius: "8px",
});

export const textarea = style({
  border: "none",
  borderRadius: "8px 0",
  boxShadow: "none",
  fontSize: "14px",
  height: "128px",
  outline: "none",
  outlineOffset: "0",
  padding: "12px",
  resize: "none",
  width: "100%",
});

globalStyle(`${textarea}::placeholder`, {
  opacity: 0,
});

export const feedbackFooter = style({
  alignItems: "center",
  display: "flex",
  height: "48px",
  padding: "0 10px",
  position: "relative",
});

export const dottedLine = style({
  left: 0,
  position: "absolute",
  right: 0,
  top: "-1px",
});

export const halfCircleLeft = style({
  left: 0,
  position: "absolute",
  top: 0,
  transform: "translateX(-1.5px) translateY(-50%)",
});

export const halfCircleRight = style({
  position: "absolute",
  right: 0,
  top: 0,
  transform: "translateX(1.5px) translateY(-50%) rotate(180deg)",
});

export const submitButton = style({
  alignItems: "center",
  background: "linear-gradient(180deg, #1994ff 0%, #157cff 100%)",
  border: "none",
  borderRadius: "6px",
  boxShadow:
    "0px 0px 1px 1px rgba(255, 255, 255, 0.08) inset, 0px 1px 1.5px 0px rgba(0, 0, 0, 0.32), 0px 0px 0px 0.5px #1a94ff",
  display: "flex",
  fontSize: "12px",
  fontWeight: 600,
  height: "24px",
  justifyContent: "center",
  marginLeft: "auto",
  overflow: "hidden",
  position: "relative",
  width: "104px",
});

globalStyle(`${submitButton} span`, {
  alignItems: "center",
  color: "white",
  display: "flex",
  justifyContent: "center",
  textShadow: "0px 1px 1.5px rgba(0, 0, 0, 0.16)",
  width: "100%",
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
      animationDelay: "-1s",
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

export const feedbackSuccessTitle = style({
  color: "#21201c",
  fontSize: "14px",
  fontWeight: 500,
  marginBottom: "4px",
  marginTop: "8px",
});

export const feedbackSuccessDescription = style({
  color: "#63635d",
  fontSize: "14px",
});
