import { Link } from "react-router-dom";
import useProduct from "../../../../Hooks/useProduct";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";


const SalesCollection = () => {
    const [product] = useProduct()
    return (
        <div>
            <Helmet>Inventify-Hub | Sales</Helmet>
            <SectionTitle heading='Sales Collection'></SectionTitle>
            <div className="mt-8 bg-yellow-50 rounded-lg">
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>Product Name</th>
                                <th>Product Id</th>
                                <th>Quantity</th>
                                <th>Discount</th>
                                <th>Price</th>
                                <th>Checkout</th>
                               
                            </tr>
                        </thead>
                        <tbody>

                            {
                                product.map((item, idx) => <tr key={item._id}>
                                    <td>
                                        {idx + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td className="">{item._id}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.discount}</td>
                                    <td>{item.price}</td>
                                    
                                    <td>
                                        <Link to='/dashboard/checkout'><button
                                            className="btn  btn-ghost btn-sm text-white bg-yellow-600">Checkout</button></Link>
                                    </td>
                                    
                                </tr>)
                            }



                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default SalesCollection;