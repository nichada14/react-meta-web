import { BiPlayCircle } from 'react-icons/bi';
import BannerImg from '../assets/banner2.png';

const Banner2 = () => {
  return (
    <div className='relative py-12 sm:py-0'>
        <div className="container min-h-[620px] flex items-center">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 place-items-center">
                {/* text section */}
                <div className="relative order-2 sm:order-1 lg:pr-20">
                    <div className="relative z-10 space-y-5">
                        <h1 data-aos="fade-up" data-aos-delay="300" className="text-4xl font-semibold">
                            GET READY TO ENJOY VR <br /> 
                            <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>
                                Movies WITH OUR PLATFORM
                            </span>
                        </h1>
                        <p data-aos="fade-up" data-aos-delay="500">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias commodi praesentium harum!
                        </p>
                        {/* button section */}
                        <div className='flex gap-6'>
                            <button data-aos="fade-up" data-aos-delay="700"  className="primary-btn">
                                Get Started
                            </button>
                            <button data-aos="fade-up" data-aos-delay="700" className='flex items-center gap-2'>
                                <BiPlayCircle className='text-3xl' />
                                See Demo
                            </button>
                        </div>
                    </div>
                    {/* background color */}
                    <div className="h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute bottom-[-200px] left-[300px] blur-3xl opacity-50">
                    </div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2">
                    <img data-aos="fade-up" src={BannerImg} alt="" className='w-full max-w-[400px]' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner2