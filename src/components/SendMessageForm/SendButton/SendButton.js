import React from "react";

import "./SendButton.sass";

const SendButton = props => {
  let newMessageElement = React.createRef();

  let addMessage = () => {
    let text = newMessageElement.current.value;
    props.addPost(text);
    
  };
  let onPostChange = () =>{
    let text = newMessageElement.current.value;
    props.updateNewPostText(text);
    
  }
  return (
    <div className="form-input">
      <div className="input-text">
        <textarea
          onChange={onPostChange}
          value={props.newPostText}
          ref={newMessageElement}
          type="text"
          placeholder="Type something..."
          className="input-txt"
        />
      </div>
      <div className="input-button">
        <input
          type="submit"
          value="Send"
          className="input-btn"
          onClick={addMessage}
        />
      </div>
    </div>
  );
};

export default SendButton;
