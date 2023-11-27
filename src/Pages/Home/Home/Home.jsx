import Banner from "../Banner/Banner";
import BestDeal from "../BestDeal/BestDeal";
import Categories from "../Categories/Categories";
import Testimonial from "../Testimonial/Testimonial";
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Inventify-Hub | Home</title>
            </Helmet>
            <Banner></Banner>
            <Categories></Categories>
            <Testimonial></Testimonial>
            <BestDeal></BestDeal>
        </div>
    );
};

export default Home;