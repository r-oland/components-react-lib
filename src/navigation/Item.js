// Components==============
import { motion } from "framer-motion";
import { useHover } from "hooks-lib";
import React from "react";
import styled from "styled-components";
import useIsDropdown from "./useIsDropdown";
// =========================

const ItemWrapper = styled.li`
  margin-left: ${({ theme: { spacing }, itemSpacing }) => spacing[itemSpacing]};
  cursor: pointer;
  position: ${({ isDropdown }) => !isDropdown && "relative"};
`;

const Bar = styled(motion.div)`
  position: absolute;
  bottom: ${({ isDropdown }) => (isDropdown ? "-1px" : "-1.2em")};
  left: -10%;
  width: 120%;
  height: 3px;
  background: ${({ theme: { primary } }) => primary[3]};
  z-index: 150;
  pointer-events: none;
`;

export default function Item({ children, hoverEffect, itemSpacing }) {
  const [hover, watch, setHover] = useHover();
  const [ref, isDropdown] = useIsDropdown();

  return (
    <ItemWrapper
      {...watch}
      ref={ref}
      isDropdown={isDropdown}
      itemSpacing={itemSpacing}
      onClick={() => {
        setHover(false);
      }}
    >
      {hoverEffect === "bar" && (
        <Bar
          animate={hover ? { scale: 1 } : { scale: 0 }}
          initial={{ scale: 0 }}
          isDropdown={isDropdown}
        />
      )}
      {children}
    </ItemWrapper>
  );
}
