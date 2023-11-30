import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const CreateStore = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    // console.log(user)
    const { register, handleSubmit } = useForm()
    const onSubmit = async (data) => {
        console.log(data)
        
            const storeItem = {
                shopName: data.name,
                shopLogo: data.image,
                shopInfo: data.description,
                location: data.location, 
                ownerName: data.displayName,
                ownerEmail: data.email
            }
            const shopRes = await axiosSecure.post('/shops', storeItem);
            console.log(shopRes.data);
            if(shopRes.data.insertedId){
                // shop success popup 
                navigate('/dashboard/userHome');
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} has been saved in the database`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        

    }
    return (

        <div className="mt-10">
            <Helmet><title>Inventify-Hub | Create Store</title></Helmet>
            <SectionTitle heading='Create A Store' subHeading='Inventify HUB '></SectionTitle>
            
            <div className="w-3/4 mx-auto bg-yellow-50 mt-6">
                <form className="p-5" onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full mb-5">
                        <label className="label">
                            <span className="label-text">Shop Name*</span>
                        </label>
                        <input {...register("name", { required: true })} type="text" placeholder="Shop Name" className="input input-bordered w-full" />
                    </div>
                    {/* shop logo */}
                    <div className="form-control w-full mb-5">
                        <label className="label">
                            <span className="label-text">Shop Logo</span>
                        </label>
                        <input {...register('image', { required: true })} type="text" name='image' placeholder="Logo URL" className="input input-bordered" />
                    </div>
                    {/* shop info  */}
                    <div className="form-control mb-5">
                        <label className="label">
                            <span className="label-text">Shop Info</span>
                        </label>
                        <textarea {...register('description', { required: true })} className="textarea textarea-bordered h-24" placeholder="Shop Info"></textarea>
                    </div>
                    {/* Location  */}
                    <div className="form-control w-full mb-5">
                        <label className="label">
                            <span className="label-text">Shop Location*</span>
                        </label>
                        <input {...register("location", { required: true })} type="text" placeholder="Location " className="input input-bordered w-full" />
                    </div>
                    {/* owner name */}
                    <div className="form-control w-full mb-5">
                        <label className="label">
                            <span className="label-text">Shop Owner Name</span>
                        </label>
                        <input defaultValue={user?.displayName} {...register("displayName", { required: true })} type="text" className="input input-bordered w-full" />
                    </div>
                    {/* owner email */}
                    <div className="form-control w-full mb-5">
                        <label className="label">
                            <span className="label-text">Shop Owner Email</span>
                        </label>
                        <input defaultValue={user?.email} {...register("email", { required: true })} type="email" className="input input-bordered w-full" />
                    </div>


                    <button className="btn btn-block bg-yellow-500">Create Shop  </button>
                </form>
            </div>
        </div>
    );
};

export default CreateStore;