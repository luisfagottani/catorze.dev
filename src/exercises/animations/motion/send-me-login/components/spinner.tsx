import { bar, spinner, wrapper } from "../send-me-login.css";

const bars = new Array(12).fill(0);

export function Spinner({ color, size = 20 }: { color: string; size: number }) {
  return (
    <div
      className={wrapper}
      style={{
        ["--spinner-color" as string]: color,
        ["--spinner-size" as string]: `${size}px`,
      }}
    >
      <div className={spinner}>
        {bars.map((_, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: we need a key just for the sake of the exercise
          <div className={bar} key={`spinner-bar-${i}`} />
        ))}
      </div>
    </div>
  );
}
