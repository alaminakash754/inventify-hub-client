import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const AdminHome = () => {
    return (
        <div>
            <Helmet>Inventify-Hub | Admin Home</Helmet>
            <SectionTitle subHeading='Admin Home'></SectionTitle>
            
        </div>
    );
};

export default AdminHome;