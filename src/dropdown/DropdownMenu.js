// Components==============
import React from "react";
import styled from "styled-components";
// =========================

const Wrapper = styled.div`
  width: ${({ w }) => w};
  background: ${({ theme: { gray } }) => gray[0]};
  box-shadow: ${({ theme: { shadow } }) => shadow.m};
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  padding: ${({ theme: { spacing } }) => `${spacing[4]} ${spacing[4]}`};
`;

export function DropdownMenu({ children, width = "200px" }) {
  return <Wrapper w={width}>{children}</Wrapper>;
}
