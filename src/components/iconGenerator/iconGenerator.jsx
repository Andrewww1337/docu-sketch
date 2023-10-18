import { useEffect, useState } from "react";
import { Button } from "../button";
import { IconList } from "../iconList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNames } from "../../fa-names";

import "./iconGenerator.css";

export const IconGenerator = () => {
  const [iconsArray, setIconsArray] = useState([]);
  const [arrayForOneIconDemo, setArrayForOneIconDemo] = useState([]);
  const removeIcon = () => {
    const removedArray = [...arrayForOneIconDemo];
    const firstElement = removedArray.shift();
    setArrayForOneIconDemo(removedArray);
  };
  useEffect(() => {
    if (arrayForOneIconDemo[0]) {
      setTimeout(removeIcon, 3000);
    }
  }, [arrayForOneIconDemo]);

  return (
    <div className="iconGenerator">
      <div className="oneIconDemo">
        {arrayForOneIconDemo[0] && (
          <FontAwesomeIcon
            className="icon"
            icon={faNames[arrayForOneIconDemo[0]?.id]}
            size="xl"
          />
        )}
      </div>

      <Button
        iconsArray={iconsArray}
        setIconsArray={setIconsArray}
        arrayForOneIconDemo={arrayForOneIconDemo}
        setArrayForOneIconDemo={setArrayForOneIconDemo}
      />
      <IconList
        iconsArray={iconsArray}
        arrayForOneIconDemo={arrayForOneIconDemo}
      />
    </div>
  );
};
