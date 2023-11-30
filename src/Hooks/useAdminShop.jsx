import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useAdminShop = () => {
    const axiosPublic = useAxiosPublic();

    const {data: shop = [], isPending: loading, refetch} = useQuery({
        queryKey: ['shops'],
        queryFn: async () => {
            const res = await axiosPublic.get('/shops');
            return res.data;
        }
    })
    return[shop, refetch, loading]
};

export default useAdminShop;