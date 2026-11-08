import type { ComponentType } from "react";
import CardLayout from "./animations/motion/card-layout/card-layout";
import FakeFamilyDrawer from "./animations/motion/fake-family-drawer/fake-family-drawer";
import FeedbackPopover from "./animations/motion/feedback-popover/feedback-popover";
import SendMeLogin from "./animations/motion/send-me-login/send-me-login";
import YellowBoxIncrease from "./animations/motion/yellow-box-increase/yellow-box-increase";
import YellowBoxLayout from "./animations/motion/yellow-box-layout/yellow-box-layout";
import TextReveal from "./animations/only-css/animation-letters/animation-letters";
import { AveNativeCoin } from "./animations/only-css/ave-native-coin/ave-native-coin";
import { CardHover } from "./animations/only-css/card-hover/card-hover";
import Coin3D from "./animations/only-css/coin-3d/coid-3d";
import DownloadButton from "./animations/only-css/download-button/download-button";
import HoldToDelete from "./animations/only-css/hold-to-delete/hold-to-delete";
import Orbit from "./animations/only-css/orbit-animation/orbit";
import { SimpleTransform } from "./animations/only-css/simple-transform/simple-transform";
import { Sonner } from "./animations/only-css/sonner/sonner";
import { SonnerExpanded } from "./animations/only-css/sonner-expanded/sonner-expanded";

export type ExerciseGroup = "css" | "motion";

export interface ExerciseEntry {
  Component: ComponentType;
  group: ExerciseGroup;
  id: string;
  label: string;
}

/** Labels keep technical English names (course / component vocabulary). */
export const exercises: ExerciseEntry[] = [
  { Component: Sonner, group: "css", id: "sonner", label: "Sonner" },
  {
    Component: SimpleTransform,
    group: "css",
    id: "simple-transform",
    label: "Simple transform",
  },
  { Component: CardHover, group: "css", id: "card-hover", label: "Card hover" },
  {
    Component: DownloadButton,
    group: "css",
    id: "download",
    label: "Download",
  },
  {
    Component: SonnerExpanded,
    group: "css",
    id: "sonner-expanded",
    label: "Sonner expanded",
  },
  {
    Component: TextReveal,
    group: "css",
    id: "animation-letters",
    label: "Animation letters",
  },
  {
    Component: Orbit,
    group: "css",
    id: "orbit-animation",
    label: "Orbit animation",
  },
  { Component: Coin3D, group: "css", id: "coin-3d", label: "Coin 3D" },
  {
    Component: HoldToDelete,
    group: "css",
    id: "hold-to-delete",
    label: "Hold to delete",
  },
  {
    Component: AveNativeCoin,
    group: "css",
    id: "ave-native-coin",
    label: "Ave Native Coin",
  },
  {
    Component: SendMeLogin,
    group: "motion",
    id: "send-me-login",
    label: "Send me login",
  },
  {
    Component: FakeFamilyDrawer,
    group: "motion",
    id: "fake-family-drawer",
    label: "Fake family drawer",
  },
  {
    Component: YellowBoxLayout,
    group: "motion",
    id: "yellow-box-layout",
    label: "Yellow box layout",
  },
  {
    Component: YellowBoxIncrease,
    group: "motion",
    id: "yellow-box-increase",
    label: "Yellow box increase",
  },
  {
    Component: CardLayout,
    group: "motion",
    id: "card-layout",
    label: "Card layout",
  },
  {
    Component: FeedbackPopover,
    group: "motion",
    id: "popover",
    label: "Feedback popover",
  },
];

export function getExercise(id: string): ExerciseEntry | undefined {
  return exercises.find((entry) => entry.id === id);
}

export function exercisesByGroup(group: ExerciseGroup): ExerciseEntry[] {
  return exercises.filter((entry) => entry.group === group);
}
