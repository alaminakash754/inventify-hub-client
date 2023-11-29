import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useProduct = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const {refetch ,data: product = [] } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/products?email=${user?.email}`)
            return res.data;
        }
    })
    return [product, refetch]
};

export default useProduct;