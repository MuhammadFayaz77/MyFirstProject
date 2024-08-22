import React from 'react';
import First_Project from './first_Project';
import Box from './Box';
import Card from './Card';
import Button from './Button';


export default function First_Project_Group() {


    const listItems1 = [
        "Access deals from trusted providers.",
        "Find the best deals with advanced AI",
        "Compare prices to ensure the lowest fares.",
    ];

    const listItems2 = [
        "Click through to trusted booking partners.",
        "Explore a variety of choices on our platform.",
        "Enjoy a streamlined  trusted partners."
    ];

    const listItems3 = [
        "Get cashback on every booking.",
        "Easily monitor your cashback balance.",
        "aximize your savings with every trip you book."
    ];


    return (

        <>
            <div className='container m-auto grid place-items-center p-8 h-auto  w-100'   >

                <h1 className="  text-white font-bold text-4xl  to-indido-500 h-48 w-[100%]  flex justify-center items-center rounded-md bg-[url('/images/he.png')] bg-cover bg-no-repeat bg-center">
                    How it Works?
                </h1>
                <div className='bg-white w-100%]  flex  items-center mt-8 h-80 '>
                    <div className="  gap-8  w-[40%] h-full   " >
                        <First_Project title="Search for flight or hote"
                            paragraph="Use our advanced technology to find the best deals on flights and hotels. Our system compares prices to ensure you get the lowest fares from trusted providers" listItems={listItems1}
                        />
                        <Button
                            text="Explore Deals"
                            onClick={() => console.log('')}
                        />
                        <div>
                        </div>
                    </div>
                    <div className="  w-[40%]   h-[280px] Gap-[32px] p-11 flex justify-center  ml-60 bg-slate-500 rounded-2xl bg-[url('/images/div1.png')] bg-[length:425px_390px] bg-no-repeat bg-center   ">
                        <Box Heding="ScreenRun quick explanation video will come here"
                            Heding1="once the dashboard page is done" />
                    </div>
                </div>
                <div className='bg-white w-[100%] gap-8 flex  items-center mt-8 h-full text-balance '>
                    <div className=" rounded-[10px]    w-[40%] h-[280px] Gap-[32px] p-11 flex justify-center mr-60  bg-slate-500 bg-[url('/images/div3.png')] bg-[length:425px_390px] bg-no-repeat bg-center   ">
                        <Box Heding="ScreenRun quick explanation video will come here" Heding1="once the dashboard page is done" />
                    </div>
                    <div className="  w-[40%] h-full   " >
                        <First_Project title="Complete your booking"
                            paragraph="Book your selected flight or hotel effortlessly. Our secure platform makes the booking process smooth straightforward"
                            listItems={listItems2} />
                        <Button
                            text="  View Offers"
                            onClick={() => console.log('')}
                        />
                    </div>
                </div>
                <div className=' w-[100%]  flex  items-center mt-8 h-80 '>
                    <div className="  gap-8  w-[40%] h-full   " >
                        <First_Project title="Earn Cashback"
                            paragraph="Earn cashback on every booking. Keep track of your earnings and watch your balance increase as you travel." listItems={listItems3} />
                        <Button
                            text="Visit Dashboard"
                            onClick={() => console.log('')}
                        />
                    </div>
                    <div className=" rounded-2xl w-[40%] h-[280px] Gap-[32px] p-11 flex justify-center  ml-60 bg-slate-500 bg-[url('/images/div4.png')]  bg-[length:425px_390px] bg-no-repeat bg-center   ">
                        <Box Heding="ScreenRun quick explanation video will come here" Heding1="once the dashboard page is done" />
                    </div>
                </div>
            </div>
            <div className='w-full  flex bg-slate-900 h-[350px]  gap-11'>
                <div className=" ml-[110px] mt-9 p-11 bg-[url('/images/card1.png')] bg-slate-600 h-[280px]
                 w-[475px]    bg-[length:620px_390px]   bg-no-repeat bg-center rounded-3xl">
                    <Card gaeap="Get Top Travel Fares and Up to 20% Cashback" />
                </div>
                <div className="gap-[32px] mt-9  p-11 bg-[url('/images/card2.png')]  bg-slate-600 
                 bg-[length:620px_390px]   w-[475px] h-[280px] bg-no-repeat bg-center   rounded-3xl">
                    <Card gaeap="Discover Great Deals and Earn Cash back" />
                </div>
            </div>
            <div className="w-[100%] h-auto bg-black">
                <h3 className="flex text-white justify-center items-center ">Have questions or need assistance?</h3>
                <div className="flex text-white justify-center items-center">
                    <button className=" bg-white font-bold text-black  rounded-[12px] w-32 gap-8 h-10 mt-8">Contact Us</button>
                </div>
            </div>
        </>



    );
}


