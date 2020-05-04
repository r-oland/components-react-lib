import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { color } from "styled-system";

const Test = styled(motion.div)`
  ${color}
`;

export const ExampleComponent = ({ bg, color }) => {
  return (
    <Test animate={{ y: 80 }} bg={bg} color={color}>
      test
    </Test>
  );
};
