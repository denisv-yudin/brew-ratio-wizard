
import React from 'react';
import { Coffee, Droplets } from 'lucide-react';

interface ResultDisplayProps {
  coffeeAmount: number;
  waterAmount: number;
  ratio: number;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ coffeeAmount, waterAmount, ratio }) => {
  if (coffeeAmount <= 0) return null;

  return (
    <div className="rounded-lg p-6 bg-gradient-to-b from-coffee-dark to-coffee shadow-lg text-white w-full max-w-md mx-auto mt-6">
      <h2 className="text-xl font-semibold mb-2 text-coffee-cream">Your Brew Recipe</h2>
      
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <Coffee className="text-coffee-cream" size={24} />
          <span className="text-sm">Coffee</span>
        </div>
        <span className="text-2xl font-bold text-coffee-cream">{coffeeAmount} g</span>
      </div>
      
      <div className="h-px bg-coffee-accent/30 my-4" />
      
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Droplets className="text-coffee-cream" size={24} />
          <span className="text-sm">Water</span>
        </div>
        <span className="text-2xl font-bold text-coffee-cream">{waterAmount} ml</span>
      </div>
      
      <div className="mt-4 text-xs text-center text-coffee-cream/70">
        Ratio 1:{ratio}
      </div>
      
      <div className="mt-3 flex justify-center">
        <div className="relative w-8 h-8">
          <div className="absolute bottom-0 w-full flex justify-center">
            <div className="w-8 h-4 bg-coffee-cream rounded-t-full"></div>
          </div>
          <div className="absolute bottom-4 left-1.5 w-1 h-1 rounded-full bg-white/70 animate-steam delay-75"></div>
          <div className="absolute bottom-4 left-3 w-1 h-1 rounded-full bg-white/70 animate-steam delay-150"></div>
          <div className="absolute bottom-4 left-4.5 w-1 h-1 rounded-full bg-white/70 animate-steam"></div>
        </div>
      </div>
    </div>
  );
};

export default ResultDisplay;
