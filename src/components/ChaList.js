import React from "react";
import { useChat } from "../contexts/ChatContext";
import ScrollableFeed from "react-scrollable-feed";

function ChaList() {
  const { chat } = useChat();
  return (
    <div className="chat-list">
      <ScrollableFeed>
        {chat.map((item, i) => (
          <div
            key={i}
            className={`chat-item-container ${item.isFromMe ? "from-me" : ""}`}
          >
            <div className="chat-item">{item.text}{item.time} </div>
          </div>
        ))}
      </ScrollableFeed>
    </div>
  );
}

export default ChaList;
