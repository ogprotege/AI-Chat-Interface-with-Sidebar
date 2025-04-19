import React from 'react';
export const Header = () => {
  return <div className="max-w-[800px] mx-auto p-4">
      <div className="flex flex-col items-center text-center gap-2">
        <div className="flex items-center gap-3">
          <img src="/chi-ro.png" alt="Chi-Rho" className="h-8 w-8" />
          <h1 className="text-xl font-semibold text-accent-purple">
            ex314.ai | Where Divine Truth Meets Digital Inquiry
          </h1>
        </div>
        <p className="text-sm text-gray-custom max-w-2xl">
          This is a testing space for our Proof of Concept - a Catholic
          theological AI assistant built with React and TypeScript. Guided by
          Exodus 3:14, "I AM WHO I AM," we seek to explore faith through modern
          technology.
        </p>
        <a href="mailto:notapharisee@ex314.ai" className="text-xs text-accent-gold hover:underline">
          notapharisee@ex314.ai
        </a>
      </div>
    </div>;
};