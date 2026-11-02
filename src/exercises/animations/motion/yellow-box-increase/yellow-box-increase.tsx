import { motion } from "motion/react";
import { useState } from "react";
import {
  button,
  element,
  secondaryElement,
  wrapper,
} from "./yellow-box-increase.css";

export default function Example() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((o) => !o);
  };

  return (
    <div className={wrapper}>
      <motion.button
        className={button}
        layout
        onClick={handleClick}
        type="button"
      >
        Animate
      </motion.button>
      {open ? (
        <motion.div
          className={secondaryElement}
          layoutId="rectangle-increase"
          style={{ borderRadius: 12 }}
        />
      ) : (
        <motion.div
          className={element}
          layoutId="rectangle-increase"
          style={{ borderRadius: 12 }}
        />
      )}
    </div>
  );
}
