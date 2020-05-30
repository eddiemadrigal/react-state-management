import React, {useState} from "react";

const Message = () => {
    const [message, setMessage] = useState('Hello visitor!')
    function subscribe() {
        setMessage('Thank you for subscribing!');
    }
  return (
    <div>
      <h1>{message}</h1>
      <button onClick={subscribe}>Click to Subscribe</button>
    </div>
  );
};

export default Message;
