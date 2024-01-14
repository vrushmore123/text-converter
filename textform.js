import React, { useState } from "react";

// import App from "./App";

export default function TextForm(props) {
  //state hooks
  const [text, setText] = useState("Enter text here");
  const [replacementWord, setReplacementWord] = useState("");
  const [updatedText, setUpdatedText] = useState("");
  
  

  //   // to handle click events
  const handleUpClick = () => {
    // console.log("uppercase clicked"+text);
    let newText = text.toUpperCase();
    setText(newText)
    
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    
  };

  const handleWo3Click = ({ Text, searchSubstring, replacementWord }) => {
    // Use the replace method to find and replace the substring
    // const Text= Text.replace(searchSubstring, replacementWord);
  }

  const handleClClick = () => {
    setText("");
    
  };

  const handleCoClick = () => {
   var text = document.getElementById("myBox");
   text.select();
   text.setSelectionRange(0,9999);
   navigator.clipboard.writeText(text.value);
   
  };

  const handleReClick = () => {
    let newText = text.replace(/\s+/g, " ");
    setText(newText);
  };

  // to handle change event if we make changes
  const handleOnChange = (event) => {
    // console.log("onChange clicked");
    setText(event.target.value);
  };
  const handleWoChange = (event) => {
    // console.log("onChange clicked");
    setReplacementWord(event.target.value);
  };
  const handleWo2Change = (event) => {
    // console.log("onChange clicked");
    setUpdatedText(event.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "#212529" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
            }}
            id="myBox"
            rows={8}
          />
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClClick}>
          Clear text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCoClick}>
          Copy text
        </button>
        <button className="btn btn-primary " onClick={handleReClick}>
          Remove extra spaces
        </button>

        <div
          className="container my-3 "
          style={{ color: props.mode === "light" ? "#212529" : "black" }}
        >
          <h2>Your text summary</h2>
          <p>
            {text.split(" ").length} words and {text.length} characters
          </p>
          <p>{0.008 * text.split(" ").length} Minutes read</p>
          <h2>Preview</h2>
          <p>
            {text.length > 0
              ? text
              : "Enter something in textbox to preview it"}
          </p>
        </div>

        {/* text to change */}
        <div className="change-text my-3">
          <form>
            <fieldset disabled="">
              <legend>
                <h2>Replace Word</h2>
              </legend>
              <div className="mb-3">
                <label htmlFor="disabledTextInput" className="form-label">
                  Word to Replace
                </label>
                <input
                  type="text"
                  id="disabledTextInput"
                  className="form-control"
                  value={replacementWord}
                  onChange={handleWoChange}
                  style={{
                    backgroundColor: props.mode === "dark" ? "grey" : "white",
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="disabledSelect" className="form-label">
                  Word to change in
                </label>
                <input
                  type="text"
                  id="disabledTextInput"
                  value={updatedText}
                  className="form-control"
                  onChange={handleWo2Change}
                  style={{
                    backgroundColor: props.mode === "dark" ? "grey" : "white",
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleWo3Click}
              >
                Replace
              </button>
              {/* <div id="result">{replacementWord}</div> */}
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
}
