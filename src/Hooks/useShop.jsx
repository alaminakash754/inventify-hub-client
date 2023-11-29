import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useShop = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const {refetch ,data: shop = [] } = useQuery({
        queryKey: ['shops', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/shops?email=${user.email}`)
            return res.data;
        }
    })
    return [shop, refetch]
};

export default useShop;