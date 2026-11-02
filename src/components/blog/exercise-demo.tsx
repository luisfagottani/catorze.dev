import { getExercise } from "../../exercises/catalog";
import { caption, fixture, stage } from "./exercise-demo.css";

interface ExerciseDemoProps {
  id: string;
}

export function ExerciseDemo({ id }: ExerciseDemoProps) {
  const entry = getExercise(id);

  if (!entry) {
    return null;
  }

  const { Component, label } = entry;

  return (
    <figure className={stage}>
      <figcaption className={caption}>{label}</figcaption>
      <div className={fixture}>
        <Component />
      </div>
    </figure>
  );
}
