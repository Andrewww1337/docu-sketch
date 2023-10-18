import "./button.css";

export const Button = () => {
  return (
    <button
      className="getIconButton"
      type="button"
      onClick={(e) => e.stopPropagation()}
    >
      Жмяк
    </button>
  );
};
