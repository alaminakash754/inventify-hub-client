import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAdminShop from "../../../Hooks/useAdminShop";
import { FaVoicemail } from "react-icons/fa";


const AdminHome = () => {
    const [shop] = useAdminShop()
    console.log(shop)
    return (
        <div>
            <Helmet><title>Inventify-Hub | Admin Home</title></Helmet>
            <SectionTitle subHeading='Admin Home' heading='Manage Shop'></SectionTitle>
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
                                <th>Shop Name</th>
                                <th>Product Limit</th>
                                <th className="text-center">Description</th>
                                <th className="text-end">Notice</th>

                            </tr>
                        </thead>
                        <tbody>

                            {
                                shop.map((item, idx) => <tr key={item._id}>
                                    <td>
                                        {idx + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.shopLogo} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        {item.shopName}
                                    </td>
                                    <td></td>
                                    <td className="text-center">{item.shopInfo}</td>

                                    <td>
                                        
                                    </td>
                                    <td>
                                        <button className="btn btn-outline btn-primary border-b-4 text-yellow-600" onClick={() => document.getElementById('my_modal_2').showModal()}>Send Mail</button>
                                        <dialog id="my_modal_2" className="modal">
                                            <div className="modal-box">
                                                <button

                                                    className="btn btn-ghost btn-sm text-2xl text-yellow-600 text-center items-center"><FaVoicemail></FaVoicemail></button>
                                            </div>
                                            <form method="dialog" className="modal-backdrop">
                                                <button>close</button>
                                            </form>
                                        </dialog>

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

export default AdminHome;