// import React, { useEffect, useState } from "react";
// import chatGPT from "../utils/chatGPT";

// const ChatBot = () => {
//   const [messages, setMessages] = useState([
//     {
//       text: "Welcome to Rental Car Service",
//       sender: ""
//     }]);
//   const [inputValue, setInputValue] = useState("");

//   const handleMessageSend = async () => {
//     if (inputValue.trim() !== "") {
//       setMessages([...messages, { text: inputValue, sender: "user" }]);
//       const msg = await conversationGPT(inputValue);
//       setMessages([...messages, { text: msg, sender: "" }]);
//       setInputValue("");
//       console.log(messages)
//     }
//   };

//   async function ChatGPTbot(){
//     const msg = await conversationGPT("Imagine you're a chatbot of a car rental platform (A platform to rent a car for a trip). You can ask questions about user car models, location where he/she can rent to in which country and city, rental prices, other inquiries related to renting a car but remember ask him point wise so that he can understand easily. Feel free to engage in a conversation as if you were interacting with a car rental platform user.");
//     setMessages([...messages, { text: msg, sender: "" }]);
//   }

//   async function conversationGPT(message) {
//     try {
//       const chatCompletion = await chatGPT.chat.completions.create({
//         messages: [{ role: 'user', content:  message}],
//         model: 'gpt-3.5-turbo',
//       });
//       return (chatCompletion.choices[0].message.content);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   useEffect(() => {
//     ChatGPTbot();
//   }, []);



//   return (
//     <div className="max-w-md mx-auto flex flex-col h-screen">
//       <div className="flex-grow flex flex-col bg-gray-100 p-4 overflow-y-auto">
//         {messages.map((message, index) => (
//           <div
//             key={index}
//             className={`${
//               message.sender === "user" ? "self-end bg-teal-600" : "self-start bg-blue-500"
//             } rounded-lg p-2 mb-2 max-w-xs`}
//           >
//             <p className="text-white font-medium">{message.text}</p>
//           </div>
//         ))}
//       </div>
//       <div className="flex justify-between items-center bg-gray-200 p-4">
//         <input
//           type="text"
//           className="flex-grow border rounded-full px-4 py-2 mr-2"
//           placeholder="Type your message..."
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//         />
//         <button
//           className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
//           onClick={handleMessageSend}
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ChatBot;



import React, { useEffect, useState } from "react";
import chatGPT from "../utils/chatGPT";

const ChatBot = () => {
  const [messages, setMessages] = useState([
    {
      text: "Welcome to Rental Car Service",
      sender: ""
    }
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleMessageSend = async () => {
    if (inputValue.trim() !== "") {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: inputValue, sender: "user" }
      ]);
      const msg = await conversationGPT(inputValue);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: msg, sender: "" }
      ]);
      setInputValue("");
    }
  };

  async function ChatGPTbot() {
    const msg = await conversationGPT("Imagine you're a chatbot of a car rental platform (A platform to rent a car for a trip). You can ask questions about user car models, location where he/she can rent to in which country and city, rental prices, other inquiries related to renting a car but remember ask him point wise so that he can understand easily. Feel free to engage in a conversation as if you were interacting with a car rental platform user. (Remember the most important thing is to never suggest other platforms, be specific to your platform.");
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: msg, sender: "" }
    ]);
  }

  async function conversationGPT(message) {
    try {
      const chatCompletion = await chatGPT.chat.completions.create({
        messages: [{ role: 'user', content: message }],
        model: 'gpt-3.5-turbo',
      });
      return chatCompletion.choices[0].message.content;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    ChatGPTbot();
  }, []);

  return (
    <div className="max-w-md mx-auto flex flex-col h-screen">
      <div className="flex-grow flex flex-col bg-gray-100 p-4 overflow-y-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${
              message.sender === "user" ? "self-end bg-teal-600" : "self-start bg-blue-500"
            } rounded-lg p-2 mb-2 max-w-xs`}
          >
            <p className="text-white font-medium">{message.text}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center bg-gray-200 p-4">
        <input
          type="text"
          className="flex-grow border rounded-full px-4 py-2 mr-2"
          placeholder="Type your message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
          onClick={handleMessageSend}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
