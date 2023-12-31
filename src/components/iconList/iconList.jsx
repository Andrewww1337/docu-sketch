import shortid from "shortid";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNames } from "../../fa-names";

import "./iconList.css";

export const IconList = ({ iconsArray }) => {
  return (
    <div className="iconList">
      {iconsArray &&
        iconsArray?.map((icon) => (
          <FontAwesomeIcon
            className="icon"
            icon={faNames[icon?.id]}
            key={shortid.generate()}
            size="lg"
          />
        ))}
    </div>
  );
};
