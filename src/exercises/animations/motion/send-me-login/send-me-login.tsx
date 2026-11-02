import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Spinner } from "./components/spinner";
// import { AnimatePresence, motion } from "motion";
import { blueButton, outerWrapper } from "./send-me-login.css";

const buttonCopy = {
  idle: "Send me a login link",
  loading: (
    <Spinner color="rgba(255, 255, 255, 0.65)" size={16} />
  ) as React.ReactNode,
  success: "Login link sent!",
};

export default function SmoothButton() {
  const [buttonState, setButtonState] = useState("idle");

  const handleClick = () => {
    // This code is just a placeholder
    setButtonState("loading");

    setTimeout(() => {
      setButtonState("success");
    }, 1750);

    setTimeout(() => {
      setButtonState("idle");
    }, 3500);
  };

  return (
    <div className={outerWrapper}>
      <button
        className={blueButton}
        disabled={buttonState !== "idle"}
        onClick={handleClick}
        type="button"
      >
        <AnimatePresence mode="popLayout">
          <motion.span
            animate={{ opacity: 1, transform: "translateY(0)" }}
            exit={{ opacity: 0, transform: "translateY(25px)" }}
            initial={{ opacity: 0, transform: "translateY(-25px)" }}
            key={buttonState}
            transition={{
              bounce: 0,
              duration: 0.3,
              type: "spring",
            }}
          >
            {buttonCopy[buttonState as keyof typeof buttonCopy]}
          </motion.span>
        </AnimatePresence>
      </button>
    </div>
  );
}
