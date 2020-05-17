// Components==============
import { motion } from "framer-motion";
import { useMediaQ, useOnClickOutside, useToggle } from "hooks-lib";
import React, { useRef } from "react";
import styled from "styled-components";
import { DropdownMenu } from "./DropdownMenu";
// =========================

const Wrapper = styled.div`
  position: ${({ menuIsFullWidth }) => !menuIsFullWidth && "relative"};
  display: inline-block;
`;

const ButtonWrapper = styled.div`
  .hoverPointer {
    cursor: ${({ hover }) => hover && "default"};
  }
`;

const Arrow = styled.svg`
  position: absolute;
  width: 12.5px;
  top: 50%;
  right: ${({ position }) => position};
  transform: translateY(-50%);
  pointer-events: none;
`;

const InvisibleLinker = styled.div`
  width: 100%;
  height: 30px;
  position: absolute;
  left: 50%;
  bottom: -15%;
  pointer-events: ${({ isToggled }) => !isToggled && "none"};
  transform: translateX(-50%);
  cursor: initial;
`;

export function DropdownButton({
  button,
  menu,
  arrow,
  menuPosition = "110%",
  hover,
  menuIsFullWidth,
  menuWidth = "200px",
}) {
  const [isToggled, setIsToggled, toggle] = useToggle(false);
  const noMobile = useMediaQ("min", 900);
  const ref = useRef();
  useOnClickOutside(
    ref,
    () => {
      return setIsToggled(false);
    },
    isToggled
  );

  const hoverCondition = hover && noMobile;

  return (
    <Wrapper
      ref={ref}
      onMouseEnter={hoverCondition ? toggle : undefined}
      onMouseLeave={hoverCondition ? toggle : undefined}
      menuIsFullWidth={menuIsFullWidth}
    >
      <ButtonWrapper
        onClick={!hoverCondition ? toggle : undefined}
        hover={hoverCondition}
      >
        <InvisibleLinker isToggled={isToggled} />
        {button}
        {arrow && (
          <Arrow viewBox="0 0 7.914 4.705" position={arrow.position}>
            <motion.g animate={isToggled ? { rotate: 180 } : { rotate: 0 }}>
              <g transform="translate(-231.691 -1663)">
                <path
                  d="M.573,0a.639.639,0,0,1,.573.689V4.82a.639.639,0,0,1-.573.689A.639.639,0,0,1,0,4.82V.689A.639.639,0,0,1,.573,0Z"
                  transform="translate(231.691 1663.81) rotate(-45)"
                  fill={arrow.color}
                />
                <path
                  d="M.573,5.508a.639.639,0,0,0,.573-.689V.689A.639.639,0,0,0,.573,0,.639.639,0,0,0,0,.689V4.82A.639.639,0,0,0,.573,5.508Z"
                  transform="translate(235.71 1667.705) rotate(-135)"
                  fill={arrow.color}
                />
              </g>
            </motion.g>
          </Arrow>
        )}
      </ButtonWrapper>
      {isToggled && (
        <DropdownMenu
          menuPosition={menuPosition}
          menu={menu}
          menuIsFullWidth={menuIsFullWidth}
          menuWidth={menuWidth}
        />
      )}
    </Wrapper>
  );
}
