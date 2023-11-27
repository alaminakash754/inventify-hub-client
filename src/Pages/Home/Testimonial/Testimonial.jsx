import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import Reviews from '../../../components/Review/Reviews';
import Reviews1 from '../../../components/Review/Reviews1';

const Testimonial = () => {
    return (
        <div className='mt-16 mb-5 '>
            <SectionTitle subHeading='Testimonial' heading='What Customer Says'></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mt-8 h-[400px] bg-yellow-50"
            >
                <SwiperSlide>
                    <Reviews></Reviews>
                </SwiperSlide>
                <SwiperSlide>
                    <Reviews1></Reviews1>
                </SwiperSlide>
                <SwiperSlide>
                    <Reviews></Reviews>
                </SwiperSlide>
                <SwiperSlide>
                    <Reviews1></Reviews1>
                </SwiperSlide>
                <SwiperSlide>
                    <Reviews></Reviews>
                </SwiperSlide>

            </Swiper>
        </div>

    );
};

export default Testimonial;