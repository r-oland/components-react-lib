// Components==============
import { motion } from "framer-motion";
import { Link } from "gatsby";
import { useMediaQ } from "hooks-lib";
import { Container } from "mixins";
import React from "react";
import styled from "styled-components";
// =========================

const Wrapper = styled.div`
  width: 100%;
  background: ${({ background, mediaQ }) => mediaQ && background};
  box-shadow: ${({ theme: { shadow }, mediaQ }) => mediaQ && shadow.s};
  ${({ sticky }) =>
    sticky &&
    `
    position: fixed;
    z-index: 150;
  `}
`;

const Flex = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({ theme: { spacing } }) => spacing[10]};
`;

const Items = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Item = styled(motion.li)`
  margin-left: ${({ theme: { spacing } }) => spacing[6]};
  cursor: pointer;
`;

export function Navigation({
  logo,
  items,
  breakPoint,
  hamburger,
  background = "#fff",
  sticky,
}) {
  const mediaQ = useMediaQ("min", breakPoint);

  items = items.map((e, index) => {
    return (
      <Item key={index} whileHover={{ scale: 1.02 }}>
        <Link to={`/${e.link}`}>{e.content}</Link>
      </Item>
    );
  });

  return (
    <Wrapper background={background} sticky={sticky} mediaQ={mediaQ}>
      <Flex>
        {logo}
        {mediaQ && <Items>{items}</Items>}
        {!mediaQ && hamburger}
      </Flex>
    </Wrapper>
  );
}
