import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { faNames } from "./fa-names";

import { IconGenerator } from "./components/iconGenerator";

import "./App.css";
import "./reset.css";

function App() {
  // const fontAwesomeList = require("font-awesome-list");

  return (
    <div className="App">
      <IconGenerator />
    </div>
  );
}

export default App;
