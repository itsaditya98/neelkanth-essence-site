import { useState, useEffect, useRef } from "react";
import { MessageCircle, Send } from "lucide-react";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [started, setStarted] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "👋 Hi there! Please say 'Hi' or 'Hello' to start the chat.",
    },
  ]);
  const [input, setInput] = useState("");
  const chatRef = useRef<HTMLDivElement | null>(null);

  // Neelkanth Color Scheme
  const primaryBlue = "#1E40AF"; // darker blue
  const accentBlue = "#2563EB"; // medium
  const lightBlue = "#EFF6FF"; // light background

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const handleOptionClick = (option: string) => {
    setMessages((prev) => [
      ...prev,
      { from: "user", text: option },
      { from: "bot", text: getBotResponse(option) },
    ]);
  };

  const getBotResponse = (input: string) => {
    const lower = input.toLowerCase();

    if (!started && (lower.includes("hi") || lower.includes("hello"))) {
      setStarted(true);
      return "Welcome to Neelkanth Traders! 🧱\nPlease choose an option below:";
    }

    if (!started)
      return "Please say 'Hi' or 'Hello' to begin chatting with us.";

    if (lower.includes("products"))
      return `Please <a href="#/products" style="color:${accentBlue}; text-decoration:underline;">click here</a> to explore our range of products/construction materials`;
    else if (lower.includes("locate"))
      return (
        "📍 <b>Neelkanth Traders</b><br/>Dadri, Gautam Budh Nagar, U.P., India -201310.<br/><br/>" 
      );
    else if (lower.includes("inquiry") || lower.includes("price"))
      return `For any product inquiry or quotation, please call us at <a href="tel:+919876543210" style="color:${accentBlue}; text-decoration:underline;">+91 98765 43210</a>.`;
    else if (lower.includes("about"))
      return `Please <a href="#/about" style="color:${accentBlue}; text-decoration:underline;">click here</a> to know more about us.`;
    return "Sorry, I couldn’t understand that. Please use one of the options below.";
  };

  const sendMessage = () => {
    if (!input.trim()) return;
    const userText = input.trim();
    setMessages((prev) => [
      ...prev,
      { from: "user", text: userText },
      { from: "bot", text: getBotResponse(userText) },
    ]);
    setInput("");
  };

  return (
    <>
      {/* Floating Label + Chat Button */}
      <div className="fixed bottom-28 right-6 z-50 flex flex-col items-end space-y-2">
        {/* Label */}
        <div
          className="mb-2 px-3 py-1.5 text-sm text-white rounded-full shadow-md animate-fade-in"
          style={{
            backgroundColor: primaryBlue,
            animation: "fadeIn 0.6s ease-in-out",
          }}
        >
          For an inquiry, click here!
        </div>

        {/* Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-700 hover:bg-blue-800 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110"
          aria-label="Chat with Neelkanth Traders"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-40 right-6 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 flex flex-col overflow-hidden animate-fade-in"
          style={{
            fontFamily: "Inter, sans-serif",
            maxHeight: "70vh",
          }}
        >
          {/* Header */}
          <div
            className="text-white p-3 font-semibold text-sm flex justify-between items-center"
            style={{ backgroundColor: primaryBlue }}
          >
            <span>Neelkanth Chat Support</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-lg leading-none hover:opacity-80"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div
            ref={chatRef}
            className="flex-1 overflow-y-auto p-3 text-sm space-y-3 bg-gray-50 scroll-smooth"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.from === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[75%] p-2.5 rounded-xl text-sm whitespace-pre-wrap break-words shadow-sm ${
                    msg.from === "user"
                      ? "text-white rounded-br-none"
                      : "text-gray-800 border border-gray-200 rounded-bl-none"
                  }`}
                  style={{
                    backgroundColor:
                      msg.from === "user" ? accentBlue : lightBlue,
                    lineHeight: "1.4",
                  }}
                  dangerouslySetInnerHTML={{ __html: msg.text }}
                />
              </div>
            ))}
          </div>

          {/* Option Buttons */}
          {started && (
            <div
              className="flex flex-wrap gap-2 p-2 border-t border-gray-200 bg-white justify-center"
              style={{ backgroundColor: lightBlue }}
            >
              <button
                onClick={() => handleOptionClick("Products")}
                className="text-xs px-3 py-1.5 rounded-md bg-white hover:bg-blue-700 hover:text-white border border-gray-300 transition"
              >
                🧱 Product List
              </button>
              <button
                onClick={() => handleOptionClick("Locate Us")}
                className="text-xs px-3 py-1.5 rounded-md bg-white hover:bg-blue-700 hover:text-white border border-gray-300 transition"
              >
                📍 Locate Us
              </button>
              <button
                onClick={() => handleOptionClick("Inquiry & Price Quotation")}
                className="text-xs px-3 py-1.5 rounded-md bg-white hover:bg-blue-700 hover:text-white border border-gray-300 transition"
              >
                📞 Inquiry & Quotation
              </button>
              <button
                onClick={() => handleOptionClick("About Us")}
                className="text-xs px-3 py-1.5 rounded-md bg-white hover:bg-blue-700 hover:text-white border border-gray-300 transition"
              >
                ℹ️ About Us
              </button>
            </div>
          )}

          {/* Input Area */}
          <div className="flex border-t border-gray-200 bg-white items-center">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type a message..."
              className="flex-1 p-2.5 text-sm outline-none bg-transparent text-gray-700 placeholder-gray-400"
            />
            <button
              onClick={sendMessage}
              className="bg-blue-700 hover:bg-blue-800 text-white px-3 py-2 rounded-md mr-2 transition-colors"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
