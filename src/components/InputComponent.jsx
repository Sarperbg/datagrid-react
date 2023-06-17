import React from 'react'
import union from '../assets/images/Union.png'
import { AiOutlineSearch } from "react-icons/ai"

const InputComponent = () => {
    return (
        <div className="flex items-center m-4 p-4 max-sm:p-0 bg-red-400
          max-sm:justify-between max-lg:justify-center">
            <input
                type="text"
                className="font-light text-gray-700  text-[14px] flex justify-center m-4 w-[380px] h-[42px] rounded-[39px] items-center outline-none focus:border-black border  text-sm px-4 border-gray-300"
            />
            <button className=' max-md:flex-wrap flex relative -left-16 w-[49px] h-[42px] bg-[#744BFC] rounded-tr-2xl	rounded-br-2xl justify-center items-center'>
                <AiOutlineSearch className="w-5 h-5 text-white" />
            </button>



            <button className='flex relative -left-14 w-[49px] h-[42px] bg-white rounded-[29px]
         justify-center items-center min-w-fit max-sm:hidden'>
                <img src={union} alt='' />

            </button>

        </div>
    )
}

export default InputComponent
