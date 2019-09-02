import React from "react";

import "./App.css";
import Title from "./components/Title/Title";
import MessageList from "./components/MessageList/MessageList";
import SendMessageForm from "./components/SendMessageForm/SendMessageForm";
import Footer from "./components/Footer/Footer";

function App(props) {
  return (
    <div className="App">
      <Title />
      <MessageList data={props.state.data} />
      <SendMessageForm addPost={props.addPost} newPostText={props.state.newPostText} updateNewPostText={props.updateNewPostText}/>
      <Footer />
    </div>
  );
}

export default App;
