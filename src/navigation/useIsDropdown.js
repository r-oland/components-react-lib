// Components==============
import { useEffect, useRef, useState } from "react";

export default function useIsDropdown() {
  const [isDropdown, setIsDropdown] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const dropdownMenu = ref.current.children[1].children.length !== 0;
    dropdownMenu && setIsDropdown(true);
  }, []);

  return [ref, isDropdown, setIsDropdown];
}
