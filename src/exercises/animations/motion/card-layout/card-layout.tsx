/** biome-ignore-all lint/performance/noJsxPropsBind: <because is a exercise> */
/** biome-ignore-all lint/a11y/useKeyWithClickEvents: <because is a exercise> */

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import {
  activeGame,
  button,
  container,
  contentWrapper,
  gameDescription,
  gameTitle,
  gameWrapper,
  header,
  headerInner,
  inner,
  list,
  longDescription,
  overlay,
} from "./card-layout.css";
import { GAMES } from "./utils/constants";

export default function SharedLayout() {
  const [activeGameState, setActiveGameState] = useState<
    (typeof GAMES)[number] | null
  >(null);
  const ref = useRef(null);
  // @ts-expect-error - is just a exercise
  useOnClickOutside(ref, () => setActiveGameState(null));

  useEffect(() => {
    // @ts-expect-error - is just a exercise
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActiveGameState(null);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className={container}>
      <AnimatePresence>
        {activeGameState ? (
          <motion.div
            animate={{ opacity: 1 }}
            className={overlay}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {activeGameState ? (
          <motion.div className={activeGame} layout>
            <motion.div
              className={inner}
              layoutId={`game-item-${activeGameState.title}`}
              ref={ref}
              style={{ borderRadius: 12 }}
            >
              <div className={header}>
                <motion.img
                  alt=""
                  height={56}
                  layoutId={`game-image-${activeGameState.title}`}
                  src={activeGameState.image}
                  style={{ borderRadius: 12 }}
                  width={56}
                />
                <div className={headerInner}>
                  <div className={contentWrapper}>
                    <motion.h2
                      className={gameTitle}
                      layoutId={`game-title-${activeGameState.title}`}
                    >
                      {activeGameState.title}
                    </motion.h2>
                    <motion.p
                      className={gameDescription}
                      layoutId={`game-description-${activeGameState.title}`}
                    >
                      {activeGameState.description}
                    </motion.p>
                  </div>
                  <motion.button
                    className={button}
                    layoutId={`game-button-${activeGameState.title}`}
                    type="button"
                  >
                    Get
                  </motion.button>
                </div>
              </div>

              <motion.p
                animate={{ opacity: 1 }}
                className={longDescription}
                exit={{ opacity: 0, transition: { duration: 0.05 } }}
                initial={{ opacity: 0 }}
                layout
              >
                {activeGameState.longDescription}
              </motion.p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <ul className={list}>
        {GAMES.map((game) => (
          <motion.li
            key={game.title}
            layoutId={`game-item-${game.title}`}
            onClick={() => setActiveGameState(game as (typeof GAMES)[number])}
            style={{ borderRadius: 8 }}
          >
            <motion.img
              alt=""
              height={56}
              layoutId={`game-image-${game.title}`}
              src={game.image}
              style={{ borderRadius: 12 }}
              width={56}
            />
            <div className={gameWrapper}>
              <div className={contentWrapper}>
                <motion.h2
                  className={gameTitle}
                  layoutId={`game-title-${game.title}`}
                >
                  {game.title}
                </motion.h2>
                <motion.p
                  className={gameDescription}
                  layoutId={`game-description-${game.title}`}
                >
                  {game.description}
                </motion.p>
              </div>
              <motion.button
                className={button}
                layoutId={`game-button-${game.title}`}
                type="button"
              >
                Get
              </motion.button>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
