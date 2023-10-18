import { useEffect, useState } from "react";

import { faNames } from "../../fa-names";

import "./button.css";

export const Button = ({
  iconsArray,
  setIconsArray,
  arrayForOneIconDemo,
  setArrayForOneIconDemo,
}) => {
  const [icons, setIcons] = useState(null);
  const [alloneIcon, setAlloneIcon] = useState(null);

  const setNewIcon = () => {
    setIcons({
      id: Math.floor(Math.random() * faNames?.length),
    });
  };

  const setOneIcon = () => {
    setAlloneIcon({
      id: Math.floor(Math.random() * faNames?.length),
    });
  };

  useEffect(() => {
    if (icons) {
      setIconsArray([...iconsArray, icons]);
    }
  }, [icons]);
  useEffect(() => {
    if (alloneIcon) {
      setArrayForOneIconDemo([...arrayForOneIconDemo, alloneIcon]);
    }
  }, [alloneIcon]);

  return (
    <button
      className="getIconButton"
      type="button"
      onClick={() => {
        setOneIcon();
        setTimeout(setNewIcon, 3000);
      }}
    >
      Жмяк
    </button>
  );
};
