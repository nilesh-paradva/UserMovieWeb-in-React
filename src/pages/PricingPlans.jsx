import { useDispatch, useSelector } from "react-redux";
import Header from "../components/header/Header"
import Sidebar from "../components/sidebar/Sidebar"
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PaymentsIcon from '@mui/icons-material/Payments';
import PaymentIcon from '@mui/icons-material/Payment';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { HomeNavigateThunk } from "../services/actions/AuthAction";
import Footer from "../components/footer/Footer";
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import { Button } from "@mui/material";

const PricingPlans = () => {

    const { user } = useSelector(state => state.AuthReducer);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(HomeNavigateThunk())
    }, [])

    useEffect(() => {
        if (!user) {
            navigate("/signin");
        }
    }, [user])

    return (
        <>
            <Header />
            <Sidebar />
            <section className="pt-32">
                <Container>
                    <Row className="gap-y-5">
                        <Col lg={12}>
                            <div className="discription mb-9">
                                <h1 className="text-white mb-4">Pricing Plans</h1>
                                <p className="text-white">Many desktop publishing packages and <span><Link to="/">Web Page</Link></span> editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                <p className="text-white">All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="card-box 1 border-b-2 border-[#23314b] h-full">
                                <div className="icon-name flex items-center justify-start">
                                    <span><AccountBalanceWalletIcon className="m-0 text-[#2764b7] !text-5xl" /></span><h5 className="text-white m-0 ps-3">Choose your Plan</h5>
                                </div>
                                <div className="discription mt-3">
                                    <p className="text-white text-[18px]">It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="card-box 1 border-b-2 border-[#23314b] h-full">
                                <div className="icon-name flex items-center justify-start">
                                    <span><PaymentsIcon className="m-0 text-[#2764b7] !text-5xl" /></span><h5 className="text-white m-0 ps-3">Choose your Plan</h5>
                                </div>
                                <div className="discription mt-3">
                                    <p className="text-white text-[18px]">If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="card-box 1 border-b-2 border-[#23314b] h-full">
                                <div className="icon-name flex items-center justify-start">
                                    <span><PaymentIcon className="m-0 text-[#2764b7] !text-5xl" /></span><h5 className="text-white m-0 ps-3">Choose your Plan</h5>
                                </div>
                                <div className="discription mt-3">
                                    <p className="text-white text-[18px]">It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="card-box 1 border-b-2 border-[#23314b] h-full">
                                <div className="icon-name flex items-center justify-start">
                                    <span><AccountBalanceIcon className="m-0 text-[#2764b7] !text-5xl" /></span><h5 className="text-white m-0 ps-3">Choose your Plan</h5>
                                </div>
                                <div className="discription mt-3">
                                    <p className="text-white text-[18px]">Various versions have evolved over the years, sometimes by accident, sometimes on purpose</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="table-price py-16 overflow-x-scroll">
                                <table className="w-[1250px]">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th className="text-center">
                                                <p className="text-[#2764b7]">REGULAR</p>
                                                <h2 className="text-white">$11.99</h2>
                                                <p className="text-white">/&nbsp;month</p>
                                            </th>
                                            <th className="text-center">
                                                <p className="text-[#2764b7]">PREMIUM</p>
                                                <h2 className="text-white">$34.99</h2>
                                                <p className="text-white">/&nbsp;month</p>
                                            </th>
                                            <th className="text-center">
                                                <p className="text-[#2764b7]">PREMIUM&nbsp;+&nbsp;TV&nbsp;channels</p>
                                                <h2 className="text-white">$49.99</h2>
                                                <p className="text-white">/&nbsp;month</p>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="text-center">
                                            <td className="text-white text-start !p-3">FlixTV&nbsp;Originals</td>
                                            <td className="text-white"><DoneIcon className="!text-green-700"/></td>
                                            <td className="text-white"><DoneIcon className="!text-green-700"/></td>
                                            <td className="text-white"><DoneIcon className="!text-green-700"/></td>
                                        </tr>
                                        <tr className="text-center">
                                            <td className="text-white  text-start !p-3">Get unlimited access to the largest streaming library with no ads</td>
                                            <td className="text-white"><DoneIcon className="!text-green-700"/></td>
                                            <td className="text-white"><DoneIcon className="!text-green-700"/></td>
                                            <td className="text-white"><DoneIcon className="!text-green-700"/></td>
                                        </tr>
                                        <tr className="text-center">
                                            <td className="text-white  text-start !p-3">Watch Live TV online and on supported devices</td>
                                            <td className="text-white"><DoneIcon className="!text-green-700"/></td>
                                            <td className="text-white"><DoneIcon className="!text-green-700"/></td>
                                            <td className="text-white"><DoneIcon className="!text-green-700"/></td>
                                        </tr>
                                        <tr className="text-center">
                                            <td className="text-white  text-start !p-3">Switch plans or cancel anytime</td>
                                            <td className="text-white"><DoneIcon className="!text-green-700"/></td>
                                            <td className="text-white"><DoneIcon className="!text-green-700"/></td>
                                            <td className="text-white"><DoneIcon className="!text-green-700"/></td>
                                        </tr>
                                        <tr className="text-center">
                                            <td className="text-white  text-start !p-3">Record live TV with 50 hours of Cloud DVR storage</td>
                                            <td className="text-white"><CloseIcon className="!text-red-700"/></td>
                                            <td className="text-white"><DoneIcon className="!text-green-700"/></td>
                                            <td className="text-white"><DoneIcon className="!text-green-700"/></td>
                                        </tr>
                                        <tr className="text-center">
                                            <td className="text-white  text-start !p-3">Stream 65+ top Live</td>
                                            <td className="text-white"><CloseIcon className="!text-red-700"/></td>
                                            <td className="text-white"><DoneIcon className="!text-green-700"/></td>
                                            <td className="text-white"><DoneIcon className="!text-green-700"/></td>
                                        </tr>
                                        <tr className="text-center">
                                            <td className="text-white  text-start !p-3">TV channels</td>
                                            <td className="text-white"><CloseIcon className="!text-red-700"/></td>
                                            <td className="text-white"><CloseIcon className="!text-red-700"/></td>
                                            <td className="text-white"><DoneIcon className="!text-green-700"/></td>
                                        </tr>
                                        <tr className="text-center">
                                            <td></td>
                                            <td><Button><Link to={"#"} className="px-3 py-2 rounded-lg no-underline text-white">SELECT&nbsp;PLAN</Link></Button></td>
                                            <td><Button><Link to={"#"} className="px-3 py-2 rounded-lg no-underline text-white">SELECT&nbsp;PLAN</Link></Button></td>
                                            <td><Button><Link to={"#"} className="px-3 py-2 rounded-lg no-underline text-white">SELECT&nbsp;PLAN</Link></Button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    )
}

export default PricingPlans