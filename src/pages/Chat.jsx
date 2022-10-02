import React from "react";
import BottomMenu from "../components/BottomMenu";
import Header from "../components/Header";

function Chat() {
  return (
    <div>
      <Header />
      <div className="chats">
        <p>Chat</p>
      </div>
      <BottomMenu />
    </div>
  );
}

export default Chat;
