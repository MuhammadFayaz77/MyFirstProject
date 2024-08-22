import React from 'react';
// pearent component
export default function First_Project({ title, paragraph, listItems }) {

    return (
        <>
        <div className="bg-[#ffffff]  ">
            <h2 className="font-bold " >{title}</h2>
            <p className='font-light mt-2' >{paragraph}</p>
            <div className=" pt-3 ">
                {
                listItems && listItems.map((item, index) => (
                    <li className='pt-3 ' key={index}>{item}</li>
                ))}
            </div>
           
            


           
        </div>
       
        </>
    );
}
