import { useOptimistic, useState } from "react";
import { submitTitle } from "../../actions";
const OptimisticComponent = () => {
  const [title, setTitle] = useState("Title");
  const [optimisticTitle, setOptimisticTitle] = useOptimistic(title);
  const [error, setError] = useState(null);
  const pending = title !== optimisticTitle;
  const handleSubmit = async (formData) => {
    setError(null);
    setOptimisticTitle(formData.get("title"));
    try {
      const updatedTitle = await submitTitle(formData);
      setTitle(updatedTitle);
    } catch (e) {
      setError(e);
    }
  };

  console.log(optimisticTitle,"optimisticTitle")
  return (
    <div>
      <h2>{optimisticTitle}</h2>
      <p> {pending && "Updating..."} </p>
      <form action={handleSubmit}>
        <input type="text" name="title" placeholder="Change Title" />
        <button className="form-btn" type="submit" disabled={pending}>
          Submit
        </button>
      </form>
      <div className="error">{error && error}</div>
    </div>
  );
};
export default OptimisticComponent;
