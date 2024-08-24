import React from 'react';

const SuspenseLoading = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-background">
      <div className="relative">
        <div className="h-24 w-24 rounded-full border-t-4 border-b-4 border-primary animate-spin"></div>
        <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-4 border-b-4 border-secondary animate-ping"></div>
      </div>
    </div>
  );
};

export default SuspenseLoading;
