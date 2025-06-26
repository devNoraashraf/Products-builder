import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ ...rest }: InputProps) => {
  return (
    <input
      {...rest}
      className="w-full p-3 rounded-xl border border-gray-300 shadow-sm 
                 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 
                 transition duration-300 ease-in-out bg-white text-gray-700 placeholder-gray-400"
    />
  );
};

export default Input;
