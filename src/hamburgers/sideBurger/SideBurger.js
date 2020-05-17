// Components==============
import React, { useContext } from "react";
import Burger from "./Burger";
import Menu from "./Menu";
import { SubMenuContext } from "./subMenuContext";
// =========================

export function SideBurger({ items, sticky }) {
  const { toggle, isToggled } = useContext(SubMenuContext);

  return (
    <div>
      <Burger isToggled={isToggled} toggle={toggle} sticky={sticky} />
      {isToggled && <Menu items={items} toggle={toggle} />}
    </div>
  );
}
