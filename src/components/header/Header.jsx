import { Button } from "@mui/material"
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SideBarAct } from "../../services/actions/MovieUserAct";
import { AdminLogOutThink } from "../../services/actions/AuthAction";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import AdjustIcon from '@mui/icons-material/Adjust';
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InfoIcon from '@mui/icons-material/Info';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ContactsIcon from '@mui/icons-material/Contacts';
import TextureIcon from '@mui/icons-material/Texture';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Header = () => {

    const dispatch = useDispatch();
    const { sidebarToogle } = useSelector(state => state.MovieReducer);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const SignOutUser = () => {
        dispatch(AdminLogOutThink());
    }

    const SideToogle = () => {
        dispatch(SideBarAct())
    }

    return (
        <>
            <header className="py-4 border-b-2 z-50 border-[#151f2f] bg-[#0d1117] fixed w-full">
                <Container>
                    <Row className="items-center justify-between">
                        <Col xs={6} md={3} lg={2}>
                            <div className="logo">
                                <h2 className="text-white">Flix<span className="text-[#2764b7] text-[14px] ps-1">TV</span></h2>
                            </div>
                        </Col>
                        <Col lg={6} className="d-none d-xl-block">
                            <div className="menu-items">
                                <ul className="m-0 p-0 flex items-center justify-start list-unstyled gap-x-4">
                                    <li className="hover:text-[#2764b7] transition-all"><Link to="/" className="no-underline px-3 py-2 rounded-lg text-white">Home</Link></li>
                                    <li className="hover:text-[#2764b7] transition-all"><Link to="/catalog" className="no-underline px-3 py-2 rounded-lg text-white">Catalog<FiberManualRecordIcon className="text-[#2764b7] !text-[10px] ms-1" /></Link></li>
                                    <li className="hover:text-[#2764b7] transition-all"><Link to="/pricingplans" className="no-underline px-3 py-2 rounded-lg text-white">Pricing&nbsp;Plans</Link></li>
                                    <li className="hover:text-[#2764b7] transition-all"><Link to="/live" className="no-underline px-3 py-2 rounded-lg text-white">Live<AdjustIcon className="text-red-700 !text-[10px] ms-1" /></Link></li>
                                    <li className="hover:text-[#2764b7] transition-all">
                                        <Menu as="div" className="relative inline-block text-left">
                                            <MenuButton className="px-3 py-2 text-sm font-semibold text-gray-900 !outline-none">
                                                <span className="no-underline px-3 py-2 rounded-lg text-white cursor-pointer"><MoreHorizIcon className="text-[#2764b7]  ms-1" /></span>
                                            </MenuButton>
                                            <MenuItems transition className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-[#131720] shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
                                                <MenuItem>
                                                    <Link href="#" className="flex items-center px-4 py-2 text-white hover:bg-[#19202c] rounded-t-lg no-underline">
                                                        <InfoIcon className="text-[#2764b7] mr-2" />&nbsp;About Us
                                                    </Link>
                                                </MenuItem>
                                                <MenuItem>
                                                    <Link href="#" className="flex items-center px-4 py-2 text-white hover:bg-[#19202c] no-underline">
                                                        <AccountCircleIcon className="text-[#2764b7] mr-2" />&nbsp;Profile
                                                    </Link>
                                                </MenuItem>
                                                <MenuItem>
                                                    <Link to="/faviourtemovie" className="block px-4 py-2 text-[16px] text-white hover:bg-[#1d2a3f] no-underline"><FavoriteIcon className="text-[#2764b7] mr-2" />&nbsp;Faviourte&nbsp;Movie</Link>
                                                </MenuItem>
                                                <MenuItem>
                                                    <Link href="#" className="flex items-center px-4 py-2 text-white hover:bg-[#19202c] no-underline">
                                                        <ContactsIcon className="text-[#2764b7] mr-2" />&nbsp;Contacts
                                                    </Link>
                                                </MenuItem>
                                                <MenuItem>
                                                    <Link href="#" className="flex items-center px-4 py-2 text-white hover:bg-[#19202c] rounded-b-lg no-underline">
                                                        <VerifiedUserIcon className="text-[#2764b7] mr-2" />&nbsp;Privacy&nbsp;Policy
                                                    </Link>
                                                </MenuItem>
                                            </MenuItems>
                                        </Menu>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col xs={6} md={9} lg={4} className="flex justify-end items-center gap-4">
                            <div className="search-logout flex justify-end items-center gap-4">
                                <div className="search relative d-none d-xl-block">
                                    <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#2764b7]" />
                                    <input type="text" placeholder="Search..." className="py-2 pl-10 pr-4 w-[250px] rounded-full bg-[#1c1f26] text-white focus:outline-none focus:ring-2 focus:ring-[#2764b7]" />
                                </div>
                                <div className="signout">
                                    <Button className="!text-[#13161a] !bg-[#0c1f39] hover:!bg-[#112c4d] flex items-center justify-center transition-all !duration-500" onClick={SignOutUser}><span className="text-white">Sign&nbsp;Out</span><span className="ps-2"><ExitToAppIcon className="text-[#2764b7]" /></span></Button>
                                </div>
                                <div className="addbtn flex items-center justify-end gap-x-3">
                                    <span onClick={SideToogle} className="d-xl-none">
                                        {sidebarToogle ? <Button className="!rounded-lg !bg-[#151f30] transition duration-200 hover:!bg-[#1d2a3f] !min-w-0"><span className=" text-white"><CloseIcon /></span></Button> : <Button className="!rounded-lg !bg-[#151f30] transition duration-200 hover:!bg-[#1d2a3f] !min-w-0"><span className="text-white"><TextureIcon /></span></Button>}
                                    </span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>
        </>
    )
}

export default Header;