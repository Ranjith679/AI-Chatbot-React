# AI Chatbot

An interactive AI-powered chatbot built using **React.js** that provides real-time responses to user queries. This chatbot integrates with an AI API to generate responses and maintains a chat history for a seamless conversation experience.

## 🚀 Features
- Real-time chat with an AI chatbot
- Smooth UI with a toggleable chatbot popup
- Persistent chat history
- Auto-scroll functionality for chat messages
- Handles errors gracefully

## 🛠️ Technologies Used
- **React.js** (Frontend framework)
- **useState, useEffect, useRef** (React Hooks for state management and DOM manipulation)
- **Fetch API** (For handling API requests)
- **CSS** (For styling the chatbot UI)

## 📂 Project Structure
```
AI-Chatbot/
│── src/
│   ├── Components/
│   │   ├── ChatbotIcon.jsx
│   │   ├── ChatForm.jsx
│   │   ├── Chatmessage.jsx
│   ├── App.js
│   ├── index.js
│── public/
│── .gitignore
│── package.json
│── README.md
```

## 📸 Screenshot 

(Screenshot/Screenshot.jpg)
## 🔧 Installation
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/AI-Chatbot.git
cd AI-Chatbot
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env` file in the root directory and add your AI API URL:
```
VITE_API_URL=your_api_endpoint_here
```

### 4️⃣ Run the Project
```sh
npm run dev
```

## 🖥️ Usage
1. Open the chatbot UI by clicking the **chat icon**.
2. Type a message in the input field and press **Enter**.
3. The chatbot will respond in real-time.
4. Close the chatbot using the **toggle button**.

## 🚀 Deployment (Optional: GitHub Pages)
To deploy the project, you can use GitHub Pages:
```sh
npm install gh-pages --save-dev
npm run deploy
```
Your chatbot will be available at `https://your-username.github.io/AI-Chatbot`

## 🤝 Contributing
Feel free to fork the repository, make improvements, and submit pull requests!

## 📜 License
This project is open-source and available under the **MIT License**.

## 📞 Contact
For any questions or suggestions, feel free to reach out!

