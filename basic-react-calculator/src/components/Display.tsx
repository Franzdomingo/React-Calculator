interface DisplayProps {
  value: string;
  expression: string;
}

const Display = ({ value, expression }: DisplayProps) => {
  return (
    <div className="w-full border border-black dark:border-white rounded-none p-4 mb-4 bg-white dark:bg-black">
      <div className="text-right">
        <div className="text-gray-600 dark:text-gray-400 text-sm h-6 overflow-hidden font-mono">
          {expression || '\u00A0'}
        </div>
        <div className="text-3xl font-bold text-black dark:text-white overflow-x-auto font-mono">
          {value || '0'}
        </div>
      </div>
    </div>
  );
};

export default Display; 