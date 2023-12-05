import { useRef, useState, useContext } from "react";
import { MyContext } from "../context";

const Initial = () => {
  const context = useContext(MyContext);
  const textInput = useRef();
  const [showNext, setshowNext] = useState(false);
  const [showError, setshowError] = useState(false);

  const handleChange = () => {
    let enoughLong = false;
    textInput.current.value.length >= 5
      ? (enoughLong = true)
      : (enoughLong = false);
    setshowNext(enoughLong);
  };

  const handleSubmit = () => {
    const value = textInput.current.value;

    if (value.length >= 30) {
      setshowError(true);
      return false;
    }

    context.goTo(1);
    context.question(value);
  };

  return (
    <div>
      <h1>Ask a question</h1>
      <input
        ref={textInput}
        onChange={handleChange}
        name="question"
        type="text"
        className="form-control"></input>
      {showNext && (
        <button
          className="btn animate__animated animate__fadeIn"
          onClick={handleSubmit}>
          Next
        </button>
      )}

      {showError && <div className="error">The question is too long !</div>}
    </div>
  );
};

export default Initial;
