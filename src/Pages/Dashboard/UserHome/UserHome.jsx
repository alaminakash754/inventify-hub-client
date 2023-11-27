import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const UserHome = () => {
    return (
        <div>
            <Helmet>Inventify-Hub | User Home</Helmet>
            <SectionTitle subHeading='User Home'></SectionTitle>
        </div>
    );
};

export default UserHome;