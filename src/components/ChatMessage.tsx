import React from 'react';
import type { Message } from '../App';
import { UserIcon, BrainCircuitIcon } from 'lucide-react';
interface ChatMessageProps {
  message: Message;
}
export const ChatMessage = ({
  message
}: ChatMessageProps) => {
  const isUser = message.role === 'user';
  return <div className={`flex gap-6 mb-8 ${isUser ? 'flex-row-reverse' : ''}`}>
      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${isUser ? 'bg-accent-purple text-white shadow-sm' : 'bg-card-bg text-white border border-[#444444]'}`}>
        {isUser ? <UserIcon size={20} /> : <BrainCircuitIcon size={20} />}
      </div>
      <div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} max-w-[80%]`}>
        <div className={`px-4 py-2.5 rounded-xl ${isUser ? 'bg-dark-bg text-white border border-[#383838]' : 'bg-dark-bg border border-[#383838]'}`}>
          <p className="whitespace-pre-wrap leading-relaxed font-[450] text-[15px]">
            {message.content}
          </p>
        </div>
        <span className="text-xs text-gray-custom mt-2 px-2">
          {new Date(message.timestamp).toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit'
        })}
        </span>
      </div>
    </div>;
};