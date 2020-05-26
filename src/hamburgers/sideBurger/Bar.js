// Components==============
import React from "react";
import styled from "styled-components";
// =========================

const BarWrapper = styled.div`
  position: absolute;
  top: 27.5px;
  height: 3px;
  width: 100px;
`;

const Bar = styled.div`
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  background: ${({ theme: { primary } }) => primary[3]};
  height: 100%;
  width: 100%;
`;

export default function BarComp() {
  return (
    <BarWrapper>
      <Bar />
    </BarWrapper>
  );
}
