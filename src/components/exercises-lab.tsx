import FakeFamilyDrawer from "../exercises/animations/motion/fake-family-drawer/fake-family-drawer";
import SendMeLogin from "../exercises/animations/motion/send-me-login/send-me-login";
import YellowBoxLayout from "../exercises/animations/motion/yellow-box-layout/yellow-box-layout";
import TextReveal from "../exercises/animations/only-css/animation-letters/animation-letters";
import { AveNativeCoin } from "../exercises/animations/only-css/ave-native-coin/ave-native-coin";
import { CardHover } from "../exercises/animations/only-css/card-hover/card-hover";
import Coin3D from "../exercises/animations/only-css/coin-3d/coid-3d";
import DownloadButton from "../exercises/animations/only-css/download-button/download-button";
import HoldToDelete from "../exercises/animations/only-css/hold-to-delete/hold-to-delete";
import Orbit from "../exercises/animations/only-css/orbit-animation/orbit";
import { SimpleTransform } from "../exercises/animations/only-css/simple-transform/simple-transform";
import { Sonner } from "../exercises/animations/only-css/sonner/sonner";
import { SonnerExpanded } from "../exercises/animations/only-css/sonner-expanded/sonner-expanded";
import { PageShell } from "./page-shell";
import { Tabs } from "./tabs";

const cssExercises = [
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

const framerExercises = [
  { Component: SendMeLogin, id: "send-me-login", label: "Send me login" },
  {
    Component: FakeFamilyDrawer,
    id: "fake-family-drawer",
    label: "Fake family drawer",
  },
  {
    Component: YellowBoxLayout,
    id: "yellow-box-layout",
    label: "Yellow box layout",
  },
];

export function ExercisesLab() {
  return (
    <PageShell title={"Animations Everywhere"}>
      <Tabs exercises={cssExercises} />
      <Tabs exercises={framerExercises} />
    </PageShell>
  );
}
