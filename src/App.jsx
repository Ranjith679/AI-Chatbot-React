import React, { useEffect, useRef, useState } from 'react'
import ChatbotIcon from './Components/ChatbotIcon'
import ChatForm from './Components/ChatForm'
import Chatmessage from './Components/Chatmessage'

const App = () => {

  const [chatHistory, setChathistory] = useState([])
  const [showChatbot, setshowChatbot] = useState(true)
  const bodyRef = useRef();
  const updateHistory = (text, isError = false) => {
    setChathistory(prev => [...prev.filter(msg => msg.text !== "Thinking..."), { role: "model", text, isError }])
  }

  const generateBotResponse = async (history) => {
    history = history.map(({ role, text }) => ({ role, parts: [{ text }] }))
    const requestQuery = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: history }),
    }

    try {
      const res = await fetch(import.meta.env.VITE_API_URL, requestQuery);
      const data = await res.json();
      if (!res.ok) throw new Error(data.error.message || "Something went Wrong")
      const geminiResponse = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();
      updateHistory(geminiResponse);

    } catch (e) {
      updateHistory(e.message.true)
    }

    useEffect(() => {
      bodyRef.current.scrollTo({ top: bodyRef.current.scrollHeight, behavoir: "smooth" })
    }, [chatHistory])
  }
  return (
    <div className={`container ${showChatbot ? "show-chatbot" : ""}`}>

      <button onClick={() => setshowChatbot(prev => !prev)} id='chatbot-toggler'>
        <span className="material-symbols-outlined">mode_comment</span>
        <span className="material-symbols-outlined">close</span>
      </button>
      <div className="chatbot-popup">
        {/* Chatbot header */}
        <div className="chat-header">
          <div className="header-info">
            <ChatbotIcon />
            <h2 className='logo-text'>Chatbot</h2>
          </div>
          <button onClick={() => setshowChatbot(prev => !prev)} className="material-symbols-outlined">
            keyboard_arrow_down
          </button>
        </div>
        {/* Chatbot Body */}
        <div ref={bodyRef} className="chat-body" >
          <div className="message bot-message">
            <ChatbotIcon />
            <p className='message-text'>Hey there <br />How can i help you today?</p>
          </div>

          {/* Render the chat dynamically */}
          {chatHistory.map((chat, index) => (<Chatmessage key={index} chat={chat} />))}

        </div>
        {/* chatbot footer */}
        <div className="chat-footer">
          <ChatForm chatHistory={chatHistory} setChathistory={setChathistory} generateBotResponse={generateBotResponse} />
        </div>
      </div>
    </div>
  )
}

export default App