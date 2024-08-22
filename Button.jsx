
import React from 'react';

const Button = ({ text, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={"bg-neutral-950 font-bold  text-white rounded-[12px] w-44 gap-8 h-14   mt-4 bg-gradient-to-r from-teal-400 to-blue-500 hover:to-red-500  hover:from-black-500 "}
        >
            {text}
        </button>
    );
};

export default Button;
