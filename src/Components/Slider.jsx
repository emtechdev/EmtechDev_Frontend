// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";


const Slider = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"

            >
                <SwiperSlide className="relative">
                    <img
                        className="object-fill  rounded-lg h-auto max-h-[500px] w-full"
                        src="http://127.0.0.1:8888/static/assets/images/hero-1.jpg"
                        alt="Slide 1"
                    />
                    <div className="absolute top-52 left-40 p-4 text-white text-center w-3/4">
                        <h2 className="text-2xl">We design and deliver
                            complete customized industrial solutions
                            that enable manufacturers to accelerate their digital transformation.</h2>
                        <button className='bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg'>Latest Solutions</button>

                    </div>

                </SwiperSlide>
                <SwiperSlide className="relative ">


                    <img
                        className="object-fill  rounded-lg h-auto max-h-[500px] w-full"
                        src="http://127.0.0.1:8888/static/assets/images/hero-2.jpg"
                        alt="Slide 2"
                    />
                    <div className="absolute top-52 left-40 p-4 text-white text-center w-3/4">
                        <h2 className="text-2xl">We provide wide range of
                            Industrial Robotic Solutions to help improve the performance and increase the efficiency of your production facility.</h2>
                        <button className='bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg'>Find out more</button>

                    </div>

                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img
                        className="object-fill rounded-lg h-auto max-h-[500px] w-full"
                        src="http://127.0.0.1:8888/static/assets/images/hero-3.jpg"
                        alt="Slide 3"
                    />
                    <div className="absolute top-52 left-40 p-4 text-white text-center w-3/4">
                        <h2 className="text-2xl">We design and deliver
                            customized automated inspection systems that meet the most challenging needs.</h2>
                        <button className='bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg'>Find out more</button>
                    </div>

                </SwiperSlide>
            </Swiper>
        </>
    );
}
export default Slider;