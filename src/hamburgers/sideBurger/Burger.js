// Components==============
import { motion } from "framer-motion";
import { useMediaQ } from "hooks-lib";
import React from "react";
import styled from "styled-components";
// =========================

const Wrapper = styled(motion.div)`
  cursor: pointer;
  position: absolute;
  position: ${({ sticky }) => sticky && "fixed"};
  right: 20px;
  top: 13px;
  height: 40px;
  width: 40px;
  z-index: 153;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Bar = styled(motion.div)`
  background: ${({ theme: { gray } }) => gray[14]};
  height: 8%;
  width: 70%;

  margin-bottom: 4px;
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
`;

const Top = styled(Bar)``;

const Center = styled(Bar)`
  width: 55%;
`;

const Bottom = styled(Bar)`
  margin-bottom: 0;
`;

export default function Burger({ isToggled, toggle, sticky }) {
  const burgerQuerySmall = useMediaQ("max", 320);
  const burgerQuery = useMediaQ("max", 380);

  return (
    <Wrapper
      onClick={toggle}
      sticky={sticky}
      animate={
        isToggled
          ? { x: burgerQuerySmall ? "0" : burgerQuery ? "-75px" : "-40vw" }
          : { x: "0" }
      }
    >
      <Top
        animate={!isToggled ? `menuOpen` : `menuClosed`}
        variants={{
          menuClosed: {
            rotate: 45,
            y: 8,
          },

          menuOpen: {
            rotate: 0,
            y: 0,
          },
        }}
        initial={false}
      />
      <Center
        animate={!isToggled ? `menuOpen` : `menuClosed`}
        variants={{
          menuClosed: {
            x: "60vw",
          },

          menuOpen: {
            x: 0,
          },
        }}
        initial={false}
        ter
      />
      <Bottom
        animate={!isToggled ? `menuOpen` : `menuClosed`}
        variants={{
          menuClosed: {
            rotate: 320,
            y: -8,
          },

          menuOpen: {
            rotate: 0,
            y: 0,
          },
        }}
        initial={false}
      />
    </Wrapper>
  );
}
