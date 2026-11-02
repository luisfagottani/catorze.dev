/** biome-ignore-all lint/a11y/useSemanticElements: layout box needs a div, not a button */
import { motion } from "motion/react";
import { useState } from "react";
import { element, wrapper } from "./yellow-box-layout.css";

export default function Example() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((o) => !o);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      handleClick();
    }
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      handleClick();
    }
  };

  return (
    <div className={wrapper}>
      <motion.div
        className={element}
        layout
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        role="button"
        style={
          open
            ? { height: "100%", inset: 0, position: "fixed", width: "100%" }
            : { height: 48, width: 48 }
        }
        tabIndex={0}
      />
    </div>
  );
}
