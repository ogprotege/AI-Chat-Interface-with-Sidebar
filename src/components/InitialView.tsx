import React from 'react';
import { ChatInput } from './ChatInput';
import { Disclaimer } from './Disclaimer';
interface InitialViewProps {
  onSendMessage: (message: string) => void;
}
export const InitialView = ({
  onSendMessage
}: InitialViewProps) => {
  return <div className="flex-grow flex flex-col">
      <div className="flex-grow flex flex-col justify-center items-center p-6 md:p-8 overflow-auto">
        <div className="w-full max-w-[800px] mt-24">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-custom mb-8 flex items-center gap-3 justify-center">
            <img src="/chi-ro.png" alt="Chi-Rho" className="w-12 h-12" />
            <span>How can I help you today?</span>
          </h1>
          <ChatInput onSendMessage={onSendMessage} />
        </div>
      </div>
      <div className="p-4">
        <Disclaimer />
      </div>
    </div>;
};