import { useDispatch, useSelector } from "react-redux";
import Header from "../components/header/Header"
import Sidebar from "../components/sidebar/Sidebar"
import { useNavigate } from "react-router-dom";
import { HomeNavigateThunk, loginAdminThunk } from "../services/actions/AuthAction";
import { useEffect } from "react";
import Footer from "../components/footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import Movie1 from "../assets/images/movie image/img-1.webp"
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { Button } from "@mui/material";
import { AddFavoriteThunk, getMoviesThunk } from "../services/actions/MovieUserAct";

const Home = () => {

    const { user } = useSelector(state => state.AuthReducer);
    const { movies } = useSelector(state => state.MovieReducer);

    const navigate = useNavigate();
    const dispatch = useDispatch();

// add favorite movie
    const FaviourteMovie = (movie) => {
        dispatch(AddFavoriteThunk(movie));
    }

// alredy login user show home page
    useEffect(() => {
        dispatch(HomeNavigateThunk())
    }, [])

// login user get for home page
    useEffect(() => {
        dispatch(loginAdminThunk());
    }, []);

// all movies get for home page
    useEffect(() => {
        dispatch(getMoviesThunk());
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
                        {movies.map((movie, index) => {
                            return (
                                <Col lg={3} xs={12} md={4} className="h-80">
                                    <div className="relative group overflow-hidden rounded-lg h-full !z-30">
                                        <div className="w-full h-full relative">
                                            <img src={movie.coverImage} alt="Movie Banner" className="w-full h-full transform group-hover:scale-105 transition duration-300" />

                                            {/* Play Button on Hover */}
                                            <div className="absolute !z-40 inset-0 flex items-center justify-center opacity-0 group-hover:!opacity-100 transition duration-300 pointer-events-none">
                                                <Button className="bg-black opacity-75 p-2 !rounded-full pointer-events-auto cursor-pointer !min-w-0">
                                                    <PlayCircleIcon className="text-white !text-2xl" />
                                                </Button>
                                            </div>

                                            {/* Favorite and Rating Icons on Hover */}
                                            <div className="absolute inset-0 !z-30 flex flex-col justify-between p-4 opacity-0 group-hover:!opacity-100 transition duration-300">
                                                {/* Favorite Icon - Top Right */}
                                                <div className="self-end pointer-events-auto">
                                                    <Button className="bg-black opacity-75 p-2 !rounded-full !min-w-0" onClick={() => FaviourteMovie(movie)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                                                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09A5.978 5.978 0 0116.5 3C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                                        </svg>
                                                    </Button>
                                                </div>

                                                {/* Rating - Bottom Left */}
                                                <div className="bg-black opacity-75 text-white px-3 py-1 rounded-md pointer-events-auto text-center">
                                                    <span className="text-sm font-medium inline-block">8.5/10</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </section>
            {/* <Footer /> */}
        </>
    )
}

export default Home