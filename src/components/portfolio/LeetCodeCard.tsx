import React from 'react';

const LeetCodeCard: React.FC = () => {
  return (
    <div className="group glass rounded-2xl p-6 transition-all duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-lg font-semibold">LeetCode Progress</h4>
          <p className="text-sm text-foreground/70">Profile snapshot</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold">220</div>
          <div className="text-xs text-foreground/60">Solved</div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="p-3 bg-background/60 rounded-lg">
          <div className="text-sm text-foreground/70">Contest Rating</div>
          <div className="text-lg font-semibold">1,244</div>
        </div>
        <div className="p-3 bg-background/60 rounded-lg">
          <div className="text-sm text-foreground/70">Top</div>
          <div className="text-lg font-semibold">98.78%</div>
        </div>
        <div className="p-3 bg-background/60 rounded-lg">
          <div className="text-sm text-foreground/70">Submissions (1y)</div>
          <div className="text-lg font-semibold">1,525</div>
        </div>
        <div className="p-3 bg-background/60 rounded-lg">
          <div className="text-sm text-foreground/70">Attempts</div>
          <div className="text-lg font-semibold">9</div>
        </div>
      </div>

      <div className="mt-4 text-sm text-foreground/70">See full profile on LeetCode</div>
    </div>
  );
};

export default LeetCodeCard;
