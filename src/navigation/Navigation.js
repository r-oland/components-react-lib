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
  background: ${({ background }) => background};
  box-shadow: ${({ theme: { shadow } }) => shadow.s};
  ${({ sticky }) =>
    sticky &&
    `
    z-index: 150;
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
  itemSpacing = 8,
}) {
  const mediaQ = useMediaQ("min", breakPoint);

  items = items.map((e, index) => {
    return (
      <Item key={index} hoverEffect={hoverEffect} itemSpacing={itemSpacing}>
        {e.link === "noLink" ? (
          <div>{e.content}</div>
        ) : (
          <Link to={`/${e.link}`}>{e.content}</Link>
        )}
      </Item>
    );
  });

  return (
    <Wrapper background={background} sticky={sticky}>
      <Flex>
        <div style={{ zIndex: 300 }}>{logo}</div>
        {mediaQ && <Items>{items}</Items>}
        {!mediaQ && hamburger}
      </Flex>
    </Wrapper>
  );
}
