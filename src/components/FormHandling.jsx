import { useState } from "react";
import "../../styles.css";
import { submitAction } from "../../actions";

const FormHandling = () => {
  const [name, setName] = useState("");
  const [pending, setPending] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setPending(true);
    await submitAction({ name });
    setPending(false);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
      />
      <button className="form-btn" type="submit">
        Submit
      </button>
      {pending && <p>Submitting {name}...</p>}
    </form>
  );
};

export default FormHandling;
