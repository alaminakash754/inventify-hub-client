import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const UpdateProduct = () => {
    const product = useLoaderData()
    const { name, quantity, details, location, cost, profit, discount, image
        , _id } = product;
        console.log(name);
    return (
        <div>
            <SectionTitle></SectionTitle>
            <h2>{product.name}</h2>
        </div>
    );
};

export default UpdateProduct;