import { useState } from "react";
import { fetchData } from "../../actions";
import DataContainer from "./DataContainer";

const UseHookWithPromise = () => {
  const [dataPromise, setDataPromise] = useState(null);
  const handleClick = () => {
    setDataPromise(fetchData());
  };
  return (
    <div>
      <button className="form-btn" onClick={handleClick}>
        Get Data
      </button>
      {dataPromise && <DataContainer dataPromise={dataPromise} />}
    </div>
  );
};

export default UseHookWithPromise;
