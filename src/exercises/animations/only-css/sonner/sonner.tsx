import { useCallback, useState } from "react";
import { buttonAddToast, card, toaster, wrapper } from "./sonner.css";

export const Sonner = () => {
  const [toasts, setToasts] = useState(0);
  const addToast = useCallback(() => {
    setToasts((prev) => prev + 1);
  }, []);

  const array = Array.from({ length: toasts });

  return (
    <div className={wrapper}>
      <div className={toaster}>
        {array.map((_, index) => (
          <div
            className={card}
            // biome-ignore lint/suspicious/noArrayIndexKey: this is a bootcamp exercise
            key={index}
            style={
              { "--index": array.length - 1 - index } as React.CSSProperties
            }
          >
            <h1>{toasts - 1 - index}</h1>
          </div>
        ))}
      </div>
      <button className={buttonAddToast} onClick={addToast} type="button">
        Add toast
      </button>
    </div>
  );
};
