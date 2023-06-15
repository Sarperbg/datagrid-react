import { Link, NavLink } from 'react-router-dom'
import RastMobileLogo from '../assets/images/RastMobileLogo.png'
import VectorIn from '../assets/images/VectorIn.png'
import VectorBe from '../assets/images/VectorBe.png'
import Rectangle1 from '../assets/images/Rectangle 1.png'
import Rectangle2 from '../assets/images/Rectangle 2.png'
import { CiYoutube } from 'react-icons/ci'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'

const Headers = () => {
    return (
        <header className=''>
            <div className='flex flex-wrap items-center justify-between gap-8 border b-2 m-6 p-6'>


                <div className='flex justify-center items-center ml-24 min-w-min'>
                    <img src={RastMobileLogo} alt='' className='object-fit border b-2 min-w-min 
                    flex-wrap' />
                </div>

                <div className='flex justify-center items-center border b-5'>
                    <nav className='flex text-md gap-16 border-2'>
                        <div className='flex items-center justify-center gap-40 transition-all'>
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


                <div className='flex gap-4 border b-5 items-center relative min-w-fit'>

                    <div className='flex object-contain'>
                        <button type="submit" name="Submit" className='bg-[#744BFC] rounded-md w-7 h-7'>
                        <CiYoutube  
                        className='w-5 h-5 mx-auto rounded-md bg-white'/>
   
    
                        </button>

                    </div>

                    <div className='flex object-contain'>

                    <button type="submit" name="Submit" className='bg-[#744BFC] rounded-md w-7 h-7'>
                        <AiOutlineInstagram  
                        className='w-5 h-5 mx-auto rounded-md bg-white'/>
                        </button>
                    </div>

                    <div className='flex object-contain'>
                        <img src={VectorBe} alt='' className='rounded-md w-7 h-7'/>

                    </div>

                    <div className='flex object-contain'>
                    <button type="submit" name="Submit" className='bg-[#744BFC] rounded-md w-7 h-7'>
                        <FaLinkedinIn  
                        className='w-5 h-5 mx-auto rounded-md text-white'/>

                        </button>
                    </div>

                </div>

            </div>


        </header>

    )
}

export default Headers
