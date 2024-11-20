'use client';

import { useState, useCallback, useEffect } from 'react';
import Display from './Display';
import Keypad from './Keypad';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [expression, setExpression] = useState('');
  const [shouldResetDisplay, setShouldResetDisplay] = useState(false);

  const handleNumber = useCallback((num: string) => {
    setDisplay(prev => {
      if (shouldResetDisplay) {
        setShouldResetDisplay(false);
        return num;
      }
      return prev === '0' ? num : prev + num;
    });
  }, [shouldResetDisplay]);

  const handleOperator = useCallback((operator: string) => {
    setShouldResetDisplay(true);
    setExpression(prev => {
      if (prev.includes('=')) {
        return `${display} ${operator}`;
      }
      return `${prev} ${display} ${operator}`.trim();
    });
  }, [display]);

  const handleEquals = useCallback(() => {
    try {
      const result = eval(`${expression} ${display}`);
      setDisplay(String(result));
      setExpression(prev => `${prev} ${display} =`);
      setShouldResetDisplay(true);
    } catch {
      setDisplay('Error');
      setShouldResetDisplay(true);
    }
  }, [display, expression]);

  const handleClear = useCallback(() => {
    setDisplay('0');
    setExpression('');
    setShouldResetDisplay(false);
  }, []);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    const key = event.key;
    if (/[0-9]/.test(key)) {
      handleNumber(key);
    } else if (['+', '-', '*', '/'].includes(key)) {
      handleOperator(key);
    } else if (key === 'Enter' || key === '=') {
      handleEquals();
    } else if (key === 'Escape') {
      handleClear();
    }
  }, [handleNumber, handleOperator, handleEquals, handleClear]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white dark:bg-black border border-black dark:border-white">
      <Display value={display} expression={expression} />
      <Keypad
        onNumber={handleNumber}
        onOperator={handleOperator}
        onEquals={handleEquals}
        onClear={handleClear}
      />
    </div>
  );
};

export default Calculator; 