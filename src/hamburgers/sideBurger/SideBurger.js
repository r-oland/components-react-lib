// Components==============
import { useToggle } from "hooks-lib";
import React from "react";
import Burger from "./Burger";
import Menu from "./Menu";
// =========================

export function SideBurger({ items, sticky }) {
  const [isToggled, , toggle] = useToggle(false);

  return (
    <div>
      <Burger isToggled={isToggled} toggle={toggle} sticky={sticky} />
      {isToggled && <Menu items={items} toggle={toggle} />}
    </div>
  );
}
