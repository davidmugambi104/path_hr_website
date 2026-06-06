import React, { useState, useEffect, useRef } from 'react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'agent';
  timestamp: Date;
  status?: 'sending' | 'delivered' | 'read';
}

interface HRKnowledgeBase {
  [key: string]: {
    response: string;
    confidence: number;
    followUp?: string[];
  };
}

const hrKnowledgeBase: HRKnowledgeBase = {
  // Greetings
  'hello': {
    response: "Hello! 👋 I'm Sarah Kimani, HR Consultant at BoldPath HR. How can I help with your HR needs today?",
    confidence: 0.9,
    followUp: ["Services", "Pricing", "Recruitment", "Training"]
  },
  'hi': {
    response: "Hi there! 👋 I'm Sarah from BoldPath HR. What HR questions can I help you with?",
    confidence: 0.9,
    followUp: ["Services", "Pricing", "Recruitment", "Training"]
  },
  'hey': {
    response: "Hey! 👋 I'm Sarah, your HR consultant today. How can I assist you?",
    confidence: 0.85,
    followUp: ["Services", "Pricing", "Recruitment", "Training"]
  },

  // Services
  'service': {
    response: "We offer:\n• HR Strategy & Planning\n• Talent Acquisition\n• Training & Development\n• Performance Management\n• Compensation & Benefits\n• Organizational Development\n\nWhich area interests you most?",
    confidence: 0.95,
    followUp: ["HR Strategy", "Recruitment", "Training", "Performance"]
  },
  'what do you offer': {
    response: "We offer:\n• HR Strategy & Planning\n• Talent Acquisition\n• Training & Development\n• Performance Management\n• Compensation & Benefits\n• Organizational Development\n\nWhich area interests you most?",
    confidence: 0.95,
    followUp: ["HR Strategy", "Recruitment", "Training", "Performance"]
  },
  'help': {
    response: "I can help with:\n• Finding and retaining talent\n• Building effective teams\n• Improving workplace culture\n• Developing leadership\n• Creating fair compensation\n• Managing performance\n\nWhat's your main HR challenge?",
    confidence: 0.9,
    followUp: ["Talent retention", "Leadership", "Performance", "Culture"]
  },

  // Pricing
  'price': {
    response: "Our pricing:\n\n💼 Small (1-50 employees)\n• KSh 50,000-100,000/month\n\n🏢 Medium (51-500 employees)\n• KSh 150,000-300,000/month\n\n🏢 Enterprise (500+ employees)\n• Custom packages\n\nÀ la carte services also available.",
    confidence: 0.95,
    followUp: ["Small business", "Medium company", "Enterprise", "À la carte"]
  },
  'cost': {
    response: "Our pricing:\n\n💼 Small (1-50 employees)\n• KSh 50,000-100,000/month\n\n🏢 Medium (51-500 employees)\n• KSh 150,000-300,000/month\n\n🏢 Enterprise (500+ employees)\n• Custom packages\n\nÀ la carte services also available.",
    confidence: 0.95,
    followUp: ["Small business", "Medium company", "Enterprise", "À la carte"]
  },
  'budget': {
    response: "Our pricing:\n\n💼 Small (1-50 employees)\n• KSh 50,000-100,000/month\n\n🏢 Medium (51-500 employees)\n• KSh 150,000-300,000/month\n\n🏢 Enterprise (500+ employees)\n• Custom packages\n\nÀ la carte services also available.",
    confidence: 0.95,
    followUp: ["Small business", "Medium company", "Enterprise", "À la carte"]
  },

  // Recruitment
  'recruit': {
    response: "Our recruitment services:\n• Job analysis & description\n• Candidate sourcing\n• Screening & shortlisting\n• Interview coordination\n• Offer management\n• Onboarding\n\nAverage time-to-hire: 30 days\nQuality improvement: 35%",
    confidence: 0.95,
    followUp: ["Executive search", "Technical roles", "Campus hiring"]
  },
  'hire': {
    response: "Our recruitment services:\n• Job analysis & description\n• Candidate sourcing\n• Screening & shortlisting\n• Interview coordination\n• Offer management\n• Onboarding\n\nAverage time-to-hire: 30 days\nQuality improvement: 35%",
    confidence: 0.95,
    followUp: ["Executive search", "Technical roles", "Campus hiring"]
  },
  'talent': {
    response: "Our recruitment services:\n• Job analysis & description\n• Candidate sourcing\n• Screening & shortlisting\n• Interview coordination\n• Offer management\n• Onboarding\n\nAverage time-to-hire: 30 days\nQuality improvement: 35%",
    confidence: 0.95,
    followUp: ["Executive search", "Technical roles", "Campus hiring"]
  },

  // Training
  'train': {
    response: "Our training programs:\n• Leadership Development\n• Technical Skills\n• Soft Skills\n• Compliance Training\n\nApproaches:\n• Virtual & in-person\n• Microlearning\n• Action learning\n• Coaching\n\nWhat skills does your team need?",
    confidence: 0.95,
    followUp: ["Leadership", "Technical", "Soft skills", "Compliance"]
  },
  'develop': {
    response: "Our training programs:\n• Leadership Development\n• Technical Skills\n• Soft Skills\n• Compliance Training\n\nApproaches:\n• Virtual & in-person\n• Microlearning\n• Action learning\n• Coaching\n\nWhat skills does your team need?",
    confidence: 0.95,
    followUp: ["Leadership", "Technical", "Soft skills", "Compliance"]
  },
  'learning': {
    response: "Our training programs:\n• Leadership Development\n• Technical Skills\n• Soft Skills\n• Compliance Training\n\nApproaches:\n• Virtual & in-person\n• Microlearning\n• Action learning\n• Coaching\n\nWhat skills does your team need?",
    confidence: 0.95,
    followUp: ["Leadership", "Technical", "Soft skills", "Compliance"]
  },

  // Contact
  'contact': {
    response: "Contact us:\n📞 0795959416 (Mon-Fri, 8AM-6PM)\n📧 info@boldpathhrandbusinesssolutions.co.ke\n📍 Nairobi, Kenya\n\nWe offer:\n• Free 30-min consultations\n• Virtual meetings\n• Site visits (local clients)\n\nPrefer a call or email?",
    confidence: 0.95,
    followUp: ["Schedule call", "Send email", "Virtual meeting"]
  },
  'talk to': {
    response: "Contact us:\n📞 0795959416 (Mon-Fri, 8AM-6PM)\n📧 info@boldpathhrandbusinesssolutions.co.ke\n📍 Nairobi, Kenya\n\nWe offer:\n• Free 30-min consultations\n• Virtual meetings\n• Site visits (local clients)\n\nPrefer a call or email?",
    confidence: 0.95,
    followUp: ["Schedule call", "Send email", "Virtual meeting"]
  },
  'consultation': {
    response: "Contact us:\n📞 0795959416 (Mon-Fri, 8AM-6PM)\n📧 info@boldpathhrandbusinesssolutions.co.ke\n📍 Nairobi, Kenya\n\nWe offer:\n• Free 30-min consultations\n• Virtual meetings\n• Site visits (local clients)\n\nPrefer a call or email?",
    confidence: 0.95,
    followUp: ["Schedule call", "Send email", "Virtual meeting"]
  },

  // Location
  'location': {
    response: "📍 Nairobi, Kenya (CBD)\n🌐 Remote services across East Africa\n🚚 On-site visits for local clients\n\nVirtual meetings available for all clients\nSecure video conferencing platforms\n\nNeed directions or info about remote services?",
    confidence: 0.9,
    followUp: ["Directions", "Remote services", "Regional coverage"]
  },
  'where': {
    response: "📍 Nairobi, Kenya (CBD)\n🌐 Remote services across East Africa\n🚚 On-site visits for local clients\n\nVirtual meetings available for all clients\nSecure video conferencing platforms\n\nNeed directions or info about remote services?",
    confidence: 0.9,
    followUp: ["Directions", "Remote services", "Regional coverage"]
  },
  'nairobi': {
    response: "📍 Nairobi, Kenya (CBD)\n🌐 Remote services across East Africa\n🚚 On-site visits for local clients\n\nVirtual meetings available for all clients\nSecure video conferencing platforms\n\nNeed directions or info about remote services?",
    confidence: 0.9,
    followUp: ["Directions", "Remote services", "Regional coverage"]
  },

  // Thank you
  'thank': {
    response: "You're welcome! 😊 Is there anything else I can help with?",
    confidence: 0.9,
    followUp: ["Another question", "Schedule consultation", "Request brochure"]
  },

  // Goodbye
  'bye': {
    response: "Thanks for chatting! 👋 Reach out anytime if you have more questions. Have a great day!",
    confidence: 0.9,
    followUp: []
  },
  'goodbye': {
    response: "Thanks for chatting! 👋 Reach out anytime if you have more questions. Have a great day!",
    confidence: 0.9,
    followUp: []
  },

  // Common HR Questions
  'employee retention': {
    response: "Employee retention strategies:\n• Competitive compensation\n• Career development\n• Work-life balance\n• Recognition programs\n• Strong company culture\n\nOur results:\n• 40% retention improvement\n• 35% reduced turnover costs\n• Higher satisfaction scores",
    confidence: 0.95,
    followUp: ["Turnover issues", "Retention strategies", "Satisfaction"]
  },
  'performance management': {
    response: "Performance management approach:\n• Clear KPI development\n• Regular check-ins\n• 360° evaluations\n• Development planning\n\nOur results:\n• 50% better review quality\n• 30% higher engagement\n• Improved succession planning",
    confidence: 0.95,
    followUp: ["Setting KPIs", "Manager training", "Review systems"]
  },
  'workplace culture': {
    response: "Workplace culture transformation:\n• Culture assessment\n• Values definition\n• Leadership development\n• Engagement initiatives\n• Recognition systems\n\nOur impact:\n• 45% culture score improvement\n• 35% retention boost\n• 25% productivity increase",
    confidence: 0.95,
    followUp: ["Culture assessment", "Values alignment", "Engagement"]
  },
  'hr compliance': {
    response: "HR compliance services:\n• Employment law review\n• Policy development\n• Regulatory reporting\n• Compliance training\n\nOur approach:\n• Proactive monitoring\n• Custom policies\n• Manager training\n• Ongoing support",
    confidence: 0.95,
    followUp: ["Employment law", "Policy development", "Compliance training"]
  },
  'onboarding': {
    response: "Effective onboarding process:\n• Pre-arrival preparation\n• First-day experience\n• 30-60-90 day plan\n• Mentor programs\n• Regular check-ins\n\nOur results:\n• 50% faster productivity\n• 40% retention improvement\n• Higher satisfaction",
    confidence: 0.95,
    followUp: ["Digital onboarding", "First-day", "30-60-90 plans"]
  }
};

