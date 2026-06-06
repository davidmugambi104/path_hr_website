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
    response: "Hello there! 👋 I'm Sarah Kimani, Senior HR Consultant at BoldPath HR & Business Solutions. I'm here to help you with any HR questions or challenges you might have. What can I assist you with today?",
    confidence: 0.9,
    followUp: ["I can help with recruitment", "Need training solutions?", "HR strategy questions?"]
  },
  'hi': {
    response: "Hi! 👋 I'm Sarah from BoldPath HR. How can I help you with your human resources needs today? Feel free to ask me about our services, pricing, or any HR challenges you're facing.",
    confidence: 0.9,
    followUp: ["Tell me about your organization", "What HR challenges do you face?", "Looking for specific services?"]
  },
  'hey': {
    response: "Hey there! 👋 I'm Sarah, your HR consultant today. I'm excited to help you with your HR needs. What would you like to discuss?",
    confidence: 0.85,
    followUp: ["Services we offer", "Pricing information", "Schedule a consultation"]
  },

  // Services
  'service': {
    response: "We offer comprehensive HR solutions tailored to your organization's needs:\n\n🏢 HR Strategy & Planning\n• Organizational design\n• Workforce planning\n• HR policy development\n\n👥 Talent Acquisition & Recruitment\n• End-to-end recruitment\n• Employer branding\n• Candidate assessment\n\n🎓 Training & Development\n• Leadership programs\n• Skills development\n• Compliance training\n\n📈 Performance Management\n• KPI development\n• Appraisal systems\n• Career planning\n\n💰 Compensation & Benefits\n• Salary benchmarking\n• Benefits design\n• Incentive programs\n\n🌱 Organizational Development\n• Culture transformation\n• Change management\n• Employee engagement\n\nWhich area would you like to explore further?",
    confidence: 0.95,
    followUp: ["HR Strategy details", "Recruitment services", "Training programs"]
  },
  'what do you offer': {
    response: "We offer comprehensive HR solutions tailored to your organization's needs:\n\n🏢 HR Strategy & Planning\n• Organizational design\n• Workforce planning\n• HR policy development\n\n👥 Talent Acquisition & Recruitment\n• End-to-end recruitment\n• Employer branding\n• Candidate assessment\n\n🎓 Training & Development\n• Leadership programs\n• Skills development\n• Compliance training\n\n📈 Performance Management\n• KPI development\n• Appraisal systems\n• Career planning\n\n💰 Compensation & Benefits\n• Salary benchmarking\n• Benefits design\n• Incentive programs\n\n🌱 Organizational Development\n• Culture transformation\n• Change management\n• Employee engagement\n\nWhich area would you like to explore further?",
    confidence: 0.95,
    followUp: ["HR Strategy details", "Recruitment services", "Training programs"]
  },
  'help': {
    response: "I'm here to help! We specialize in solving common HR challenges:\n\n• Finding and retaining top talent\n• Building effective teams\n• Improving workplace culture\n• Developing leadership capabilities\n• Creating fair compensation structures\n• Ensuring legal compliance\n• Managing performance effectively\n\nWhat specific HR challenge is your organization facing?",
    confidence: 0.9,
    followUp: ["Talent retention issues", "Leadership development", "Performance management"]
  },

  // Pricing
  'price': {
    response: "Our pricing is customized based on your organization's size and needs:\n\n💼 Small Business (1-50 employees)\n• Monthly retainer: KSh 50,000 - 100,000\n• Project-based pricing available\n• Includes 10 hours of consulting per month\n\n🏢 Medium Business (51-500 employees)\n• Monthly retainer: KSh 150,000 - 300,000\n• Includes 20 hours of consulting per month\n• Dedicated HR consultant\n\n🏢 Enterprise (500+ employees)\n• Custom packages\n• Strategic HR partnership\n• Dedicated team of consultants\n\nWe also offer à la carte services and fractional HR support. Would you like me to send you our detailed pricing brochure?",
    confidence: 0.95,
    followUp: ["Small business options", "Medium company packages", "Enterprise solutions"]
  },
  'cost': {
    response: "Our pricing is customized based on your organization's size and needs:\n\n💼 Small Business (1-50 employees)\n• Monthly retainer: KSh 50,000 - 100,000\n• Project-based pricing available\n• Includes 10 hours of consulting per month\n\n🏢 Medium Business (51-500 employees)\n• Monthly retainer: KSh 150,000 - 300,000\n• Includes 20 hours of consulting per month\n• Dedicated HR consultant\n\n🏢 Enterprise (500+ employees)\n• Custom packages\n• Strategic HR partnership\n• Dedicated team of consultants\n\nWe also offer à la carte services and fractional HR support. Would you like me to send you our detailed pricing brochure?",
    confidence: 0.95,
    followUp: ["Small business options", "Medium company packages", "Enterprise solutions"]
  },
  'budget': {
    response: "Our pricing is customized based on your organization's size and needs:\n\n💼 Small Business (1-50 employees)\n• Monthly retainer: KSh 50,000 - 100,000\n• Project-based pricing available\n• Includes 10 hours of consulting per month\n\n🏢 Medium Business (51-500 employees)\n• Monthly retainer: KSh 150,000 - 300,000\n• Includes 20 hours of consulting per month\n• Dedicated HR consultant\n\n🏢 Enterprise (500+ employees)\n• Custom packages\n• Strategic HR partnership\n• Dedicated team of consultants\n\nWe also offer à la carte services and fractional HR support. Would you like me to send you our detailed pricing brochure?",
    confidence: 0.95,
    followUp: ["Small business options", "Medium company packages", "Enterprise solutions"]
  },

  // Recruitment
  'recruit': {
    response: "Our talent acquisition services are designed to help you find and hire the right people:\n\n🔍 Recruitment Process\n• Job analysis and description development\n• Sourcing strategies (active & passive)\n• Candidate screening and shortlisting\n• Interview coordination and feedback\n• Reference checks and background verification\n• Offer management and negotiation\n• Onboarding and integration\n\n🎯 Specializations\n• Executive search\n• Technical roles\n• Campus recruitment\n• Remote hiring\n\n📊 Results\n• Average time-to-hire: 30 days (industry avg: 45)\n• Quality of hire improvement: 35%\n• Candidate satisfaction: 4.7/5\n\nWhat positions are you looking to fill, and what's your timeline?",
    confidence: 0.95,
    followUp: ["Executive positions", "Technical roles", "Entry-level hiring"]
  },
  'hire': {
    response: "Our talent acquisition services are designed to help you find and hire the right people:\n\n🔍 Recruitment Process\n• Job analysis and description development\n• Sourcing strategies (active & passive)\n• Candidate screening and shortlisting\n• Interview coordination and feedback\n• Reference checks and background verification\n• Offer management and negotiation\n• Onboarding and integration\n\n🎯 Specializations\n• Executive search\n• Technical roles\n• Campus recruitment\n• Remote hiring\n\n📊 Results\n• Average time-to-hire: 30 days (industry avg: 45)\n• Quality of hire improvement: 35%\n• Candidate satisfaction: 4.7/5\n\nWhat positions are you looking to fill, and what's your timeline?",
    confidence: 0.95,
    followUp: ["Executive positions", "Technical roles", "Entry-level hiring"]
  },
  'talent': {
    response: "Our talent acquisition services are designed to help you find and hire the right people:\n\n🔍 Recruitment Process\n• Job analysis and description development\n• Sourcing strategies (active & passive)\n• Candidate screening and shortlisting\n• Interview coordination and feedback\n• Reference checks and background verification\n• Offer management and negotiation\n• Onboarding and integration\n\n🎯 Specializations\n• Executive search\n• Technical roles\n• Campus recruitment\n• Remote hiring\n\n📊 Results\n• Average time-to-hire: 30 days (industry avg: 45)\n• Quality of hire improvement: 35%\n• Candidate satisfaction: 4.7/5\n\nWhat positions are you looking to fill, and what's your timeline?",
    confidence: 0.95,
    followUp: ["Executive positions", "Technical roles", "Entry-level hiring"]
  },

  // Training
  'train': {
    response: "We offer customized training programs to develop your team's capabilities:\n\n💼 Leadership Development\n• Emerging leaders program\n• Senior management development\n• Change leadership\n• Emotional intelligence\n\n🛠 Technical Skills\n• Digital literacy\n• Industry-specific skills\n• Software training\n• Compliance certifications\n\n🤝 Soft Skills\n• Communication skills\n• Team building\n• Conflict resolution\n• Time management\n\n🎓 Learning Approaches\n• Blended learning (virtual + in-person)\n• Microlearning modules\n• Action learning projects\n• Coaching and mentoring\n\nWhat skills does your team need to develop most?",
    confidence: 0.95,
    followUp: ["Leadership training", "Technical skills", "Soft skills development"]
  },
  'develop': {
    response: "We offer customized training programs to develop your team's capabilities:\n\n💼 Leadership Development\n• Emerging leaders program\n• Senior management development\n• Change leadership\n• Emotional intelligence\n\n🛠 Technical Skills\n• Digital literacy\n• Industry-specific skills\n• Software training\n• Compliance certifications\n\n🤝 Soft Skills\n• Communication skills\n• Team building\n• Conflict resolution\n• Time management\n\n🎓 Learning Approaches\n• Blended learning (virtual + in-person)\n• Microlearning modules\n• Action learning projects\n• Coaching and mentoring\n\nWhat skills does your team need to develop most?",
    confidence: 0.95,
    followUp: ["Leadership training", "Technical skills", "Soft skills development"]
  },
  'learning': {
    response: "We offer customized training programs to develop your team's capabilities:\n\n💼 Leadership Development\n• Emerging leaders program\n• Senior management development\n• Change leadership\n• Emotional intelligence\n\n🛠 Technical Skills\n• Digital literacy\n• Industry-specific skills\n• Software training\n• Compliance certifications\n\n🤝 Soft Skills\n• Communication skills\n• Team building\n• Conflict resolution\n• Time management\n\n🎓 Learning Approaches\n• Blended learning (virtual + in-person)\n• Microlearning modules\n• Action learning projects\n• Coaching and mentoring\n\nWhat skills does your team need to develop most?",
    confidence: 0.95,
    followUp: ["Leadership training", "Technical skills", "Soft skills development"]
  },

  // Contact
  'contact': {
    response: "I'd be happy to connect you with our team! Here are the best ways to reach us:\n\n📞 Phone: 0795959416 (Mon-Fri, 8AM-6PM)\n📧 Email: info@boldpathhrandbusinesssolutions.co.ke\n🌐 Website: www.boldpathhrandbusinesssolutions.co.ke\n📍 Location: Nairobi, Kenya\n\nWe also offer:\n• Free 30-minute consultation calls\n• Site visits for local clients\n• Virtual meetings for remote clients\n\nWould you prefer a call, email, or virtual meeting?",
    confidence: 0.95,
    followUp: ["Schedule a call", "Send an email", "Book virtual meeting"]
  },
  'talk to': {
    response: "I'd be happy to connect you with our team! Here are the best ways to reach us:\n\n📞 Phone: 0795959416 (Mon-Fri, 8AM-6PM)\n📧 Email: info@boldpathhrandbusinesssolutions.co.ke\n🌐 Website: www.boldpathhrandbusinesssolutions.co.ke\n📍 Location: Nairobi, Kenya\n\nWe also offer:\n• Free 30-minute consultation calls\n• Site visits for local clients\n• Virtual meetings for remote clients\n\nWould you prefer a call, email, or virtual meeting?",
    confidence: 0.95,
    followUp: ["Schedule a call", "Send an email", "Book virtual meeting"]
  },
  'consultation': {
    response: "I'd be happy to connect you with our team! Here are the best ways to reach us:\n\n📞 Phone: 0795959416 (Mon-Fri, 8AM-6PM)\n📧 Email: info@boldpathhrandbusinesssolutions.co.ke\n🌐 Website: www.boldpathhrandbusinesssolutions.co.ke\n📍 Location: Nairobi, Kenya\n\nWe also offer:\n• Free 30-minute consultation calls\n• Site visits for local clients\n• Virtual meetings for remote clients\n\nWould you prefer a call, email, or virtual meeting?",
    confidence: 0.95,
    followUp: ["Schedule a call", "Send an email", "Book virtual meeting"]
  },

  // Location
  'location': {
    response: "We're proudly based in Nairobi, Kenya, and serve clients across East Africa:\n\n🏢 Main Office\n• Nairobi, Kenya (Central Business District)\n• Easily accessible location\n• Meeting rooms available for client visits\n\n🌐 Remote Services\n• Virtual consulting across East Africa\n• Video conferencing capabilities\n• Secure document sharing platforms\n\n🚚 On-site Services\n• Available for local clients\n• Travel arrangements for regional clients\n• Blended approach (remote + on-site)\n\nWould you like directions to our office or information about our remote services?",
    confidence: 0.9,
    followUp: ["Office directions", "Remote services", "Regional coverage"]
  },
  'where': {
    response: "We're proudly based in Nairobi, Kenya, and serve clients across East Africa:\n\n🏢 Main Office\n• Nairobi, Kenya (Central Business District)\n• Easily accessible location\n• Meeting rooms available for client visits\n\n🌐 Remote Services\n• Virtual consulting across East Africa\n• Video conferencing capabilities\n• Secure document sharing platforms\n\n🚚 On-site Services\n• Available for local clients\n• Travel arrangements for regional clients\n• Blended approach (remote + on-site)\n\nWould you like directions to our office or information about our remote services?",
    confidence: 0.9,
    followUp: ["Office directions", "Remote services", "Regional coverage"]
  },
  'nairobi': {
    response: "We're proudly based in Nairobi, Kenya, and serve clients across East Africa:\n\n🏢 Main Office\n• Nairobi, Kenya (Central Business District)\n• Easily accessible location\n• Meeting rooms available for client visits\n\n🌐 Remote Services\n• Virtual consulting across East Africa\n• Video conferencing capabilities\n• Secure document sharing platforms\n\n🚚 On-site Services\n• Available for local clients\n• Travel arrangements for regional clients\n• Blended approach (remote + on-site)\n\nWould you like directions to our office or information about our remote services?",
    confidence: 0.9,
    followUp: ["Office directions", "Remote services", "Regional coverage"]
  },

  // Thank you
  'thank': {
    response: "You're very welcome! 😊 I'm glad I could help. Is there anything else about our HR services or solutions that you'd like to know? I'm here to assist with any other questions you might have.",
    confidence: 0.9,
    followUp: ["Ask another question", "Schedule consultation", "Request brochure"]
  },

  // Goodbye
  'bye': {
    response: "Thank you for chatting with us! 👋 Feel free to reach out anytime if you have more questions. Have a wonderful day, and I look forward to helping your organization thrive!\n\nRemember, you can always click this chat icon again if you think of more questions later.",
    confidence: 0.9,
    followUp: []
  },
  'goodbye': {
    response: "Thank you for chatting with us! 👋 Feel free to reach out anytime if you have more questions. Have a wonderful day, and I look forward to helping your organization thrive!\n\nRemember, you can always click this chat icon again if you think of more questions later.",
    confidence: 0.9,
    followUp: []
  },

  // Common HR Questions
  'employee retention': {
    response: "Employee retention is a critical challenge for many organizations. Our approach includes:\n\n🔍 Retention Analysis\n• Exit interview analysis\n• Employee satisfaction surveys\n• Benchmarking against industry standards\n\n🎯 Retention Strategies\n• Competitive compensation packages\n• Career development opportunities\n• Work-life balance initiatives\n• Recognition and reward programs\n• Strong company culture\n\n📊 Our Results\n• Average retention improvement: 40%\n• Reduced turnover costs by 35%\n• Increased employee satisfaction scores\n\nWhat specific retention challenges is your organization facing?",
    confidence: 0.95,
    followUp: ["High turnover in specific departments", "Retention strategies", "Employee satisfaction"]
  },
  'performance management': {
    response: "Effective performance management drives organizational success. Our approach includes:\n\n📋 Performance Framework\n• Clear KPI development\n• Regular check-ins and feedback\n• 360-degree evaluation systems\n• Development planning\n\n📈 Implementation Support\n• Manager training on feedback\n• Performance review system setup\n• Calibration sessions\n• Continuous improvement processes\n\n📊 Results We Achieve\n• 50% improvement in performance review quality\n• 30% increase in employee engagement\n• Better succession planning\n\nWould you like to discuss your current performance management challenges?",
    confidence: 0.95,
    followUp: ["Setting KPIs", "Manager training", "Performance review systems"]
  },
  'workplace culture': {
    response: "Building a positive workplace culture is essential for organizational success. Our approach includes:\n\n🔍 Culture Assessment\n• Employee surveys and focus groups\n• Leadership behavior analysis\n• Values alignment evaluation\n\n🎯 Culture Transformation\n• Values definition and communication\n• Leadership development programs\n• Employee engagement initiatives\n• Recognition and reward systems\n\n📊 Our Impact\n• 45% improvement in culture scores\n• 35% increase in employee retention\n• 25% boost in productivity\n\nWhat aspects of your workplace culture would you like to improve?",
    confidence: 0.95,
    followUp: ["Culture assessment", "Values alignment", "Employee engagement"]
  },
  'hr compliance': {
    response: "HR compliance protects your organization and ensures fair treatment of employees. Our services include:\n\n📋 Compliance Framework\n• Employment law review\n• Policy development and updates\n• Regulatory reporting\n• Training on compliance requirements\n\n🛡 Risk Management\n• Regular compliance audits\n• Incident investigation protocols\n• Documentation systems\n• Legal update monitoring\n\n📊 Our Approach\n• Proactive compliance monitoring\n• Customized policy development\n• Training programs for managers\n• Ongoing support and updates\n\nWhat specific compliance areas concern you most?",
    confidence: 0.95,
    followUp: ["Employment law", "Policy development", "Compliance training"]
  },
  'onboarding': {
    response: "Effective onboarding sets new hires up for success. Our comprehensive approach includes:\n\n📋 Onboarding Process\n• Pre-arrival preparation\n• First-day experience\n• 30-60-90 day integration plan\n• Mentor/buddy programs\n• Regular check-ins\n\n🎯 Onboarding Elements\n• Digital onboarding platforms\n• Role-specific training\n• Company culture orientation\n• Compliance training\n• Performance expectations\n\n📊 Results We Deliver\n• 50% faster time-to-productivity\n• 40% improvement in new hire retention\n• Higher employee satisfaction scores\n\nWhat challenges do you face with your current onboarding process?",
    confidence: 0.95,
    followUp: ["Digital onboarding", "First-day experience", "30-60-90 day plans"]
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
      text: 'Hello! 👋 Welcome to BoldPath HR & Business Solutions. I\'m Sarah Kimani, Senior HR Consultant. How can I help you with your human resources needs today?',
      sender: 'agent',
      timestamp: new Date(Date.now() - 300000), // 5 minutes ago
      status: 'read'
    },
    {
      id: '2',
      text: 'You can ask me about:\n• Our HR services and solutions\n• Pricing and packages\n• Recruitment and talent acquisition\n• Training and development\n• Employee retention strategies\n• Performance management\n• Workplace culture\n• HR compliance\n• Or anything else HR-related!',
      sender: 'agent',
      timestamp: new Date(Date.now() - 240000), // 4 minutes ago
      status: 'read'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [suggestedReplies, setSuggestedReplies] = useState<string[]>([
    "Tell me about your services",
    "How much do you charge?",
    "Help with recruitment",
    "Employee retention tips"
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
          return { ...data, confidence: data.confidence * 0.8 }; // Lower confidence for partial matches
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
    const responseDelay = 1000 + Math.random() * 2000; // Random delay between 1-3 seconds
    
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
        // Fallback response with suggestions
        response = "I appreciate your question about \"" + inputValue + "\". While I don't have specific information on that topic, I can help you with our core HR services. Would you like to know more about:\n\n• Talent Acquisition & Recruitment\n• Training & Development Programs\n• Performance Management Systems\n• Employee Retention Strategies\n• HR Compliance & Policy Development\n• Organizational Culture Transformation\n\nOr feel free to rephrase your question and I'll do my best to assist!";
        followUp = [
          "Talent Acquisition",
          "Training Programs", 
          "Performance Management",
          "Employee Retention"
        ];
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
        // Default suggestions
        setSuggestedReplies([
          "Tell me about your services",
          "How much do you charge?",
          "Help with recruitment",
          "Employee retention tips"
        ]);
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
    // Auto-submit after a short delay
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
        className="w-16 h-16 rounded-full bg-accent shadow-2xl hover:bg-primary transition-all transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-accent/30 flex items-center justify-center"
        aria-label="Open live chat"
      >
        <div className="relative">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          
          {/* Availability indicator */}
          <div className={`absolute -top-1 -right-1 w-5 h-5 rounded-full border-2 border-white ${
            isAvailable ? 'bg-green-500' : 'bg-gray-400'
          }`}></div>
          
          {/* Unread count badge */}
          {unreadCount > 0 && (
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
              {unreadCount > 9 ? '9+' : unreadCount}
            </div>
          )}
        </div>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div 
          className="absolute bottom-20 right-0 w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col"
          style={{ 
            minHeight: '500px',
            maxHeight: '80vh'
          }}
        >
          {/* Chat Header */}
          <div className="bg-primary text-white p-4 flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white text-sm font-bold mr-3">
                SK
              </div>
              <div>
                <h3 className="font-semibold">Sarah Kimani</h3>
                <p className="text-xs opacity-80">Senior HR Consultant</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex flex-col items-end">
                <div className="text-xs flex items-center">
                  <div className="w-2 h-2 rounded-full bg-green-400 mr-1"></div>
                  <span>Online now</span>
                </div>
                <div className="text-xs opacity-80">Replies in 10 mins</div>
              </div>
              <button 
                onClick={closeChat}
                className="text-white hover:text-gray-200 focus:outline-none p-1"
                aria-label="Close chat"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
            {Object.entries(groupedMessages).map(([date, dateMessages]) => (
              <div key={date}>
                <div className="text-center my-3">
                  <span className="inline-block px-3 py-1 bg-gray-200 text-gray-600 text-xs rounded-full">
                    {formatDate(new Date(date))}
                  </span>
                </div>
                {dateMessages.map((message) => (
                  <div 
                    key={message.id} 
                    className={`flex mb-4 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {message.sender === 'agent' && (
                      <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white text-xs font-bold mr-2 flex-shrink-0 mt-1">
                        SK
                      </div>
                    )}
                    <div className="flex flex-col max-w-[80%]">
                      <div 
                        className={`p-3 rounded-2xl shadow-sm ${
                          message.sender === 'user' 
                            ? 'bg-accent text-white rounded-tr-none ml-auto rounded-tl-2xl rounded-br-2xl rounded-bl-2xl' 
                            : 'bg-white text-gray-800 rounded-tl-none rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-2xl'
                        }`}
                      >
                        <p className="text-sm whitespace-pre-line">{message.text}</p>
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
                          <svg className="w-3 h-3 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                        {message.sender === 'user' && message.status === 'read' && (
                          <svg className="w-3 h-3 mr-1 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <div className="flex mb-4">
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white text-xs font-bold mr-2 flex-shrink-0 mt-1">
                      SK
                    </div>
                    <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-2xl">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
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
            <div className="px-4 py-3 border-t border-gray-200 bg-white">
              <div className="flex flex-wrap gap-2">
                {suggestedReplies.map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestedReply(reply)}
                    className="text-xs px-3 py-1.5 bg-accent/10 text-accent hover:bg-accent hover:text-white rounded-full transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {/* Chat Input */}
          <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 bg-white">
            <div className="flex">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about HR services, pricing, recruitment..."
                className="flex-1 border border-gray-300 rounded-l-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-gray-800"
                aria-label="Type your message"
              />
              <button 
                type="submit"
                disabled={!inputValue.trim()}
                className={`px-4 py-3 rounded-r-lg transition-colors flex items-center justify-center ${
                  inputValue.trim() 
                    ? 'bg-accent text-white hover:bg-primary' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Sarah typically replies in 10 minutes
            </p>
          </form>
        </div>
      )}
    </div>
  );
}