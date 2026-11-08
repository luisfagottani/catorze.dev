"use client";

import { AnimatePresence, MotionConfig, motion } from "motion/react";
import { useState } from "react";
import useMeasure from "react-use-measure";
import {
  actions,
  multiStepInner,
  multiStepWrapper,
  primaryButton,
  secondaryButton,
} from "./multi-step-animation.css";
import RenderComponentByCase from "./render-componeny-by-case";

export default function MultiStepComponent() {
  const [ref, { height }] = useMeasure();
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextStep = () => {
    if (currentStep === 2) {
      setCurrentStep(0);
      setDirection(-1);
      return;
    }
    setDirection(1);
    setCurrentStep((prev) => prev + 1);
  };
  const previousStep = () => {
    if (currentStep === 0) {
      return;
    }
    setDirection(-1);
    setCurrentStep((prev) => prev - 1);
  };

  const variants = {
    exit: (d: number) => ({
      opacity: 0,
      x: `${110 * d}%`,
    }),
    initial: (d: number) => ({
      opacity: 0,
      x: `${-110 * d}%`,
    }),
    visible: {
      opacity: 1,
      x: "0%",
    },
  };

  return (
    <MotionConfig transition={{ bounce: 0, duration: 0.3, type: "spring" }}>
      <motion.div animate={{ height }} className={multiStepWrapper}>
        <motion.div className={multiStepInner} ref={ref}>
          <AnimatePresence custom={direction} initial={false} mode="popLayout">
            <motion.div
              animate="visible"
              custom={direction}
              exit="exit"
              initial="initial"
              key={currentStep}
              variants={variants}
            >
              <RenderComponentByCase currentStep={currentStep} />
            </motion.div>
          </AnimatePresence>
          <motion.div className={actions} layout>
            <button
              className={secondaryButton}
              disabled={currentStep === 0}
              onClick={previousStep}
              type="button"
            >
              Back
            </button>
            <button
              className={primaryButton}
              disabled={currentStep === 2}
              onClick={nextStep}
              type="button"
            >
              Continue
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </MotionConfig>
  );
}
