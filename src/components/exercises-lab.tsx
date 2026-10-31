import { Content, List, Root, Trigger } from "@radix-ui/react-tabs";
import TextReveal from "../exercises/animation-letters/animation-letters";
import { CardHover } from "../exercises/card-hover/card-hover";
import DownloadButton from "../exercises/download-button/download-button";
import Orbit from "../exercises/orbit-animation/orbit";
import { SimpleTransform } from "../exercises/simple-transform/simple-transform";
import { Sonner } from "../exercises/sonner/sonner";
import { SonnerExpanded } from "../exercises/sonner-expanded/sonner-expanded";
import { list, panel, root, trigger } from "./exercises-lab.css";
import { LabShell } from "./lab-shell";

const exercises = [
  { Component: Sonner, id: "sonner", label: "Sonner" },
  {
    Component: SimpleTransform,
    id: "simple-transform",
    label: "Simple transform",
  },
  { Component: CardHover, id: "card-hover", label: "Card hover" },
  { Component: DownloadButton, id: "download", label: "Download" },
  {
    Component: SonnerExpanded,
    id: "sonner-expanded",
    label: "Sonner expandido",
  },
  { Component: TextReveal, id: "animation-letters", label: "Letras" },
  {
    Component: Orbit,
    id: "orbit-animation",
    label: "Orbit animation",
  },
];

export function ExercisesLab() {
  return (
    <LabShell>
      <Root className={root} defaultValue={exercises[0].id}>
        <List aria-label="Exercícios" className={list}>
          {exercises.map((exercise) => (
            <Trigger className={trigger} key={exercise.id} value={exercise.id}>
              {exercise.label}
            </Trigger>
          ))}
        </List>
        {exercises.map((exercise) => {
          const { Component } = exercise;
          return (
            <Content className={panel} key={exercise.id} value={exercise.id}>
              <Component />
            </Content>
          );
        })}
      </Root>
    </LabShell>
  );
}
