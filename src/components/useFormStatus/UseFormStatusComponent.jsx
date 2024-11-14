import { submitAction } from "../../actions";
import { useFormStatus } from "react-dom";
import "../../styles.css";

const Form = () => {
  const { pending, data } = useFormStatus();

  return (
    <div>
      <input type="text" name="username" placeholder="Enter your name" />
      <button className="form-btn" disabled={pending} type="submit">
        Submit
      </button>
      {pending && <p>Submitting {data?.get("username")}...</p>}
    </div>
  );
};

const UseFormStatusComponent = () => {
  return (
    <form
      action={async () => {
        await submitAction();
      }}
    >
      <Form />
    </form>
  );
};

export default UseFormStatusComponent;
