// Components==============
import { motion } from "framer-motion";
import { useHover } from "hooks-lib";
import React from "react";
import styled from "styled-components";
import useIsDropdown from "./useIsDropdown";
// =========================

const ItemWrapper = styled.li`
  margin-left: ${({ theme: { spacing } }) => spacing[6]};
  cursor: pointer;
  position: ${({ isDropdown }) => !isDropdown && "relative"};
`;

const Bar = styled(motion.div)`
  position: absolute;
  bottom: -1.2em;
  left: -10%;
  width: 120%;
  height: 3px;
  background: ${({ theme: { primary } }) => primary[4]};
`;

export default function Item({ children, hoverEffect }) {
  const [hover, watch] = useHover();
  const [ref, isDropdown] = useIsDropdown();

  return (
    <ItemWrapper {...watch} ref={ref} isDropdown={isDropdown}>
      {hoverEffect === "bar" && !isDropdown && (
        <Bar
          animate={hover ? { scale: 1 } : { scale: 0 }}
          initial={{ scale: 0 }}
        />
      )}
      {children}
    </ItemWrapper>
  );
}
