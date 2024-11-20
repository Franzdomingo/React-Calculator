import Button from './Button';

interface KeypadProps {
  onNumber: (num: string) => void;
  onOperator: (op: string) => void;
  onEquals: () => void;
  onClear: () => void;
}

const Keypad = ({ onNumber, onOperator, onEquals, onClear }: KeypadProps) => {
  return (
    <div className="grid grid-cols-4 gap-2">
      <Button value="7" onClick={() => onNumber('7')} />
      <Button value="8" onClick={() => onNumber('8')} />
      <Button value="9" onClick={() => onNumber('9')} />
      <Button value="÷" variant="operator" onClick={() => onOperator('/')} />
      
      <Button value="4" onClick={() => onNumber('4')} />
      <Button value="5" onClick={() => onNumber('5')} />
      <Button value="6" onClick={() => onNumber('6')} />
      <Button value="×" variant="operator" onClick={() => onOperator('*')} />
      
      <Button value="1" onClick={() => onNumber('1')} />
      <Button value="2" onClick={() => onNumber('2')} />
      <Button value="3" onClick={() => onNumber('3')} />
      <Button value="-" variant="operator" onClick={() => onOperator('-')} />
      
      <Button value="C" onClick={onClear} />
      <Button value="0" onClick={() => onNumber('0')} />
      <Button value="=" variant="equals" onClick={onEquals} />
      <Button value="+" variant="operator" onClick={() => onOperator('+')} />
    </div>
  );
};

export default Keypad; 