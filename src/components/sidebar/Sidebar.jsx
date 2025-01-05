import { Avatar, Button } from "@mui/material";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WidgetsIcon from '@mui/icons-material/Widgets';
import PagesIcon from '@mui/icons-material/Pages';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import InfoIcon from '@mui/icons-material/Info';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ContactsIcon from '@mui/icons-material/Contacts';
import PaymentIcon from '@mui/icons-material/Payment';
import FavoriteIcon from '@mui/icons-material/Favorite';
import userImage from "../../assets/images/user.png";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AdminLogOutThink } from "../../services/actions/AuthAction";

const Sidebar = () => {
    const { sidebarToogle } = useSelector(state => state.MovieReducer);
    const dispatch = useDispatch();

    const DeleteUser = () => {
        dispatch(AdminLogOutThink());
    }
        

    return (
        <div className={`sidebar-wrapper z-40 bg-[#151f30] border-r-2 top-[5.4rem] border-[#1b273b] h-screen flex flex-col transition-transform duration-300 ease-in-out fixed  ${sidebarToogle ? "translate-x-0 w-72" : "-translate-x-full w-72"}`}>
            {/* User Info Section */}
            <div className="account py-4 px-3 border-b-2 border-[#1b273b] flex items-center justify-between">
                <div className="flex items-center">
                    <Avatar variant="rounded" sx={{ width: 45, height: 45 }}>
                        <img src={userImage} alt="User" />
                    </Avatar>
                    <div className="ml-3">
                        <ul className="m-0 p-0 list-none">
                            <li className="text-white text-sm">Admin</li>
                            <li className="text-white text-lg">Nilesh</li>
                        </ul>
                    </div>
                </div>
                <Button className="!min-w-0 !bg-sidebar-border !bg-[#25354f] hover:!bg-[#1d2a3f]" onClick={DeleteUser}>
                    <ExitToAppIcon className="text-white" />
                </Button>
            </div>

            {/* Navigation List */}
            <nav className="flex-grow overflow-y-auto px-3 py-3">
                <ul className="m-0 p-0 list-none">
                    <li className="px-2 my-2">
                        <Link to="/" className="px-3 py-2 text-white bg-sidebar-border block rounded-lg hover:bg-[#1d2a3f] transition duration-200 no-underline">
                            <DashboardIcon className="mr-3" />&nbsp;<span>Home</span>
                        </Link>
                    </li>
                    <li className="px-2 my-2">
                        <Link to="/catalog" className="px-3 py-2 text-white bg-sidebar-border block rounded-lg hover:bg-[#1d2a3f] transition duration-200 no-underline">
                            <WidgetsIcon className="mr-3" />&nbsp;<span>Catalog</span>
                        </Link>
                    </li>
                    <li className="px-2 my-2">
                        <Menu as="div" className="relative inline-block w-full">
                            <MenuButton className="w-full px-3 py-2 rounded-lg flex justify-between items-center bg-sidebar-border hover:bg-[#1d2a3f] transition duration-200">
                                <span className="text-white"><PagesIcon className="mr-4" />Pages</span>
                                <ChevronDownIcon className="w-5 h-5 text-gray-400" />
                            </MenuButton>
                            <MenuItems className="absolute right-0 mt-2 w-56 rounded-lg bg-[#131720] shadow-lg ring-1 ring-black/5 border-2 border-[#3b445a]">
                                <MenuItem>
                                    <Link to="/about" className="block px-4 py-2 text-[16px] text-white hover:bg-[#1d2a3f] rounded-t-lg no-underline"><InfoIcon className="text-[#2764b7] mr-2"/>&nbsp;About us</Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link to="/pricingplans"  className="block px-4 py-2 text-[16px] text-white hover:bg-[#1d2a3f] no-underline"><PaymentIcon className="text-[#2764b7] mr-2"/>&nbsp;Pricing&nbsp;Plans</Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link to="/live"  className="block px-4 py-2 text-[16px] text-white hover:bg-[#1d2a3f]  no-underline"><LiveTvIcon className="text-[#2764b7] mr-2" />&nbsp;Live</Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link to="/faviourtemovie"  className="block px-4 py-2 text-[16px] text-white hover:bg-[#1d2a3f] no-underline"><FavoriteIcon className="text-[#2764b7] mr-2" />&nbsp;Faviourte&nbsp;Movie</Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link to="/profile"  className="block px-4 py-2 text-[16px] text-white hover:bg-[#1d2a3f] no-underline"><ContactsIcon className="text-[#2764b7] mr-2" />&nbsp;Profile</Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link to="/contact"  className="block px-4 py-2 text-[16px] text-white hover:bg-[#1d2a3f]  no-underline"><ContactsIcon className="text-[#2764b7] mr-2" />&nbsp;Contact</Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link to="/privacypolicy"  className="block px-4 py-2 text-[16px] text-white hover:bg-[#1d2a3f] rounded-b-lg no-underline"><VerifiedUserIcon className="text-[#2764b7] mr-2" />&nbsp;Privacy&nbsp;Policy</Link>
                                </MenuItem>
                            </MenuItems>
                        </Menu>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;
