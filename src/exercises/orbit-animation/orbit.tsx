import { circle, container, orbitingCircle } from "./orbit.css";

export default function Orbit() {
  return (
    <div className={container}>
      <div className={circle} />
      <div className={orbitingCircle} />
    </div>
  );
}
