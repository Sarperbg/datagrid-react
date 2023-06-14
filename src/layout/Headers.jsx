import { Link, NavLink } from 'react-router-dom'
import RastMobileLogo from '../assets/images/RastMobileLogo.png'
import VectorIn from '../assets/images/VectorIn.png'
import VectorBe from '../assets/images/VectorBe.png'
import Rectangle1 from '../assets/images/Rectangle 1.png'
import Rectangle2 from '../assets/images/Rectangle 2.png'
const Headers = () => {
    return (
        <header className=''>
            <div className='flex flex-wrap items-center justify-between gap-8 border b-2 m-6 p-6'>


                <div className='flex justify-center items-center ml-24 min-w-min'>
                    <img src={RastMobileLogo} alt='' className='object-fit border b-2 min-w-min 
                    flex-wrap' />
                </div>

                <div className='flex justify-center items-center gap-16 border b-5'>
                    <nav className=''>
                        <div className='flex items-center justify-center gap-16 transition-all'>
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
                        <img src={Rectangle1} alt='' />
                    </div>

                    <div className='object-contain'>
                        <img src={Rectangle2} alt='' />
                    </div>

                    <div className='object-contain'>
                        <img src={VectorBe} alt='' />

                    </div>

                    <div className='object-contain'>
                        <img src={VectorIn} alt='' />

                    </div>

                </div>

            </div>


        </header>

    )
}

export default Headers
