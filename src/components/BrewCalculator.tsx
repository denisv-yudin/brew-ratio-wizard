
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import RatioSelector from './RatioSelector';
import ResultDisplay from './ResultDisplay';
import { calculateWater } from '@/lib/calculations';
import { ScaleIcon } from 'lucide-react';

const BrewCalculator: React.FC = () => {
  const [coffeeAmount, setCoffeeAmount] = useState<number>(0);
  const [waterAmount, setWaterAmount] = useState<number>(0);
  const [ratio, setRatio] = useState<number>(15);
  const [inputValue, setInputValue] = useState<string>('');
  const { toast } = useToast();

  const handleCalculate = () => {
    if (!inputValue || parseFloat(inputValue) <= 0) {
      toast({
        title: 'Invalid coffee amount',
        description: 'Please enter a positive number for coffee amount.',
        variant: 'destructive',
      });
      return;
    }

    const coffee = parseFloat(inputValue);
    setCoffeeAmount(coffee);
    const water = calculateWater(coffee, ratio);
    setWaterAmount(water);

    // Here you would save to Firebase
    console.log('Saving to Firebase:', { coffee, water, ratio });
    
    toast({
      title: 'Calculation complete!',
      description: `${coffee}g of coffee with ${water}ml of water (1:${ratio})`,
    });
  };

  return (
    <Card className="w-full max-w-md mx-auto border-coffee-light bg-coffee-cream/50 backdrop-blur-sm">
      <CardHeader className="bg-coffee pb-4 text-white rounded-t-lg">
        <CardTitle className="text-center flex items-center justify-center gap-2">
          <ScaleIcon className="h-6 w-6" />
          Brew Ratio Wizard
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6 space-y-4">
        <div className="space-y-2">
          <label htmlFor="coffee-input" className="block text-sm font-medium text-coffee-dark">
            Coffee Amount (g)
          </label>
          <Input
            id="coffee-input"
            type="number"
            placeholder="Enter coffee amount in grams"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="border-coffee-light bg-white text-coffee-dark placeholder:text-coffee-dark/50"
            step="0.1"
            min="0"
          />
        </div>

        <RatioSelector selectedRatio={ratio} onChange={setRatio} />

        <Button 
          onClick={handleCalculate} 
          className="w-full bg-coffee hover:bg-coffee-dark text-white"
        >
          Calculate Water
        </Button>

        {coffeeAmount > 0 && (
          <ResultDisplay 
            coffeeAmount={coffeeAmount} 
            waterAmount={waterAmount} 
            ratio={ratio} 
          />
        )}
      </CardContent>
    </Card>
  );
};

export default BrewCalculator;
