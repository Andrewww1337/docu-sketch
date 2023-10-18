import { useState } from "react";
import { Button } from "../button";
import { IconList } from "../iconList";

import "./iconGenerator.css";

export const IconGenerator = () => {
  const [iconsArray, setIconsArray] = useState([]);

  return (
    <div className="iconGenerator">
      <Button iconsArray={iconsArray} setIconsArray={setIconsArray} />
      <IconList iconsArray={iconsArray} />
    </div>
  );
};
