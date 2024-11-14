import { useState } from "react";
import UseHookWithContext from "./components/use/UseHookWithContext";
import UseHookWithPromise from "./components/use/UseHookWithPromise";
import ActionStateComponent from "./components/useActionState/ActionStateComponent";
import UseFormStatusComponent from "./components/useFormStatus/UseFormStatusComponent";
import OptimisticComponent from "./components/useOptimistic/OptimisticComponent";
import "./styles.css";

export default function App() {
  const [activeComponent, setActiveComponent] = useState(null);
  const renderComponent = () => {
    switch (activeComponent) {
      case "UseFormStatusComponent":
        return <UseFormStatusComponent />;
      case "ActionStateComponent":
        return <ActionStateComponent />;
      case "OptimisticComponent":
        return <OptimisticComponent />;
      case "UseHookWithContext":
        return <UseHookWithContext />;
      case "UseHookWithPromise":
        return <UseHookWithPromise />;
      default:
        return <div>Select a component to render</div>;
    }
  };

  return (
    <div>
      <div className="nav-btns">
        <button
          className={
            activeComponent === "UseFormStatusComponent" ? "active" : ""
          }
          onClick={() => setActiveComponent("UseFormStatusComponent")}
        >
          useFormStatus
        </button>
        <button
          className={activeComponent === "ActionStateComponent" ? "active" : ""}
          onClick={() => setActiveComponent("ActionStateComponent")}
        >
          useActionState
        </button>
        <button
          className={activeComponent === "OptimisticComponent" ? "active" : ""}
          onClick={() => setActiveComponent("OptimisticComponent")}
        >
          useOptimistic
        </button>
        <button
          className={activeComponent === "UseHookWithContext" ? "active" : ""}
          onClick={() => setActiveComponent("UseHookWithContext")}
        >
          use API with Context
        </button>
        <button
          className={activeComponent === "UseHookWithPromise" ? "active" : ""}
          onClick={() => setActiveComponent("UseHookWithPromise")}
        >
          use API with Promise
        </button>
      </div>
      <div>{renderComponent()}</div>
    </div>
  );
}
