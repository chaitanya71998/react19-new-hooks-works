import { useActionState, useEffect } from "react";
import { submitActionWithCurrentState } from "../../actions";
const ActionStateComponent = () => {
  const [state, formAction,isPending] = useActionState(submitActionWithCurrentState, {
    users: [],
    error: null,
  });

  return (
    <form action={formAction} id="action-hook-form">
      <div>
        {isPending&&<span>Updating<br></br></span>}
        <input type="text" name="username" placeholder="Enter your name" />
        <input type="number" name="age" placeholder="Enter age" />
        <button className="form-btn" type="submit">
          Submit
        </button>
      </div>
      <div className="error">{state?.error}</div>
      {state?.users?.map((user) => (
        <div key={user.username}>
          Name: {user.username} Age: {user.age}
        </div>
      ))}
    </form>
  );
};

export default ActionStateComponent;
