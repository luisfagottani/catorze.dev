import { Content, List, Root, Trigger } from "@radix-ui/react-tabs";
import TextReveal from "../exercises/animation-letters/animation-letters";
import { AveNativeCoin } from "../exercises/ave-native-coin/ave-native-coin";
import { CardHover } from "../exercises/card-hover/card-hover";
import Coin3D from "../exercises/coin-3d/coid-3d";
import DownloadButton from "../exercises/download-button/download-button";
import HoldToDelete from "../exercises/hold-to-delete/hold-to-delete";
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
  {
    Component: Coin3D,
    id: "coin-3d",
    label: "Coin 3D",
  },
  {
    Component: HoldToDelete,
    id: "hold-to-delete",
    label: "Hold to delete",
  },
  {
    Component: AveNativeCoin,
    id: "ave-native-coin",
    label: "Ave Native Coin",
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
