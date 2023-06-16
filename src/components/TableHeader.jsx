import React from 'react'
import union from '../assets/images/Union.png'
import Vector5 from '../assets/images/Vector5.png'

const TableHeader = () => {

  return (
    <div className=''>

            <div className=''>
                <div className='flex justify-between ml-20 mr-20 mt-12 border b-4' >


                    <div className='search-btn flex border b-5 items-center'>
                        <input
                            className='flex justify-center m-4 w-[380px] h-[42px] rounded-[39px] items-center
                            '
                            placeholder='Search objects...'
                            
                        />
                        <div className='flex bg-white rounded-full border b-5 items-center'>                      
                        <img src={Vector5} alt='' className='bg-blue-400' />           
                        </div>

                        <div className='flex w-[49px] h-[42px] bg-white rounded-[29px] justify-center items-center'>
                            <img src={union} alt=''
                            />

                        </div>

                    </div>

                    <div>
                        <button
                            className='w-[175px] h-[42px] m-4 text-white text-md bg-regal-blue items-center
                cursor-pointer rounded-[39px] font-medium transition-all hover:text-lg hover:bg-hover-blue'
                        >
                            +   Yeni bir şey ekle
                        </button>
                    </div>
                </div>
            </div>


        </div>
  )
}

export default TableHeader
