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
`;

const Wrapper = styled.div`
  width: ${({ w }) => w};
  background: ${({ theme: { gray } }) => gray[0]};
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
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
      animate={{ y: "0%", x: "-50%", transitionEnd: { zIndex: 0 } }}
      initial={{ y: "-20%", x: "-50%", zIndex: -1 }}
    >
      <Wrapper w={menuWidth}>{menu}</Wrapper>;
    </MenuWrapper>
  );
}
