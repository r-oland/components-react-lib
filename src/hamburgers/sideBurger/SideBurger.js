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

  const subMenuValue = {
    selected,
    setSelected,
    toggle,
    isToggled,
  };

  return (
    <SubMenuContext.Provider value={subMenuValue}>
      <Burger isToggled={isToggled} toggle={toggle} sticky={sticky} />
      {isToggled && <Menu items={items} toggle={toggle} />}
    </SubMenuContext.Provider>
  );
}
