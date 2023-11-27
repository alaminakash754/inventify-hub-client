import banner from '../../../assets/banner.jpg'
import TypeWriterEffect from 'react-typewriter-effect';

const Banner = () => {
    return (
        <div>
            <div className='relative'>
                <img className='border-none font rounded-xl' src={banner} alt="" />
                <div className='absolute top-[240px] left-[460px] w-72  text-center mx-auto justify-center'>
                    {/* <h2>Your Ultimate Inventory Management Solution for Optimized Operations</h2>
                    <p>Take control of your inventory with ease, enhance efficiency, and drive success using our user-friendly and powerful inventory management system.</p> */}
                    <TypeWriterEffect
                        textStyle={{
                            fontFamily: 'Red Hat Display',
                            color: 'gray',
                            fontWeight: 400,
                            textAlign: 'justify',
                            fontSize: '1.75rem',
                        }}
                        startDelay={2000}
                        cursorColor="#3F3D56"
                        multiText={[
                            "“ Simplify inventory control, reduce operational complexities, and boost profitability with our comprehensive inventory management software tailored for your success. ”"

                        ]}
                        multiTextDelay={1000}
                        typeSpeed={30}
                    />
                </div>
                
            </div>

        </div>

    );
};

export default Banner;