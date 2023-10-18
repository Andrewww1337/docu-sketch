import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./iconList.css";
import { faNames } from "../../fa-names";

export const IconList = ({ icons }) => {
  return (
    <div className="iconList">
      {icons &&
        icons.map((icon) => (
          <FontAwesomeIcon icon={faNames[icon.id]} key={icon.key} />
        ))}
    </div>
  );
};
