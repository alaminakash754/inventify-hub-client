import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { MdProductionQuantityLimits } from "react-icons/md";
import Swal from "sweetalert2";
import useAuth from "../../../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;

const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const CreateProduct = () => {
    const { register, handleSubmit, reset } = useForm()
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const navigate = useNavigate()

    const onSubmit = async (data) => {
        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success && user.email) {
            const productItem = {
                name: data.name,
                quantity: parseFloat(data.quantity),
                location: data.location,
                cost: parseFloat(data.cost),
                details: data.details,
                discount: parseFloat(data.discount),
                profit: parseFloat(data.profit),
                image: res.data.data.display_url,
                email: user.email,
                price: parseFloat(data.price)
            }
            // 
            const productResponse = await axiosSecure.post('/products', productItem);
            console.log(productResponse.data);
            if (productResponse.data.insertedId) {
                reset();
                navigate('/dashboard/product')
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the menu!`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }

    };


    return (
        <div>
            <Helmet>Inventify-Hub | Product</Helmet>
            <SectionTitle heading='Create A Product' subHeading='Inventify HUB '></SectionTitle>
            <div className="bg-yellow-50 p-5 mt-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* name and quantity */}
                    <div className="flex gap-5">
                        <div className="form-control w-full mb-2">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input {...register("name", { required: true })} type="text" placeholder="Product Name" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full mb-2">
                            <label className="label">
                                <span className="label-text">Product Quantity</span>
                            </label>
                            <input {...register("quantity", { required: true })} type="number" placeholder="Product Quantity" className="input input-bordered w-full" />
                        </div>
                    </div>
                    {/* location and cost */}
                    <div className="flex gap-5">
                        <div className="form-control w-full mb-2">
                            <label className="label">
                                <span className="label-text">Product Location</span>
                            </label>
                            <input {...register("location", { required: true })} type="text" placeholder="Product Location" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full mb-2">
                            <label className="label">
                                <span className="label-text">Product Cost</span>
                            </label>
                            <input {...register("cost", { required: true })} type="number" placeholder="Product Cost" className="input input-bordered w-full" />
                        </div>
                    </div>
                    {/* description and discount */}
                    <div className="flex gap-5">
                        <div className="form-control w-full mb-2">
                            <label className="label">
                                <span className="label-text">Product Details</span>
                            </label>
                            <input {...register("details", { required: true })} type="text" placeholder="Product Details" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full mb-2">
                            <label className="label">
                                <span className="label-text">Product Discount</span>
                            </label>
                            <input {...register("discount", { required: true })} type="number" placeholder="Product Discount" className="input input-bordered w-full" />
                        </div>
                    </div>
                    {/* profit and image */}
                    <div className="flex gap-5 items-center">
                        <div className="form-control w-full mb-2">
                            <label className="label">
                                <span className="label-text">Profit</span>
                            </label>
                            <input {...register("profit", { required: true })} type="number" placeholder="Profit" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text ">Product Image</span>
                            </label>
                            <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                        </div>
                    </div>
                    <div className="form-control w-full mb-2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input {...register("price", { required: true })} type="number" placeholder="Price" className="input input-bordered w-full" />
                    </div>
                    <button className="btn btn-block bg-yellow-500 mt-5" >Add Product <MdProductionQuantityLimits></MdProductionQuantityLimits> </button>
                </form>
            </div>
        </div>
    );
};

export default CreateProduct;