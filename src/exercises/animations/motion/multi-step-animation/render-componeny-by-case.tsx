import { heading, skeleton, skeletons } from "./multi-step-animation.css";
export default function RenderComponentByCase({
  currentStep,
}: {
  currentStep: number;
}) {
  switch (currentStep) {
    case 0:
      return (
        <>
          <h2 className={heading}>This is step one</h2>
          <p>
            Usually in this step we would explain why this thing exists and what
            it does. Also, we would show a button to go to the next step.
          </p>
          <div className={skeletons}>
            <div className={skeleton} style={{ width: 256 }} />
            <div className={skeleton} style={{ width: 192 }} />
            <div className={skeleton} />
            <div className={skeleton} style={{ width: 384 }} />
          </div>
        </>
      );
    case 1:
      return (
        <>
          <h2 className={heading}>This is step two</h2>
          <p>
            Usually in this step we would explain why this thing exists and what
            it does. Also, we would show a button to go to the next step.
          </p>
          <div className={skeletons}>
            <div className={skeleton} style={{ width: 256 }} />
            <div className={skeleton} style={{ width: 192 }} />
            <div className={skeleton} style={{ width: 384 }} />
          </div>
        </>
      );
    case 2:
      return (
        <>
          <h2 className={heading}>This is step three</h2>
          <p>
            Usually in this step we would explain why this thing exists and what
            it does. Also, we would show a button to go to the next step.
          </p>
          <div className={skeletons}>
            <div className={skeleton} style={{ width: 256 }} />
            <div className={skeleton} style={{ width: 192 }} />
            <div className={skeleton} style={{ width: 128 }} />
            <div className={skeleton} style={{ width: 224 }} />
            <div className={skeleton} style={{ width: 384 }} />
          </div>
        </>
      );
    default:
      return null;
  }
}
