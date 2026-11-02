import { useCallback, useEffect, useState } from "react";
import { buttonAddToast, card, toaster, wrapper } from "./sonner-expanded.css";

export const SonnerExpanded = () => {
  const [toasts, setToasts] = useState(0);

  const addToast = useCallback(() => {
    setToasts((prev) => prev + 1);
  }, []);

  const array = Array.from({ length: toasts });

  return (
    <div className={wrapper}>
      <div className={toaster}>
        {array.map((_, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: this is a bootcamp exercise
          <Toast index={array.length - (index + 1)} key={index} />
        ))}
      </div>
      <button className={buttonAddToast} onClick={addToast} type="button">
        Add toast
      </button>
    </div>
  );
};

export const Toast = ({ index }: { index: number }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div
      className={card}
      data-mounted={mounted}
      style={{ "--index": index } as React.CSSProperties}
    />
  );
};
