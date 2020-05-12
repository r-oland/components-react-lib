// Components==============
import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
// =========================

const Wrapper = styled(motion.div)`
  position: absolute;
  position: ${({ sticky }) => sticky && "fixed"};
  right: 20px;
  top: 13px;
  background: ${({ theme: { primary } }) => primary[3]};
  z-index: 151;
`;

export default function Circle({ isToggled, sticky }) {
  return (
    <Wrapper
      animate={!isToggled ? `menuOpen` : `menuClosed`}
      variants={{
        menuClosed: {
          width: "130vw",
          height: "110vh",
          x: "15vw",
          y: "-50vh",
          borderRadius: "33% 37% 62% 38% / 82% 75% 25% 8% ",
        },

        menuOpen: {
          width: 40,
          height: 40,
          x: 0,
          y: 0,
          borderRadius: "100% 100% 100% 100% / 100% 100% 100% 100% ",
        },
      }}
      initial={false}
      sticky={sticky}
    />
  );
}
