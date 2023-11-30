import { Link } from "react-router-dom";
import useProduct from "../../../Hooks/useProduct";
import useShop from "../../../Hooks/useShop";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { MdDelete, MdEdit } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";


const ManagerCart = () => {
    const [shop] = useShop()
    const [product, refetch] = useProduct();
    const axiosSecure = useAxiosSecure();

    // console.log(product);
    const handleDeleteItem = (item) => {
        console.log(item)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(async(result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/products/${item._id}`)
                console.log(res.data);
                if(res.data.deletedCount > 0){
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: `${item.name} has been deleted successfully`,
                        icon: "success"
                      });
                }
              
            }
          });
    }
    return (
        <div>
            <Helmet><title>Inventify-Hub | Product management</title></Helmet>
            <SectionTitle heading={shop[0]?.shopName}></SectionTitle>
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
                                <th>Quantity</th>
                                <th>Sale Count</th>
                                <th>Update</th>
                                <th>Delete</th>
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
                                    <td className="text-center">{item.quantity}</td>
                                    <td></td>
                                    
                                    <td>
                                        <Link to={`/dashboard/updateProduct/${item._id}`}><button
                                            className="btn  btn-ghost btn-sm text-xl text-white bg-yellow-600"><MdEdit></MdEdit></button></Link>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handleDeleteItem(item)}
                                            className="btn btn-ghost btn-sm text-2xl text-yellow-600"><MdDelete></MdDelete></button>
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

export default ManagerCart;