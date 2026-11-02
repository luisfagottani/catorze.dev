import {
  coinContainer,
  coinSide,
  coinSideBack,
  coinSideFront,
  coinStart,
  coinVerse,
  coinWrapper,
} from "./ave-native-coin.css";
import Coin from "./components/coin";

export function AveNativeCoin() {
  return (
    <div className={coinContainer}>
      <div className={coinWrapper}>
        <div className={coinSide} />
      </div>
      <div className={coinWrapper}>
        <div className={coinSideFront} />
        <div className={coinStart}>
          <Coin />
        </div>
        <div className={coinSideBack} />
        <div className={coinVerse}>
          <Coin />
        </div>
      </div>
    </div>
  );
}
