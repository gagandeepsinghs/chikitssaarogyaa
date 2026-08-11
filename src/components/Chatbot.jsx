import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, User } from 'lucide-react';
import './Chatbot.css';

const INITIAL_MESSAGE = {
  id: '1',
  text: 'Hi there! 👋 I am the Chikitssa Arogyaa assistant. How can I help you today?',
  sender: 'bot'
};

const QUICK_REPLIES = [
  "Book Appointment",
  "Working Hours",
  "Location",
  "Services"
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showFAB, setShowFAB] = useState(true);
  const messagesEndRef = useRef(null);

  const toggleChat = () => setIsOpen(prev => !prev);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 300) {
        setShowFAB(true);
      } else {
        setShowFAB(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isOpen]);

  const generateBotResponse = (userText) => {
    const text = userText.toLowerCase();
    
    if (text.includes('appointment') || text.includes('book')) {
      return "You can book an appointment by clicking the 'Book Appointment' button at the top of the page, or call us directly at +91 99151 61048.";
    } else if (text.includes('time') || text.includes('hours') || text.includes('open')) {
      return "We are open from Monday to Saturday, Morning: 8:00 AM - 1:00 PM and Evening: 5:00 PM - 8:30 PM. Sunday: Morning only.";
    } else if (text.includes('address') || text.includes('location') || text.includes('where')) {
      return "We are located at House No 1048, Sector - 37 B, Chandigarh, India, 160036.";
    } else if (text.includes('doctor') || text.includes('specialist') || text.includes('services')) {
      return "We have specialists in Paediatrics, Gynaecology, Fertility Care, and Child Development. You can see our doctors in the Doctors section!";
    } else {
      return "Thank you for reaching out. Please leave your contact number or call us at +91 99151 61048 for immediate assistance.";
    }
  };

  const handleQuickReply = (text) => {
    const newUserMessage = {
      id: Date.now().toString(),
      text: text,
      sender: 'user'
    };

    setMessages(prev => [...prev, newUserMessage]);
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(newUserMessage.text),
        sender: 'bot'
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1200);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newUserMessage = {
      id: Date.now().toString(),
      text: inputValue.trim(),
      sender: 'user'
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot thinking delay
    setTimeout(() => {
      const botResponse = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(newUserMessage.text),
        sender: 'bot'
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className={`chatbot-wrapper ${(!showFAB && !isOpen) ? 'chatbot-hidden' : ''}`}>
      {/* Floating Action Button */}
      <button 
        className={`chatbot-fab ${isOpen ? 'is-open' : ''}`} 
        onClick={toggleChat}
        aria-label="Open chat"
      >
        <MessageSquare size={28} />
      </button>

      {/* Chat Window */}
      <div className={`chatbot-window ${isOpen ? 'is-open' : ''}`}>
        <div className="chatbot-header">
          <div className="chatbot-header-info">
            <div className="chatbot-avatar">
              <User size={20} color="white" />
            </div>
            <div>
              <h4 className="chatbot-title">Chikitssa Assistant</h4>
              <p className="chatbot-status">Online</p>
            </div>
          </div>
          <button className="chatbot-close-btn" onClick={toggleChat} aria-label="Close chat">
            <X size={20} />
          </button>
        </div>

        <div className="chatbot-messages">
          {messages.map((msg) => (
            <div key={msg.id} className={`message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
          {isTyping && (
            <div className="message bot">
              <div className="typing-indicator">
                <span className="typing-dot"></span>
                <span className="typing-dot"></span>
                <span className="typing-dot"></span>
              </div>
            </div>
          )}
          
          {messages.length === 1 && !isTyping && (
            <div className="quick-replies">
              {QUICK_REPLIES.map((reply) => (
                <button 
                  key={reply} 
                  className="quick-reply-btn"
                  onClick={() => handleQuickReply(reply)}
                >
                  {reply}
                </button>
              ))}
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        <div className="chatbot-input-area">
          <form className="chatbot-input-form" onSubmit={handleSendMessage}>
            <input
              type="text"
              className="chatbot-input"
              placeholder="Type your message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button 
              type="submit" 
              className="chatbot-send-btn"
              disabled={!inputValue.trim() || isTyping}
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
