// Components==============
import { useToggle } from "hooks-lib";
import React from "react";
import Burger from "./Burger";
import Circle from "./Circle";
import Menu from "./Menu";
// =========================

export function BouncyBurger({ items, sticky }) {
  const [isToggled, , toggle] = useToggle(false);

  return (
    <div>
      <Circle isToggled={isToggled} sticky={sticky} />
      <Burger isToggled={isToggled} toggle={toggle} sticky={sticky} />
      {isToggled && <Menu items={items} toggle={toggle} />}
    </div>
  );
}
