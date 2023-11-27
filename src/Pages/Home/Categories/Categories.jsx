import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const Categories = () => {
    return (
        <section className="mt-16">
            <SectionTitle subHeading='Best Inventory System' heading=' Enhancing Businesses with Intuitive Inventory Control'></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
                
                <div className="card card-side bg-base-100 shadow-xl items-center">
                <img className="w-[350px] h-[450px] rounded-lg" src="https://i.ibb.co/31mvKtr/25001314-7031541.jpg" alt="Movie" />
                    
                    <div className="card-body text-center items-center">
                        <h2 className="card-title text-yellow-600 text-center">Inventory Track and ShopMaster</h2>
                        <p className=" text-yellow-400">Take control of your inventory with ease, enhance efficiency, and drive success using our user-friendly and powerful inventory management system.</p>

                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl items-center">
                    <img className="w-[350px] h-[450px] rounded-lg" src="https://i.ibb.co/6DD7DvC/6242182-3226565.jpg" alt="Movie" />

                    <div className="card-body text-center items-center">
                        <h2 className="card-title text-yellow-600">Joyful Kids Haven Emporium</h2>
                        <p className=" text-yellow-400">Take control of your inventory with ease, enhance efficiency, and drive success using our user-friendly and powerful inventory management system.</p>

                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl items-center">
                    <img className="w-[350px] h-[450px] rounded-lg" src="https://i.ibb.co/YbDt0RN/6414035-25895.jpg" alt="Movie" />
                    <div className="card-body text-center items-center">
                        <h2 className="card-title text-yellow-600">TechFusion Electronics Hub Store</h2>
                        <p className=" text-yellow-400">Take control of your inventory with ease, enhance efficiency, and drive success using our user-friendly and powerful inventory management system.</p>

                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl items-center">
                    <img className="w-[350px] h-[450px] rounded-lg" src="https://i.ibb.co/7rQ0CvC/9398765-34805.jpg" alt="Movie" />

                    <div className="card-body text-center items-center">
                        <h2 className="card-title text-yellow-600">Glamour Lane Beauty Emporium</h2>
                        <p className=" text-yellow-400">Take control of your inventory with ease, enhance efficiency, and drive success using our user-friendly and powerful inventory management system.</p>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Categories;