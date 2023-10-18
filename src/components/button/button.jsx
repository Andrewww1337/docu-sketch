import { useEffect, useState } from "react";

import { faNames } from "../../fa-names";

import "./button.css";

export const Button = ({ iconsArray, setIconsArray }) => {
  const [icons, setIcons] = useState([]);

  const setNewIcon = () => {
    setIcons({
      id: Math.floor(Math.random() * faNames?.length),
    });
  };

  useEffect(() => {
    setIconsArray([...iconsArray, icons]);
  }, [icons]);

  return (
    <button
      className="getIconButton"
      type="button"
      onClick={() => setTimeout(setNewIcon, 3000)}
    >
      Жмяк
    </button>
  );
};
