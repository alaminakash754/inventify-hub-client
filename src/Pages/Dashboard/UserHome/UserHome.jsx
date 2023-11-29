import { Helmet } from "react-helmet-async";
import useShop from "../../../Hooks/useShop";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import useProduct from "../../../Hooks/useProduct";


const UserHome = () => {
    const [product] = useProduct();
    const [shop] = useShop()
    console.log(shop)
    return (
        <div>
            <Helmet>Inventify-Hub | User Home</Helmet>
            <SectionTitle heading={shop[0]?.shopName}></SectionTitle>
            <div className="mt-8">
                <div className="divider"></div>
                <div className="flex justify-between">
                    <div className="text-start bg-yellow-100 items-center justify-center rounded-lg p-3"><h2 className="text-xl font-semibold text-yellow-700">Total {product?.length} Product Added</h2></div>
                    <div><Link to='/dashboard/createProduct'>
                    <button  className="bg-yellow-100 text-yellow-700 font-medium btn btn-outline border-0 border-b-4">Add a Product</button>
                    </Link></div>
                </div>
                <div className="divider"></div>
            </div>
          
        </div>
    );
};

export default UserHome;