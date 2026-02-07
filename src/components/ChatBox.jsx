import { useState, useRef, useEffect } from 'react';
import Message from './Message';
import './ChatBox.css';

function ChatBox() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I help you learn by asking questions, not giving answers. What topic are you studying?",
      type: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    const message = inputValue.trim();
    
    if (!message || isLoading) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      text: message,
      type: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch("/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();
      
      // Add AI response
      const aiMessage = {
        id: Date.now() + 1,
        text: data.reply,
        type: 'ai',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error:', error);
      
      const errorMessage = {
        id: Date.now() + 1,
        text: "Sorry, I couldn't process your request. Please make sure the server is running and try again.",
        type: 'ai',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="chat-container">
      <div className="chatbox">
        <div className="chat-header">
          <div className="header-content">
            <span className="status-indicator"></span>
            <span>AI Study Assistant</span>
          </div>
        </div>
        
        <div className="chat-messages">
          {messages.map(message => (
            <Message key={message.id} message={message} />
          ))}
          {isLoading && (
            <div className="loading-container">
              <div className="loading-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <p>Thinking...</p>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        <div className="chat-input-container">
          <input
            ref={inputRef}
            type="text"
            className="chat-input"
            placeholder="Ask a question... (e.g., 'How do I solve quadratic equations?')"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={isLoading}
          />
          <button
            className="send-btn"
            onClick={sendMessage}
            disabled={isLoading || !inputValue.trim()}
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatBox;
