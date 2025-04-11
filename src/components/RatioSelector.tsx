
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { commonRatios } from '@/lib/calculations';

interface RatioSelectorProps {
  selectedRatio: number;
  onChange: (ratio: number) => void;
}

const RatioSelector: React.FC<RatioSelectorProps> = ({ selectedRatio, onChange }) => {
  return (
    <div className="w-full space-y-2">
      <label htmlFor="ratio-select" className="block text-sm font-medium text-coffee-dark">
        Brew Ratio
      </label>
      <Select
        value={String(selectedRatio)}
        onValueChange={(value) => onChange(Number(value))}
      >
        <SelectTrigger id="ratio-select" className="w-full border-coffee-light bg-coffee-cream text-coffee-dark">
          <SelectValue placeholder="Select a ratio" />
        </SelectTrigger>
        <SelectContent className="bg-coffee-cream border-coffee-light">
          {commonRatios.map((ratio) => (
            <SelectItem 
              key={ratio.value} 
              value={String(ratio.value)} 
              className="text-coffee-dark hover:bg-coffee-light cursor-pointer"
            >
              {ratio.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default RatioSelector;
