import React from "react";

import "./Title.sass";
import UsersCount from "./UsersCount/UsersCount";
import MessagesCount from "./MessagesCount/MessagesCount";
import LastMessage from "./LastMessage/LastMessage";

const Title = () => {
  return (
    <div className="h-top">
      <header className="header">
        <div className="container">
          <div className="top">
            <div className="header-logo">
              <p className="logo">My Chat</p>
              <div className="counts">
                <UsersCount />
                <MessagesCount />
              </div>
            </div>
            <LastMessage />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Title;
