import {
  back,
  backInner,
  coin,
  coinSide,
  front,
  frontInner,
  outer,
  root,
  wrapper,
} from "./coid-3d.css";
import CoinIcon from "./components/CoinIcon";

function Coin3D() {
  return (
    <div className={root}>
      <div className={wrapper}>
        <div className={coinSide} />
      </div>
      <div className={wrapper}>
        <div className={`${coin} ${outer} ${front}`}>
          <CoinIcon />
        </div>
        <div className={`${coin} ${frontInner}`} />
        <div className={`${coin} ${outer} ${back}`}>
          <CoinIcon />
        </div>
        <div className={`${coin} ${backInner}`} />
      </div>
    </div>
  );
}

export default Coin3D;
