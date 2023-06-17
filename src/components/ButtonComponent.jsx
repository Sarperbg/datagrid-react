import React, { useState } from 'react'

const ButtonComponent = () => {

    const [showMyModal, setShowMyModal] = useState(false)

    return (
        <div className="desc flex justify-end items-center m-4 p-4 ">
               
           <button
							className='w-[175px] h-[42px] m-4 text-white text-md bg-regal-blue items-center
                			cursor-pointer rounded-[39px] font-medium transition-all hover:text-lg
						   hover:bg-hover-blue hover:scale-95  max-lg:text-sm '
							onClick={() => setShowMyModal(true)}>
							+   Yeni bir şey ekle

						</button>
            
        </div>
    )
}

export default ButtonComponent
