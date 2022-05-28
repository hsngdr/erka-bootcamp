import React, { useState } from "react";
import { useChat } from "../contexts/ChatContext";
import { sendMessage } from "../socketApi";

function Form() {
  const { setChat } = useChat();
  const [text, setText] = useState("");
  const [yaziyor, setYaziyor] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    const current=new Date();
    if (!text) {
      return;
    }
    const time=current.getHours()+":"+current.getMinutes();
    setChat((prev) => [...prev, { text, isFromMe: true ,time:time}]);
    sendMessage(text);
    setText("");
    setYaziyor(false);

  };

  const handleChange=(e) => {
    setText(e.target.value);
    setYaziyor(!yaziyor);
  }
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        
        <input
          className="message"
          value={text}
          onChange={(e) => handleChange(e)}
        />
        <label>{yaziyor?"yaziyor":""}</label>
      </form>
    </div>
  );
}

export default Form;
