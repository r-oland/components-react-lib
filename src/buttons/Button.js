// Components==============
import { motion } from "framer-motion";
import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
// =========================

const Btn = styled(motion.button)`
  background-color: ${({ theme: { primary } }) => primary[3]};
  color: ${({ theme: { gray }, invertColor }) =>
    invertColor ? gray[14] : gray[0]};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
  padding: ${({ theme: { spacing } }) => `${spacing[1]} ${spacing[5]}`};
  display: inline-block;
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  box-shadow: ${({ theme: { shadow } }) => shadow.m};
`;

export function Button({ children, className, invertColor = false, onClick }) {
  const theme = useContext(ThemeContext);

  return (
    <Btn
      whileHover={{
        backgroundColor: theme.primary[4],
        scale: 1.03,
      }}
      whileTap={{ scale: 0.95 }}
      className={className}
      invertColor={invertColor}
      onClick={onClick}
    >
      {children}
    </Btn>
  );
}
