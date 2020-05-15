// Components==============
import { Link } from "gatsby";
import { useMediaQ } from "hooks-lib";
import { Container } from "mixins";
import React from "react";
import styled from "styled-components";
import Item from "./Item";
// =========================

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  background: ${({ background, mediaQ }) => mediaQ && background};
  box-shadow: ${({ theme: { shadow }, mediaQ }) => mediaQ && shadow.s};
  z-index: 150;
  ${({ sticky }) =>
    sticky &&
    `
    position: fixed;
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

export function Navigation({
  logo,
  items,
  breakPoint,
  hamburger,
  background = "#fff",
  sticky,
  hoverEffect = "bar",
}) {
  const mediaQ = useMediaQ("min", breakPoint);

  items = items.map((e, index) => {
    return (
      <Item key={index} hoverEffect={hoverEffect}>
        {e.link === "noLink" ? (
          <div>{e.content}</div>
        ) : (
          <Link to={`/${e.link}`}>{e.content}</Link>
        )}
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
