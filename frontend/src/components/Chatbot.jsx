import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { text: "🌾 Ask me anything about farming, soil, or crops!", type: "bot" },
  ]);

  const handleMessageChange = (e) => setMessage(e.target.value);

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    const newUserMessage = { role: "user", content: message };
    const systemMessage = {
      role: "system",
      content: "You are a helpful farm assistant.",
    };

    setMessages((prev) => [...prev, { text: message, type: "user" }]);
    setMessage("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [systemMessage, newUserMessage],
        }),
      });

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        { text: data.message.content, type: "bot" },
      ]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        { text: "⚠️ Failed to connect to AI.", type: "bot" },
      ]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 rounded-md">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.3 }}
            className="mt-4 w-80 bg-white rounded-2xl shadow-2xl"
          >
            <div className="p-4 space-y-2 h-64 overflow-y-auto text-sm">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-2 rounded-xl ${
                    msg.type === "bot"
                      ? "bg-green-100"
                      : "bg-gray-200 text-right"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>
            <div className="flex border-t">
              <input
                type="text"
                value={message}
                onChange={handleMessageChange}
                onKeyDown={handleKeyPress}
                className="flex-grow px-4 py-2 focus:outline-none text-sm"
                placeholder="Type your question..."
              />
              <button
                onClick={handleSendMessage}
                className="bg-green-600 text-white px-4 py-2 hover:bg-green-700"
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;
