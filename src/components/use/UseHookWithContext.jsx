import { createContext, use, useContext } from "react";
import "../../styles.css";

const ThemeContext = createContext(null);
const UseHookWithContext = () => {
  return (
    <ThemeContext.Provider value="dark">
      <MyComponent />
    </ThemeContext.Provider>
  );
};

const MyComponent = () => {
  const theme = useContext(ThemeContext);
  return (
    <div className={`myContainer theme-${theme}`}>
      <h2>Hi There!</h2>
    </div>
  );
};

export default UseHookWithContext;
