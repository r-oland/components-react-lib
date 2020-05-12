// Components==============
import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
// =========================

const Wrapper = styled.div`
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
  height: 9%;
  width: 60%;

  margin-bottom: 4px;
  border-radius: 25px;
`;

const Top = styled(Bar)``;

const Center = styled(Bar)`
  width: 45%;
`;

const Bottom = styled(Bar)`
  margin-bottom: 0;
`;

export default function Burger({ isToggled, toggle, sticky }) {
  return (
    <Wrapper onClick={toggle} sticky={sticky}>
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
            x: 100,
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
