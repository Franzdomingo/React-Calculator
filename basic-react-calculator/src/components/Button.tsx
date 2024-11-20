import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  variant?: 'default' | 'operator' | 'equals';
}

const Button = ({ value, variant = 'default', ...props }: ButtonProps) => {
  const baseStyles = "w-full h-14 text-lg font-medium transition-all duration-200 border border-black dark:border-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white";
  
  const variants = {
    default: "bg-white dark:bg-black text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900",
    operator: "bg-black dark:bg-white text-white dark:text-black hover:bg-gray-900 dark:hover:bg-gray-100",
    equals: "bg-black dark:bg-white text-white dark:text-black hover:bg-gray-900 dark:hover:bg-gray-100"
  };

  return (
    <button
      {...props}
      className={`${baseStyles} ${variants[variant]}`}
      aria-label={value}
    >
      {value}
    </button>
  );
};

export default Button; 