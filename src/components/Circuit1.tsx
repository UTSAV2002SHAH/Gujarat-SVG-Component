"use client"

import React, { useState } from 'react';

const Circuit1 = ({ onSelectCircuit }: any) => {
    const [state, setState] = useState(null);


    return (

        <div className='flex flex-row'>
            <div className='flex flex-col min-w-60 w-auto h-full'>
                <div
                    className='flex flex-row text-blue-400 font-semibold font-serif ml-2 mt-2 p-3 cursor-pointer hover:shadow-2xl'
                    onClick={() => { onSelectCircuit("Jain") }}
                >
                    <img src="/Images/Circuits/Jain-Circuits.png" alt="" loading="lazy" />
                    <div className='flex flex-col'>
                        <span className='text-xl'>Jain</span>
                        <span className='text-xl'>Circuit</span>
                    </div>
                </div>

                <div
                    className='flex flex-row text-orange-400 font-semibold font-serif ml-2 p-3 cursor-pointer  hover:shadow-2xl'
                    onClick={() => { onSelectCircuit("Buddhist") }}
                >
                    <img src="/Images/Circuits/Buddhist-Circuits.png" alt="" loading="lazy" />
                    <div className='flex flex-col'>
                        <span className='text-xl'>Buddhist</span>
                        <span className='text-xl'>Circuit</span>
                    </div>
                </div>

                <div
                    className='flex flex-row text-[#6B4226] font-semibold font-serif ml-2 p-3 cursor-pointer hover:shadow-2xl'
                    onClick={() => { onSelectCircuit("Heritage") }}
                >
                    <img src="/Images/Circuits/Monument-Circuits.png" alt="" loading="lazy" />
                    <div className='flex flex-col'>
                        <span className='text-xl'>Heritage</span>
                        <span className='text-xl'>Circuit</span>
                    </div>
                </div>

                <div
                    className='flex flex-row text-yellow-600 font-semibold font-serif ml-2 p-3 cursor-pointer  hover:shadow-2xl'
                    onClick={() => { onSelectCircuit("Aadhyatmik") }}
                >
                    <img src="/Images/Circuits/Adhyatmik-Circuits.png" alt="" loading="lazy" />
                    <div className='flex flex-col'>
                        <span className='text-xl'>Aadhyatmik</span>
                        <span className='text-xl'>Circuit</span>
                    </div>
                </div>

                <div
                    className='flex flex-row text-green-600 font-semibold font-serif ml-2 p-3 cursor-pointer hover:shadow-2xl'
                    onClick={() => { onSelectCircuit("Wildlife") }}
                >
                    <img src="/Images/Circuits/Wlidlife-Circuits.png" alt="" loading="lazy" />
                    <div className='flex flex-col'>
                        <span className='text-xl'>Wildlife</span>
                        <span className='text-xl'>Circuit</span>
                    </div>
                </div>

                <div
                    className='flex flex-row text-cyan-700 font-semibold font-serif ml-2 mb-2 p-3 cursor-pointer hover:shadow-2xl'
                    onClick={() => { onSelectCircuit("Art-Craft") }}>
                    <img src="/Images/Circuits/Craft-Circuits.png" alt="" loading="lazy" />
                    <div className='flex flex-col'>
                        <span className='text-xl'>Art & Craft</span>
                        <span className='text-xl'>Circuit</span>
                    </div>
                </div>
            </div>

            <div className='flex flex-col min-w-60 h-full'>
                <div
                    className='flex flex-row text-purple-800 font-semibold font-serif mr-2 mt-2 p-3 cursor-pointer  border-opacity-50 hover:shadow-2xl'
                    onClick={() => { onSelectCircuit("Krishna") }}>
                    <img src="/Images/Circuits/Krishna-Circuits.png" alt="" loading="lazy" />
                    <div className='flex flex-col'>
                        <span className='text-xl'>krishna</span>
                        <span className='text-xl'>Circuit</span>
                    </div>
                </div>

                <div
                    className='flex flex-row text-[#39659E] font-semibold font-serif mr-2 p-3 cursor-pointer hover:shadow-2xl'
                    onClick={() => { onSelectCircuit("shiv-Shakti") }}>
                    <img src="/Images/Circuits/Buddhist-Circuits.png" alt="" loading="lazy" />
                    <div className='flex flex-col'>
                        <span className='text-xl'>Shiv-Shakti</span>
                        <span className='text-xl'>Circuit</span>
                    </div>
                </div>

                <div
                    className='flex flex-row text-[#6B4226] font-semibold font-serif mr-2 p-3 cursor-pointer hover:shadow-2xl'
                    onClick={() => { onSelectCircuit("Adventure") }}
                >
                    <img src="/Images/Circuits/Adhyatmik-Circuits.png" alt="" loading="lazy" />
                    <div className='flex flex-col'>
                        <span className='text-xl'>Adventure</span>
                        <span className='text-xl'>Circuit</span>
                    </div>
                </div>

                <div
                    className='flex flex-row text-pink-800 font-semibold font-serif mr-2 p-3 cursor-pointer hover:shadow-2xl'
                    onClick={() => { onSelectCircuit("Festivals") }}
                >
                    <img src="/Images/Circuits/Shakti-Pith-Circuits.png" alt="" loading="lazy" />
                    <div className='flex flex-col'>
                        <span className='text-xl'>Festivals</span>
                        <span className='text-xl'>Circuit</span>
                    </div>
                </div>

                <div
                    className='flex flex-row text-[#F1C232] font-semibold font-serif mr-2 p-3 cursor-pointer hover:shadow-2xl'
                    onClick={() => { onSelectCircuit("Nature") }}
                >
                    <img src="/Images/Circuits/Wlidlife-Circuits.png" alt="" loading="lazy" />
                    <div className='flex flex-col'>
                        <span className='text-xl'>Nature & Eco</span>
                        <span className='text-xl'>Circuit</span>
                    </div>
                </div>

                <div
                    className='flex flex-row text-[#D35400] font-semibold font-serif mr-2 mb-2 p-3 cursor-pointer hover:shadow-2xl'
                    onClick={() => { onSelectCircuit("Cuisine") }}
                >
                    <img src="/Images/Circuits/Craft-Circuits.png" alt="" loading="lazy" />
                    <div className='flex flex-col'>
                        <span className='text-xl'>Gujarati </span>
                        <span className='text-xl'>Cuisine</span>
                    </div>
                </div>
            </div>

            <span
                className='w-5 h-5 text-black cursor-pointer'
                onClick={() => { onSelectCircuit("All") }}
            >
                All
            </span>

        </div>

    )

}

export default Circuit1;