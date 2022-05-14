import React from "react";

function Message({ message, variant }) {
  const removeMessage = () => {};
  return (
    <div className={`message ${variant}`}>
      <p className="message-text">
        {message}
        {/* {variant} */}
      </p>
      <span className="material-icons clear-btn" onClick={removeMessage}>
        clear
      </span>
    </div>
  );
}

export default Message;
