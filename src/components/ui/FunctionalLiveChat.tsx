import React, { useState, useEffect, useRef } from 'react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'agent';
  timestamp: Date;
}

export function FunctionalLiveChat(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isAvailable, setIsAvailable] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! 👋 Welcome to BoldPath HR. How can we help you today?',
      sender: 'agent',
      timestamp: new Date(Date.now() - 300000) // 5 minutes ago
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Simulate chat availability based on time
  useEffect(() => {
    const updateAvailability = () => {
      const now = new Date();
      const hour = now.getHours();
      // Available between 8 AM and 6 PM
      const available = hour >= 8 && hour < 18;
      setIsAvailable(available);
    };

    updateAvailability();
    const interval = setInterval(updateAvailability, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  // Simulate incoming messages
  useEffect(() => {
    if (!isOpen && isAvailable) {
      const timer = setTimeout(() => {
        setUnreadCount(prev => prev + 1);
      }, 30000); // Simulate message every 30 seconds when chat is closed
      return () => clearTimeout(timer);
    }
  }, [isOpen, isAvailable, unreadCount]);

  // Scroll to bottom of messages
  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const openChat = () => {
    setIsOpen(true);
    setUnreadCount(0);
  };

  const closeChat = () => {
    setIsOpen(false);
  };

  // Handle sending messages
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (inputValue.trim() === '') return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate agent response after a delay
    setTimeout(() => {
      const agentResponses = [
        "Thanks for your message! Our HR specialists will get back to you shortly.",
        "I understand your inquiry. Let me connect you with the right team member.",
        "Great question! We'll provide you with detailed information shortly.",
        "Thank you for reaching out. We're looking into your request now.",
        "I've noted your interest. Our team will contact you soon to discuss further."
      ];
      
      const randomResponse = agentResponses[Math.floor(Math.random() * agentResponses.length)];
      
      const agentMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: randomResponse,
        sender: 'agent',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, agentMessage]);
      
      // If chat is closed, increment unread count
      if (!isOpen) {
        setUnreadCount(prev => prev + 1);
      }
    }, 1000 + Math.random() * 2000); // Random delay between 1-3 seconds
  };

  // Format time for display
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-30">
      {/* Chat Button */}
      <button
        onClick={openChat}
        className="w-14 h-14 rounded-full bg-accent shadow-lg hover:bg-primary transition-all transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent flex items-center justify-center"
        aria-label="Open live chat"
      >
        <div className="relative">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          
          {/* Availability indicator */}
          <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
            isAvailable ? 'bg-green-500' : 'bg-gray-400'
          }`}></div>
          
          {/* Unread count badge */}
          {unreadCount > 0 && (
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {unreadCount > 9 ? '9+' : unreadCount}
            </div>
          )}
        </div>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-full max-w-md bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden dark:bg-gray-800 dark:border-gray-700">
          {/* Chat Header */}
          <div className="bg-primary text-white p-4 flex justify-between items-center">
            <div>
              <h3 className="font-semibold">HR Support Chat</h3>
              <p className="text-xs opacity-80">
                {isAvailable ? 'We\'re online and ready to help!' : 'Leave a message and we\'ll get back to you'}
              </p>
            </div>
            <button 
              onClick={closeChat}
              className="text-white hover:text-gray-200 focus:outline-none"
              aria-label="Close chat"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Chat Messages */}
          <div className="h-64 p-4 overflow-y-auto bg-gray-50 dark:bg-gray-700">
            <div className="space-y-3">
              {messages.map((message) => (
                <div 
                  key={message.id} 
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`p-3 rounded-lg max-w-xs shadow-sm ${
                      message.sender === 'user' 
                        ? 'bg-accent text-white rounded-tr-none' 
                        : 'bg-white rounded-tl-none dark:bg-gray-600'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p 
                      className={`text-xs mt-1 ${
                        message.sender === 'user' ? 'text-accent-light' : 'text-gray-500 dark:text-gray-400'
                      }`}
                    >
                      {formatTime(message.timestamp)}
                    </p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>
          
          {/* Chat Input */}
          <form onSubmit={handleSendMessage}>
            <div className="p-4 border-t border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
              <div className="flex">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  aria-label="Type your message"
                />
                <button 
                  type="submit"
                  disabled={!inputValue.trim()}
                  className={`px-4 py-2 rounded-r-lg transition-colors flex items-center justify-center ${
                    inputValue.trim() 
                      ? 'bg-accent text-white hover:bg-primary' 
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed dark:bg-gray-600 dark:text-gray-400'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center dark:text-gray-400">
                {isAvailable ? 'Typically replies in a few minutes' : 'We\'ll respond during business hours (8AM-6PM)'}
              </p>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}