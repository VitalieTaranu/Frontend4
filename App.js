import { useState } from "react";
import "./App.css";

import InputWithClear from "./components/InputWithClean";
import AlertButton from "./components/AlertButton";
import { ThemeCheckbox } from "./components/ThemeCheckbox";

function App() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const clear = () => {
    alert(`${name} ${surname}`);
    setName("");
    setSurname("");
  };

  return (
    <div className="App">
      <h1>Lesson4</h1>
      <ThemeCheckbox />
      <InputWithClear
        value={name}
        setValue={setName}
        placeholder="Please enter your name"
      />
      <InputWithClear
        value={surname}
        setValue={setSurname}
        placeholder="Please enter your surname"
      />
      <AlertButton onButtonClick={clear} />
    </div>
  );
}

export default App;

// import { useState } from "react";
// import "./App.css";
// import NameInput from "./components/NameInput";
// import { ThemeCheckbox } from "./components/ThemeCheckbox";

// function App() {
//   const [name, setName] = useState("Person");

//   return (
//     <div className="App">
//       <h1>Lesson4</h1>
//       <ThemeCheckbox name={name} />
//       <NameInput name={name} setName={setName} />
//     </div>
//   );
// }

// export default App;
