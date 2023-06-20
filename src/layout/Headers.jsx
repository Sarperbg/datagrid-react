import RastMobileLogo from '../assets/images/RastMobileLogo.png'
import VectorBe from '../assets/images/VectorBe.png'
import { CiYoutube } from 'react-icons/ci'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'

const Headers = () => {
    return (
        <header>
            <div className='flex flex-wrap ml-12 mr-12 mx-auto items-center justify-between gap-8 m-6 p-6
             max-xs:ml-0 max-xs:text-sm'>


                <div className='flex justify-center items-center m-4 min-w-min max-lg:w-full max-md:w-full'>
                    <img src={RastMobileLogo} alt='' className='object-fit min-w-min flex-wrap
                   max-xs:justify-center max-xs:mx-auto' />
                </div>

                <div className='flex justify-center items-center  '>
                    <nav className='flex text-md gap-16 '>
                        <div className='navbar flex items-center  justify-center gap-28 transition-all
                        max-md:gap-8 max-md:items-center max-md:justify-between max-sm:gap-4
                        max-xxs:text-[12px] max-xxs:text-center'>
                            <ul>
                                <a href="/AboutPage">Hakkımızda</a>
                            </ul>
                            <ul>
                                <a href="/ContestPage">Jüri - Yarışma Yazılımı</a>
                            </ul>
                            <ul>
                                <a href="/NinjaPage">Word Ninja</a>
                            </ul>
                            <ul>
                                <a href="/PyramidsPage">Word Pyramids</a>
                            </ul>
                        </div>

                    </nav>
                </div>


                <div className='flex gap-4 items-center relative min-w-fit  max-lg:w-full max-md:w-full justify-between
                 '>

                    <div className='flex object-contain'>
                        <button 
                        type="button"
                         name="Submit" 
                         className='bg-[#744BFC] rounded-md w-6 h-6'
                         onClick={(e) => {
                            e.preventDefault();
                            window.location.href ='https://www.youtube.com/';
                        }}>
                            <CiYoutube
                                className='w-4 h-4 mx-auto rounded-md bg-white' />


                        </button>

                    </div>

                    <div className='flex object-contain'>

                        <button
                         type="button" 
                         name="Submit" 
                         className='bg-[#744BFC] rounded-md w-6 h-6'
                         onClick={(e) => {
                            e.preventDefault();
                            window.location.href ='https://www.instagram.com/mobilerast/';
                        }}>
                            
                            <AiOutlineInstagram
                                className='w-4 h-4 mx-auto rounded-md bg-white' />
                        </button>
                    </div>

                    <div className='flex object-contain'>
                        <img src={VectorBe} alt='' className='rounded-md w-6 h-6' />

                    </div>

                    <div className='flex object-contain'>
                        <button
                            type="button"
                            name="Submit"
                            className='bg-[#744BFC] rounded-md w-6 h-6'
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.href ='https://www.linkedin.com/company/rastmobile/';
                            }}>
                            <FaLinkedinIn
                                className='w-4 h-4 mx-auto rounded-md text-white' />
                        </button>
                    </div>

                </div>

            </div>


        </header>

    )
}

export default Headers
