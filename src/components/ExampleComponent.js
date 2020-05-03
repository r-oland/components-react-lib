import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { color } from "styled-system";

const Test = styled.div`
  width: 20px;
  height: 15px;
  ${color}
`;

export const ExampleComponent = ({ bg }) => {
  return (
    <motion.div animate={{ x: 100 }}>
      <Test bg={bg} />
    </motion.div>
  );
};