export function FunctionalLiveChat(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isAvailable] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hi! 👋 I\'m Sarah, your HR consultant. How can I help you today?',
      sender: 'agent',
      timestamp: new Date(Date.now() - 300000),
      status: 'read'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [suggestedReplies, setSuggestedReplies] = useState<string[]>([
    "Services", "Pricing", "Recruitment", "Training"
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scroll to bottom of messages
  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, isTyping]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const openChat = () => {
    setIsOpen(true);
    setUnreadCount(0);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 300);
  };

  const closeChat = () => {
    setIsOpen(false);
  };

  // Enhanced keyword matching function
  const findBestMatch = (userMessage: string): { response: string; confidence: number; followUp?: string[] } | null => {
    const lowerMessage = userMessage.toLowerCase().trim();
    
    // Direct keyword matches
    for (const [keyword, data] of Object.entries(hrKnowledgeBase)) {
      if (lowerMessage.includes(keyword)) {
        return data;
      }
    }
    
    // Partial matches for longer messages
    if (lowerMessage.length > 10) {
      for (const [keyword, data] of Object.entries(hrKnowledgeBase)) {
        if (lowerMessage.split(' ').some(word => keyword.includes(word) || word.includes(keyword))) {
          return { ...data, confidence: data.confidence * 0.8 };
        }
      }
    }
    
    return null;
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
      timestamp: new Date(),
      status: 'sending'
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Update message status to delivered
    setTimeout(() => {
      setMessages(prev => prev.map(msg => 
        msg.id === userMessage.id ? {...msg, status: 'delivered'} : msg
      ));
    }, 500);

    // Show typing indicator
    setIsTyping(true);

    // Simulate agent response after a delay
    const responseDelay = 800 + Math.random() * 1500;
    
    setTimeout(() => {
      setIsTyping(false);
      
      // Update user message status to read
      setMessages(prev => prev.map(msg => 
        msg.id === userMessage.id ? {...msg, status: 'read'} : msg
      ));
      
      // Generate context-aware response
      const match = findBestMatch(inputValue);
      
      let response: string;
      let followUp: string[] = [];
      
      if (match && match.confidence > 0.7) {
        response = match.response;
        followUp = match.followUp || [];
      } else if (match) {
        response = `I understand you're asking about "${inputValue}". ${match.response}`;
        followUp = match.followUp || [];
      } else {
        response = "I can help with our HR services. Try asking about:\n• Services & solutions\n• Pricing & packages\n• Recruitment & talent\n• Training & development\n• Employee retention\n• Performance management";
        followUp = ["Services", "Pricing", "Recruitment", "Training"];
      }
      
      const agentMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'agent',
        timestamp: new Date(),
        status: 'delivered'
      };

      setMessages(prev => [...prev, agentMessage]);
      
      // Set suggested replies based on context
      if (followUp.length > 0) {
        setSuggestedReplies(followUp.slice(0, 4));
      } else {
        setSuggestedReplies(["Services", "Pricing", "Recruitment", "Training"]);
      }
      
      // If chat is closed, increment unread count
      if (!isOpen) {
        setUnreadCount(prev => prev + 1);
      }
    }, responseDelay);
  };

  // Handle suggested reply click
  const handleSuggestedReply = (reply: string) => {
    setInputValue(reply);
    setTimeout(() => {
      const form = document.querySelector('form');
      if (form) {
        const event = new Event('submit', { cancelable: true, bubbles: true });
        form.dispatchEvent(event);
      }
    }, 300);
  };

  // Format time for display
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Format date for display
  const formatDate = (date: Date) => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
    }
  };

  // Group messages by date
  const groupMessagesByDate = () => {
    const grouped: { [key: string]: Message[] } = {};
    
    messages.forEach(message => {
      const dateKey = message.timestamp.toDateString();
      if (!grouped[dateKey]) {
        grouped[dateKey] = [];
      }
      grouped[dateKey].push(message);
    });
    
    return grouped;
  };

  const groupedMessages = groupMessagesByDate();

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Button */}
      <button
        onClick={openChat}
        className="w-14 h-14 rounded-full bg-accent shadow-xl hover:bg-primary transition-all transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-accent/30 flex items-center justify-center"
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
        <div 
          className="absolute bottom-16 right-0 w-80 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden flex flex-col"
          style={{ 
            minHeight: '400px',
            maxHeight: '70vh'
          }}
        >
          {/* Chat Header */}
          <div className="bg-primary text-white p-3 flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white text-xs font-bold mr-2">
                SK
              </div>
              <div>
                <h3 className="font-semibold text-sm">Sarah Kimani</h3>
                <p className="text-xs opacity-80">HR Consultant</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex flex-col items-end">
                <div className="text-xs flex items-center">
                  <div className="w-2 h-2 rounded-full bg-green-400 mr-1"></div>
                  <span className="text-xs">Online</span>
                </div>
              </div>
              <button 
                onClick={closeChat}
                className="text-white hover:text-gray-200 focus:outline-none p-1"
                aria-label="Close chat"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-3 bg-gray-50">
            {Object.entries(groupedMessages).map(([date, dateMessages]) => (
              <div key={date}>
                <div className="text-center my-2">
                  <span className="inline-block px-2 py-1 bg-gray-200 text-gray-600 text-xs rounded-full">
                    {formatDate(new Date(date))}
                  </span>
                </div>
                {dateMessages.map((message) => (
                  <div 
                    key={message.id} 
                    className={`flex mb-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {message.sender === 'agent' && (
                      <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-white text-xs font-bold mr-2 flex-shrink-0 mt-1">
                        SK
                      </div>
                    )}
                    <div className="flex flex-col max-w-[75%]">
                      <div 
                        className={`p-2 rounded-xl shadow-sm text-sm ${
                          message.sender === 'user' 
                            ? 'bg-accent text-white rounded-tr-none ml-auto rounded-tl-xl rounded-br-xl rounded-bl-xl' 
                            : 'bg-white text-gray-800 rounded-tl-none rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-bl-xl'
                        }`}
                      >
                        <p className="whitespace-pre-line">{message.text}</p>
                      </div>
                      <div 
                        className={`text-xs mt-1 flex items-center ${
                          message.sender === 'user' ? 'text-accent-100 justify-end' : 'text-gray-500 justify-start'
                        }`}
                      >
                        {message.sender === 'user' && message.status === 'sending' && (
                          <span className="mr-1">Sending...</span>
                        )}
                        {message.sender === 'user' && message.status === 'delivered' && (
                          <svg className="w-2.5 h-2.5 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                        {message.sender === 'user' && message.status === 'read' && (
                          <svg className="w-2.5 h-2.5 mr-1 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        )}
                        <span>{formatTime(message.timestamp)}</span>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex mb-3">
                    <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-white text-xs font-bold mr-2 flex-shrink-0 mt-1">
                      SK
                    </div>
                    <div className="bg-white p-2 rounded-xl rounded-tl-none shadow-sm">
                      <div className="flex space-x-1">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
            ))}
          </div>
          
          {/* Suggested Replies */}
          {suggestedReplies.length > 0 && (
            <div className="px-3 py-2 border-t border-gray-200 bg-white">
              <div className="flex flex-wrap gap-1.5">
                {suggestedReplies.map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestedReply(reply)}
                    className="text-xs px-2 py-1 bg-accent/10 text-accent hover:bg-accent hover:text-white rounded-full transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {/* Chat Input */}
          <form onSubmit={handleSendMessage} className="p-3 border-t border-gray-200 bg-white">
            <div className="flex">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about HR services..."
                className="flex-1 border border-gray-300 rounded-l-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-gray-800"
                aria-label="Type your message"
              />
              <button 
                type="submit"
                disabled={!inputValue.trim()}
                className={`px-3 py-2 rounded-r-lg transition-colors flex items-center justify-center ${
                  inputValue.trim() 
                    ? 'bg-accent text-white hover:bg-primary' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-1 text-center">
              Replies in ~10 mins
            </p>
          </form>
        </div>
      )}
    </div>
  );
}