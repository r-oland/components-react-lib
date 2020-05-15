// Components==============
import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
// =========================

const MenuWrapper = styled(motion.div)`
  position: absolute;
  top: ${({ position }) => position};
  left: 50%;
  width: ${({ menuIsFullWidth }) => menuIsFullWidth && "100%"};
  cursor: initial;
  z-index: ${({ menuIsFullWidth }) => menuIsFullWidth && "-1"};
`;

const Wrapper = styled.div`
  width: ${({ w }) => w};
  background: ${({ theme: { gray } }) => gray[0]};
  box-shadow: ${({ theme: { shadow } }) => shadow.m};
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  padding: ${({ theme: { spacing } }) => `${spacing[4]} ${spacing[4]}`};
`;

export function DropdownMenu({
  menu,
  menuWidth,
  menuPosition,
  menuIsFullWidth,
}) {
  return (
    <MenuWrapper
      menuIsFullWidth={menuIsFullWidth}
      position={menuPosition}
      animate={{ y: "0%", x: "-50%", opacity: 1 }}
      initial={{ y: "-100%", x: "-50%", opacity: 0 }}
      transition={{ ease: "linear" }}
    >
      <Wrapper w={menuWidth}>{menu}</Wrapper>;
    </MenuWrapper>
  );
}
