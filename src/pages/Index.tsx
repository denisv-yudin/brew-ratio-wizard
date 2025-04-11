
import React from 'react';
import BrewCalculator from '@/components/BrewCalculator';
import { Coffee } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-coffee-cream to-coffee-light py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <div className="bg-coffee-dark p-4 rounded-full">
              <Coffee size={32} className="text-coffee-cream" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-coffee-dark mb-2">
            Brew Ratio Wizard
          </h1>
          <p className="text-coffee max-w-md mx-auto">
            Calculate the perfect water-to-coffee ratio for your next brew
          </p>
        </header>
        
        <main>
          <BrewCalculator />
          
          <div className="mt-12 text-center text-coffee-dark/70 text-sm">
            <p>Enter your coffee amount in grams, select your preferred brew ratio,</p>
            <p>and let the Brew Ratio Wizard calculate the perfect water amount for you.</p>
          </div>
        </main>
        
        <footer className="mt-16 text-center text-xs text-coffee-dark/50">
          <p>Made with ♥ for coffee lovers</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
