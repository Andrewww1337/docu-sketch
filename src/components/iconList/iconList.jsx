import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./iconList.css";
import { faNames } from "../../fa-names";

export const IconList = () => {
  return (
    <div className="iconList">
      <FontAwesomeIcon icon={faNames[1]} />
    </div>
  );
};
