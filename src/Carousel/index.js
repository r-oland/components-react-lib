// Components==============
import { wrap } from "@popmotion/popcorn";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
// =========================

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  height: 300px;
  /* find a better solution for this */
`;

const Slide = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

export function Carousel({ component }) {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (direction) => {
    setPage([page + direction, direction]);
  };

  const index = wrap(0, component.length, page);

  return (
    <Wrapper>
      <AnimatePresence custom={direction}>
        <Slide
          key={page}
          custom={direction}
          initial="enter"
          animate="center"
          exit="exit"
          variants={framerSlider}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            if (offset.x > 60) {
              paginate(-1);
            } else if (offset.x < -60) {
              paginate(1);
            }
          }}
        >
          {component[index]}
        </Slide>
      </AnimatePresence>
    </Wrapper>
  );
}

const framerSlider = {
  enter: (direction) => ({
    x: direction > 0 ? 500 : -500,
    opacity: 0,
    scale: 0.5,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -500 : 500,
    opacity: 0,
    scale: 0.5,
  }),
};
