import { useState } from "react";
import { Button } from "../button";
import { IconList } from "../iconList";
import "./iconGenerator.css";

export const IconGenerator = () => {
  const [icons, setIcons] = useState([]);
  return (
    <div className="iconGenerator">
      <Button icons={icons} setIcons={setIcons} />
      <IconList icons={icons} />
    </div>
  );
};
