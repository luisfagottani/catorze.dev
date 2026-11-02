import { AnimatePresence, getValueTransition, motion } from "motion/react";
import { useState } from "react";
import useMeasure from "react-use-measure";
import { button, element, inner, wrapper } from "./fake-family-drawer.css";
export default function Example() {
  const [showExtraContent, setShowExtraContent] = useState(false);
  const handleToggle = () => {
    setShowExtraContent((b) => !b);
  };
  const [ref, bounds] = useMeasure({ offsetSize: true });

  console.log(bounds);

  return (
    <div className={wrapper}>
      <button className={button} onClick={handleToggle} type="button">
        Toggle height
      </button>
      <motion.div
        animate={{ height: bounds.height ?? 0 }}
        className={element}
        transition={{
          bounce: 0,
          duration: 0.3,
          origin: getValueTransition("height", "bottom"),
          type: "spring",
        }}
      >
        <AnimatePresence>
          <div className={inner} ref={ref}>
            <h1>Fake Family Drawer</h1>
            <p>
              This is a fake family drawer. Animating height is tricky, but
              satisfying when it works.
            </p>
            {showExtraContent ? (
              <p>
                This extra content will change the height of the drawer. Some
                even more content to make the drawer taller and taller and
                taller...
              </p>
            ) : null}
          </div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
