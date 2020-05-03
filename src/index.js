import React from "react";
import styled from "styled-components";

const Test = styled.h1``;

export const ExampleComponent = ({ text }) => {
  return <Test>Hello is {text} your looking for?</Test>;
};
