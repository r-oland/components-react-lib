// Components==============
import { Link } from "gatsby";
import { useScrollFreeze } from "hooks-lib";
import React from "react";
import styled from "styled-components";
// =========================

const Items = styled.ul`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 151;
  margin-top: 12vh;

  li {
    margin-bottom: 4vh;
  }

  a {
    color: ${({ theme: { white } }) => white};
    font-size: 20px;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  }
`;

const Item = styled.li`
  margin-left: ${({ theme: { spacing } }) => spacing[6]};
  cursor: pointer;
`;

const Shade = styled.div`
  cursor: default;
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 149;
  background-color: black;
  opacity: 0.7;
  top: 0;
  left: 0;
`;

export default function Menu({ items, toggle }) {
  useScrollFreeze();
  items = items.map((e, index) => {
    return (
      <Item key={index}>
        <Link to={`/${e.link}`}>
          {e.hamburgerContent ? e.hamburgerContent : e.content}
        </Link>
      </Item>
    );
  });

  return (
    <div>
      <Items>{items}</Items>;
      <Shade onClick={toggle} />
    </div>
  );
}
