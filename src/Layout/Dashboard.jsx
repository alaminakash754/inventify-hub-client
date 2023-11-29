import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Footer from "../Pages/Home/Shared/Footer/Footer";
import { MdProductionQuantityLimits, MdPayments, MdSummarize } from "react-icons/md";
import { FaHome, FaMoneyCheckAlt, FaShoppingCart, FaUsers } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";
import { RiLogoutCircleRFill } from "react-icons/ri";
import { Helmet } from "react-helmet-async";
import { FcSalesPerformance } from "react-icons/fc";
import useAdmin from "../Hooks/useAdmin";


const Dashboard = () => {
    // <Helmet>Inventify-Hub | Dashboard</Helmet>

    const { logOut } = useAuth();
    const [isAdmin] = useAdmin();
    const navigate = useNavigate();


    const handleSignOut = () => {
        logOut()
            .then(() => {
                navigate('/')
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div>
            <Helmet>Inventify-Hub | Dashboard</Helmet>
            <div className="flex">
                <div className="w-60 min-h-full bg-orange-50">
                    <ul className="menu">

                        {
                            isAdmin ?
                                <>
                                    <li>
                                        <NavLink to='/dashboard/adminHome'><FaHome></FaHome> Admin Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/manageShop'>
                                            <FaShoppingCart></FaShoppingCart> Manage All Shop</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/sales'>
                                            <FcSalesPerformance></FcSalesPerformance> Manage All Sales</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/users'>
                                            <FaUsers></FaUsers> All Users</NavLink>
                                    </li>

                            
                                </>
                                :
                                <>
                                    <li>
                                        <NavLink to='/dashboard/userHome'>
                                            <FaHome></FaHome> Manager Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/product'>
                                            <MdProductionQuantityLimits></MdProductionQuantityLimits> Product Management
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink to='/dashboard/salesCollection'><FcSalesPerformance></FcSalesPerformance> Sales Collection
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/salesCollection'>
                                            <FaMoneyCheckAlt></FaMoneyCheckAlt> Check-Out
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/subscription'>
                                            <MdPayments></MdPayments> Subscription and Payment
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/salesSummary'>
                                            <MdSummarize></MdSummarize> Sales Summary
                                        </NavLink>
                                    </li>

                                </>
                        }
                        <div className="divider"></div>
                        <li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
                        <li><button onClick={handleSignOut}><RiLogoutCircleRFill></RiLogoutCircleRFill> Logout</button></li>

                    </ul>
                </div>
                <div className="flex-1 p-6">
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;