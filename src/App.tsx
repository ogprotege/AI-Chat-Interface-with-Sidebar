import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { InitialView } from './components/InitialView';
import { ChatView } from './components/ChatView';
import { Header } from './components/Header';
import { LoginPage } from './components/LoginPage';
export type Message = {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
};
export function App() {
  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState<string | undefined>();
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const handleLogin = (username: string, password: string) => {
    // Simple mock authentication for preview purposes
    if (username === 'demo' && password === 'password') {
      setIsAuthenticated(true);
      setLoginError(undefined);
    } else {
      setLoginError('Invalid username or password. Try demo/password');
    }
  };
  const handleLogout = () => {
    setIsAuthenticated(false);
  };
  const handleSendMessage = async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      role: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
    let aiResponse = "I understand you're asking about that. Let me help you with this.";
    if (content.toLowerCase().includes('hello') || content.toLowerCase().includes('hi')) {
      aiResponse = 'Hello! How can I assist you today?';
    } else if (content.toLowerCase().includes('help')) {
      aiResponse = "I'm here to help! What specific assistance do you need?";
    } else if (content.toLowerCase().includes('thank')) {
      aiResponse = "You're welcome! Is there anything else you'd like to know?";
    } else if (content.length < 10) {
      aiResponse = "Could you please provide more details about what you'd like to know?";
    } else {
      aiResponse = `Thank you for your detailed query. Let me break this down:
1. First, let's consider the main points you've raised.
2. Based on my analysis, I can help you with this specific situation.
3. Would you like me to provide more detailed information about any particular aspect?`;
    }
    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      content: aiResponse,
      role: 'assistant',
      timestamp: new Date()
    };
    setIsLoading(false);
    setMessages(prev => [...prev, assistantMessage]);
  };
  // For preview purposes, show login page
  if (!isAuthenticated) {
    return <LoginPage onLogin={handleLogin} error={loginError} />;
  }
  return <div className="flex flex-col w-full h-screen bg-dark-bg text-white font-segoe">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar isCollapsed={isSidebarCollapsed} onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)} onLogout={handleLogout} />
        <main className="flex-grow flex flex-col h-full overflow-hidden">
          <Header />
          {messages.length === 0 ? <InitialView onSendMessage={handleSendMessage} /> : <ChatView messages={messages} isLoading={isLoading} onSendMessage={handleSendMessage} />}
        </main>
      </div>
    </div>;
}