import { useContext } from "react";
import { Content } from "./Content";
import { ThemeContext } from "./ThemeContext";
import "./App.css";

function App() {
  const context = useContext(ThemeContext);
  return (
    <div className="App">
      <button onClick={context.toggleTheme}>Toggle Theme</button>
      <Content />
    </div>
  );
}

export default App;
