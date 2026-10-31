import { useState } from "react";
import { button, h1, span } from "./animation-letters.css";

export default function TextReveal() {
  const [reset, setReset] = useState(0);
  const text = "Animations";

  const handleReset = () => {
    setReset((prev) => prev + 1);
  };
  return (
    <div>
      <div key={reset}>
        <h1 className={h1}>
          {Object.values(text).map((letter, index) => (
            <span
              className={span}
              data-index={index}
              // biome-ignore lint/suspicious/noArrayIndexKey: this is a bootcamp exercise
              key={`${letter}-${index}`}
              style={
                { "--data-index": `${index * 0.03}s` } as React.CSSProperties
              }
            >
              {letter}
            </span>
          ))}
        </h1>
      </div>
      {/* Use this button to replay your animation */}
      <button className={button} onClick={handleReset} type="button">
        Replay animation
      </button>
    </div>
  );
}
