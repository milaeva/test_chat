import React from "react";

import "./SendMessageForm.sass";
import SendButton from "./SendButton/SendButton";

const SendMessageForm = props => {
  return (
    <div className="form">
      <div className="container">
        <div className="form-input">
          <SendButton addPost={props.addPost} newPostText={props.newPostText} updateNewPostText={props.updateNewPostText}/>
        </div>
      </div>
    </div>
  );
};

export default SendMessageForm;
