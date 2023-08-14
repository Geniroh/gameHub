import AuthMenuTop from '../components/AuthMenuTop';
import { Link } from 'react-router-dom';

export const LandingPage = () => {
  return (
    <div className='bg-[#09072C]'>
        {/* HEADER */}
        <div className='blurred-wrapper'>
            <nav className='flex justify-between items-center h-[90px] px-4 text-2xl text-white bg-transparent/10 sticky top-0'>
                <div className='flex items-center'>
                    <img src="logo.png" alt="" className='w-[80px] object-fill' />
                    <h2 className='font-mono leading-loose'>AMEHUB</h2>
                    {/* <BiMoon /> */}
                </div>

                <AuthMenuTop />
            </nav>

            <div className='grid grid-cols-1 sm:grid-cols-3 h-[calc(100%-90px)] grid-'>
                <div className=' h-[100%] text-white flex flex-col justify-center sm:items-start items-center gap-4 text-center sm:text-left px-12 col-span-2'>
                    <h3 className='text-xl tracking-tight'>WELCOME GAME LOVERS</h3>
                    <h1 className='text-2xl sm:text-6xl leading-snug'>ALL THE GAMES YOU LOVED GROWING UP</h1>

                    <div className='mt-6 flex items-center'>
                        <Link className='border border-1 rounded-tl-3xl rounded-bl-3xl border-gray-100 py-4 px-6 bg-black text-xl z-10' to="/login">Get Started</Link>
                        <Link className='border border-1 rounded-tr-3xl rounded-br-3xl border-gray-100 py-4 px-6 bg-white text-xl text-black' to="/dashboard">Resume</Link>
                    </div>
                </div>
                <div className='h-[100%] flex justify-center items-center relative'>
                    <img src="hero1.png" className='pr-5' alt="" />

                </div>
            </div>
        </div>
    </div>
  )
}
