import { arrowDown, button } from "./download-button.css";

export default function DownloadButton() {
  return (
    <button aria-label="Download PDF" className={button} type="button">
      {ArrowDown}
      {ArrowDown}
    </button>
  );
}

const ArrowDown = (
  <svg
    aria-label="Arrow Down"
    className={arrowDown}
    fill="none"
    height="18"
    viewBox="0 0 24 24"
    width="18"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.25 14L12 20.25L5.75 14M12 19.5V3.75"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);
