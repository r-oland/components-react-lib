// Components==============
import { motion } from "framer-motion";
import { Link } from "gatsby";
import { useScrollFreeze } from "hooks-lib";
import React, { useContext } from "react";
import styled from "styled-components";
import BarComp from "./Bar";
import { SubMenuContext } from "./subMenuContext";
// =========================

const ItemWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 150;
  background: ${({ theme: { gray } }) => gray[0]};
  width: 70vw;
  min-width: 300px;
  height: 100%;
  clip-path: polygon(0 0, 100% 0, 85% 100%, 0% 100%);
`;

const Items = styled.ul`
  display: grid;
  justify-content: start;
  margin-top: ${({ theme: { spacing } }) => spacing[13]};
  margin-left: ${({ theme: { spacing } }) => spacing[6]};

  li {
    margin-bottom: ${({ theme: { spacing } }) => spacing[8]};
    display: inline-block;
  }

  a,
  button {
    color: ${({ theme: { white } }) => white};
    font-size: 20px;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  }
`;

const Item = styled.li`
  position: relative;
  cursor: pointer;
  margin-bottom: ${({ lastItem }) => lastItem === 2 && "0"};
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

  const { setSelected } = useContext(SubMenuContext);

  const ItemComp = ({ e, isDropdown }) => {
    return (
      <Item>
        {isDropdown ? (
          e.hamburgerContent
        ) : (
          <Link
            to={`/${e.link}`}
            onClick={() => {
              toggle();

              setSelected(null);
            }}
          >
            {e.content}
          </Link>
        )}
        <BarComp e={e} isDropdown={isDropdown} />
      </Item>
    );
  };

  items = items.map((e, index) => {
    const isDropdown = e.hamburgerContent;

    return <ItemComp e={e} isDropdown={isDropdown} key={index} />;
  });

  return (
    <div>
      <ItemWrapper animate="mounted" initial="unMounted" variants={framerMenu}>
        <Items>{items}</Items>;
      </ItemWrapper>
      <Shade onClick={toggle} />
    </div>
  );
}

const framerMenu = {
  mounted: {
    x: 0,
    transition: {
      damping: 100,
      duration: 0.4,
    },
  },
  unMounted: {
    x: "-100% ",
  },
};
