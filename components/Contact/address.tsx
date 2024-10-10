"use client";
 
 
import React  from "react";
 
const Address  = () => {
    return (
        <div>  
            <h1 className="font-bold text-black pl-12 text-2xl pt-24">Our Office Across Globe.</h1>             
            <div className="flex flex-row">   
                <div className="flex flex-col justify-center md:w-1/2 pl-14 pt-4 ">
                <ul className="mb-6 text-lg text-black">
                    <li>Head Office : China</li>
                    <li style={{ paddingLeft: '7.5rem' }}>China Address</li>
                    <li style={{ paddingLeft: '7.5rem' }}>China Email </li>
                    <li style={{ paddingLeft: '7.5rem' }}>Contact No.</li>
                </ul>
                <ul className="mb-6 text-lg text-black">
                    <li>Hong Kong : </li>
                    <li style={{ paddingLeft: '7.5rem' }}>Hong Kong Address</li>
                    <li style={{ paddingLeft: '7.5rem' }}>Hong Kong Email </li>
                    <li style={{ paddingLeft: '7.5rem' }}>Contact No.</li>
                </ul>
                <ul className="mb-6 text-lg text-black">
                    <li>Dubai :  </li>
                    <li style={{ paddingLeft: '7.5rem' }}>Dubai Address</li>
                    <li style={{ paddingLeft: '7.5rem' }}>Dubai Email </li>
                    <li style={{ paddingLeft: '7.5rem' }}>Contact No.</li>
                </ul>
                <ul className="mb-6 text-lg text-black">
                    <li>Bangladesh :  </li>
                    <li style={{ paddingLeft: '7.5rem' }}>Bangladesh Address</li>
                    <li style={{ paddingLeft: '7.5rem' }}>Bangladesh Email </li>
                    <li style={{ paddingLeft: '7.5rem' }}>Contact No.</li>
                </ul>
                </div>
                <div className="flex flex-col  ">
                <ul className="mb-6 text-lg  text-black pt-4">
                   India
                    <li style={{ paddingLeft: '7.5rem' }}>India Address</li>
                    <li style={{ paddingLeft: '7.5rem' }}>Email Address</li>
                    <li style={{ paddingLeft: '7.5rem' }}>Contact No.</li>
                </ul>  
                <ul className="mb-6 text-lg text-black pt-4">
                     <li style={{ paddingLeft: '7.5rem' }}>India Address</li>
                    <li style={{ paddingLeft: '7.5rem' }}>Email Address</li>
                    <li style={{ paddingLeft: '7.5rem' }}>Contact No.</li>
                </ul>  
                <ul className="mb-6 text-lg text-black pt-4">
                     <li style={{ paddingLeft: '7.5rem' }}>India Address</li>
                    <li style={{ paddingLeft: '7.5rem' }}>Email Address</li>
                    <li style={{ paddingLeft: '7.5rem' }}>Contact No.</li>
                </ul>  
                </div>
            </div>
        </div>
    );
};

export default Address;