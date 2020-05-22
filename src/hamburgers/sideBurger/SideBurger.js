// Components==============
import { useToggle } from "hooks-lib";
import React, { useState } from "react";
import Burger from "./Burger";
import Menu from "./Menu";
import { SubMenuContext } from "./subMenuContext";
// =========================

export function SideBurger({ items, sticky }) {
  const [selected, setSelected] = useState(null);
  const [isToggled, , toggle] = useToggle(false);
  const [numberOfItems, setNumberOfItems] = useState(0);

  const subMenuValue = {
    selected,
    setSelected,
    toggle,
    isToggled,
    numberOfItems,
    setNumberOfItems,
  };

  return (
    <SubMenuContext.Provider value={subMenuValue}>
      <Burger isToggled={isToggled} toggle={toggle} sticky={sticky} />
      {isToggled && <Menu items={items} toggle={toggle} />}
    </SubMenuContext.Provider>
  );
}
