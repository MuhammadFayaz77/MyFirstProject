import React from 'react';

export default function Card({ gaeap }) {

    return (
        <div className='flex justify-center items-center flex-col gap-5'>
            <img src="/images/logo11.svg" alt="" />
            <div className='flex w-[50%] text-center font-bold  text-white'>
                <div className="" >{gaeap}</div>
            </div>
           
                <button className="bg-white font-bold shadow-slate-50 text-black  rounded-[12px] w-32 gap-8 h-10 mt-8   " >View Details</button>
            </div>

       
    );
}