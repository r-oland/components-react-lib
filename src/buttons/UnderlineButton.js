// Components==============
import { motion } from "framer-motion";
import { useHover } from "hooks-lib";
import React from "react";
import styled from "styled-components";
// =========================

const Btn = styled.button`
  position: relative;
  display: inline-block;
  overflow: hidden;
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
`;

const Bar = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  bottom: 0;
  background: ${({ theme: { primary }, barOpacity }) =>
    primary[3].replace("1)", `${barOpacity})`)};
`;

export function UnderlineButton({
  children,
  className,
  onClick,
  barPosition = "70%",
  barOpacity = 0.2,
  as = "button",
}) {
  const [hover, watch] = useHover();

  return (
    <Btn
      as={typeof as !== "boolean" && as}
      className={className}
      onClick={onClick}
      {...watch}
    >
      {children}
      <Bar
        barOpacity={barOpacity}
        initial={{
          y: barPosition,
        }}
        animate={hover ? { y: 0 } : { y: barPosition }}
        whileTap={{ scale: 0.8 }}
      />
    </Btn>
  );
}
