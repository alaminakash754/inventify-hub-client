import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const BestDeal = () => {
    return (
        <div className="mt-16">

            <SectionTitle subHeading='SALE FEVER' heading=' Unveiling Bargains, Deals, and Discounts Galore for You!'></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 bg-yellow-50 items-center text-center mt-10 rounded-lg  bg-fixed">
                <div className="text-center items-center mx-auto space-y-4">
                    <p className="text-xl font-semibold uppercase">--- sale fever ---</p>
                    <h2 className="text-4xl font-bold">Purchase $ 200 or above <br /> & get <span className="text-yellow-500"> 20% off</span> </h2>
                    <div className="flex gap-5 items-center text-center justify-center">
                        <p className="text-lg font-medium">Use Promo Code</p>
                        <button className="btn btn-outline border-0 border-b-4 hover:bg-yellow-500 text-black">SELL200</button>
                    </div>
                </div>
                <div className="">
                    
                        <img className=" w-3/4 rounded-lg my-16  " src="https://i.ibb.co/mbVHJ89/7082686-23977.jpg" alt="" />
                    
                </div>
            </div>
        </div>
    );
};

export default BestDeal;