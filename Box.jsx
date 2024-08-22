import React from 'react';

export default function Box({ Heding, Heding1}) {

    return (
        <div className=" text-center   bg-white    ">
            <p className="font-serif py-8   w-[50%] " >{Heding}</p>
            <p className='font-serif  py-3     '>{Heding1}</p>
            
            
            
        </div>
    );
}