import { useState } from "react";
import "./App.css";

export function replaceCamelWithSpaces(color) {
  return color.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [buttonColor, setButtonColor] = useState("MediumVioletRed");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const newButtonColor =
    buttonColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";

  return (
    <div>
      <button
        disabled={isButtonDisabled}
        style={{ backgroundColor: isButtonDisabled ? "gray" : buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
      >
        Change to {newButtonColor}
      </button>
      <label htmlFor="checkbox">Disabled button</label>
      <input
        id="checkbox"
        defaultChecked={isButtonDisabled}
        value={isButtonDisabled}
        type="checkbox"
        onChange={(e) => setIsButtonDisabled(e.target.checked)}
      />
    </div>
  );
}

export default App;
