import React from 'react';

const Loading = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <div className="flex items-center space-x-2">
        <div className="h-4 w-4 animate-bounce delay-300 rounded-full bg-rose-500" />
        <div className="h-4 w-4 animate-bounce delay-150 rounded-full bg-emerald-500" />
        <div className="h-4 w-4 animate-bounce rounded-full bg-cyan-500" />
      </div>
    </div>
  );
};

export default Loading;


{/* <div className="flex h-screen w-full flex-col items-center justify-center gap-6 bg-gray-100">
      <div className="flex flex-col items-center justify-center">
        <div className="relative h-12 w-12 animate-spin rounded-full border-4 border-gray-400 border-t-transparent mb-4" />
        <div className="flex">
          <span className="text-xl font-medium text-gray-700">Loading</span>
          <span className="text-xl font-medium text-gray-700">
            {'.'.repeat(dots)}
          </span>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <div className="h-3 w-3 animate-bounce rounded-full bg-gray-400" />
        <div className="h-3 w-3 animate-bounce delay-150 rounded-full bg-gray-500" />
        <div className="h-3 w-3 animate-bounce delay-300 rounded-full bg-gray-600" />
      </div>
    </div> */}