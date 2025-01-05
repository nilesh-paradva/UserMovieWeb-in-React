import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { SignInPoPup, SignInThunk, SignUpBackAct } from "../services/actions/AuthAction";

const SignIn = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isSignIn, isLoading } = useSelector(state => state.AuthReducer);
    const [signIn, setsignIn] = useState({
        email: "",
        password: "",
    })

    const handleChange = (e) => {
        setsignIn({ ...signIn, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(SignInThunk(signIn));
        console.log("signIn", signIn);
    }

    
    const GoogleSignIn = () => {
        dispatch(SignInPoPup())
    }
    
    useEffect(() => {
        dispatch(SignUpBackAct())
    },[])
    
    useEffect(() => {
        if (isSignIn) {
            navigate("/")
        }
    }, [isSignIn])
    
    return (
        <>
            <section className="flex justify-center h-screen items-center bg-[url('assets/images/authimage/bg.jpg')] bg-cover ">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={5}>
                            <div className="w-full p-8 bg-[#131720] shadow-md rounded-lg border-2 border-[#151f2f]">
                                <div className="text-center mb-6">
                                    <h2 className="text-3xl font-bold text-white">Pnb</h2>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <label htmlFor="email" className="block text-sm font-medium text-white mb-1">Email</label>
                                        <input type="text" id="email" name="email" value={signIn.email} placeholder="Enter Your Email" className="mt-2 block bg-transparent text-white w-full px-4 py-2 border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 outline-none" onChange={handleChange} />
                                    </div>
                                    <div className="mb-6">
                                        <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
                                        <input type="password" id="password" name="password" value={signIn.password} placeholder="Enter Your Password" className="mt-2 block w-full bg-transparent text-white px-4 py-2 border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 outline-none" onChange={handleChange} />
                                    </div>
                                    <div>
                                        <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">{isLoading ? "Sign In..." : "Sign In"}</button>
                                    </div>
                                </form>
                                <div className="my-6 flex items-center">
                                    <div className="flex-grow border-t border-gray-300"></div>
                                    <span className="px-3 text-gray-500">OR</span>
                                    <div className="flex-grow border-t border-gray-300"></div>
                                </div>
                                <div className="flex justify-center space-x-4">
                                    <Button className="p-2 !bg-red-600 rounded-full !text-white" onClick={GoogleSignIn}>G</Button>
                                </div>
                                <div className="mt-6 text-center">
                                    <p className="text-sm text-white"> Don't have an account? <Link to={"/signup"} className="text-indigo-600 hover:underline">Sign up!</Link></p>
                                    <Link to={"/"} className="text-sm text-indigo-600 hover:underline no-underline">Back to Home</Link> | <Link href={"/"} className="text-sm text-indigo-600 hover:underline no-underline">Forgot Password?</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default SignIn;
