import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Test = styled(motion.div)`
  color: ${({ theme: { white } }) => white};
  text-align: left;
`;

export const ExampleComponent = () => {
  return (
    <Test animate={{ y: -80 }}>
      <i>Component lib</i>
      <p>npm link [path]/node_modules/react</p>
      <p>npm link [path]/node_modules/styled-components</p>
      <p>npm link </p>
      <br />
      <i>App</i>
      <p>npm i components-react-link</p>
      <p>npm link components-react-link</p>
    </Test>
  );
};
