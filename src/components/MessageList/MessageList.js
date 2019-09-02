import React from "react";

import "./MessageList.sass";

const MessageList = props => {
  let dialogElement = props.data.map(d => {
    return (
      <div className="sent">
        <div className="data">{d.created_at}</div>
        <div className="dialogs">
          <div className="message-avatar">
            <img src={d.avatar} alt="" className="d-item" />
          </div>
          <div className="message-content">
            <h4 className="message-name">{d.user}</h4>
            <p className="message-messages">{d.message}</p>
          </div>
        </div>
        <div className="fa-com">
          <i className="far fa-heart"></i>
          <i className="fas fa-backspace"></i>
        </div>
      </div>
    );
  });
  const DialogItem = props => {
    return dialogElement;
  };

  return (
    <div className="container">
      <DialogItem />

      <div className="inbox">
        <div className="data">2019-08-18 10:23:00</div>
        <div className="answers">
          <div className="message-avatar"></div>
          <div className="message-content">
            <h4 className="message-name">Taylor</h4>
            <p className="message-messages white">
              I have! Let’s discuss it:`)`
            </p>
          </div>
        </div>
        <i className="far fa-edit"></i>
      </div>
    </div>
  );
};

export default MessageList;
