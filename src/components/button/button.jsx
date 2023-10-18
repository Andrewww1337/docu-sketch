import { faNames } from "../../fa-names";
import "./button.css";

export const Button = ({ icons, setIcons }) => {
  const setNewIcon = () => {
    const randNum = Math.floor(Math.random() * faNames.length);
    setIcons([...icons, { key: icons.length, id: randNum }]);
    console.log(icons);
  };
  return (
    <button
      className="getIconButton"
      type="button"
      onClick={() => setNewIcon()}
    >
      Жмяк
    </button>
  );
};
