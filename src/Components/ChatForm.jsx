import React, { useRef } from 'react'

const ChatForm = ({ setChathistory, generateBotResponse, chatHistory }) => {
    const inputRef = useRef()
    const handleSubmit = (e) => {
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();
        if (!userMessage) return
        inputRef.current.value = "";
        //update chat-history with user message
        setChathistory(prev => [...prev, { role: "user", text: userMessage }])
        setTimeout(() => {
            setChathistory(prev => [...prev, { role: "model", text: "Thinking..." }])
            generateBotResponse([...chatHistory, { role: "user", text: userMessage }])
        }, 600);


    }
    return (

        <form action="#" className="chat-form" onSubmit={handleSubmit}>
            <input type="text" ref={inputRef} placeholder='Message...' required className="message-input" />
            <button className="material-symbols-outlined">arrow_upward</button>
        </form>

    )
}

export default ChatForm