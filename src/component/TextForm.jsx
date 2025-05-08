import React, { useState } from "react";

const TextForm = (props) => {
  const handleUpClick = () => {
    // console.log("UpperCase was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    // console.log("UpperCase was Clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    // console.log("UpperCase was Clicked" + text);
    let newText = "";
    let newTitle = "";
    setTitle(newTitle);
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };

  const handleOnChanget = (event) => {
    // console.log("On Change");
    setTitle(event.target.value);
  };

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>

        <div className="input-group">
          <textarea
            className="form-control my-2"
            value={title}
            onChange={handleOnChanget}
            id="myBox"
            rows="1"
          ></textarea>
        </div>

        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>

        <button className="btn btn-primary my-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>

        <button className="btn btn-primary mx-3 my-1" onClick={handleLoClick}>
          Convert to LowerCase
        </button>

        <button
          className="btn btn-primary mx-3 my-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
      </div>

      <div className="container my-2">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} Words and {text.length} Character
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>

        <h2>Preview</h2>
        <h4> Topic : {title}</h4>
        <pre>{text}</pre>
      </div>
    </>
  );
};

export default TextForm;
