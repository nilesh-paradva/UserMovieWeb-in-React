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
import { Alert, Button, Snackbar } from "@mui/material";
import { AddFavoriteThunk, getMoviesThunk, isOpenAct } from "../services/actions/MovieUserAct";

const Home = () => {

    const { user } = useSelector(state => state.AuthReducer);
    const { movies, isCreated, isLoading, Error, isOpen } = useSelector(state => state.MovieReducer);


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
    }, [user]);

    useEffect(() => {
        if (isCreated) {
            navigate("/faviourtemovie");
        }
    }, [isCreated]);

    return (
        <>

            <Header />
            <Sidebar />
            <Snackbar open={isOpen} autoHideDuration={6000} onClose={() => dispatch(isOpenAct(false))} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert onClose={() => dispatch(isOpenAct(false))} severity="error">
                    {Error}
                </Alert>
            </Snackbar>
            <section className="pt-32">
                <Container>
                    <Row className="gap-y-6">
                        {movies.map((movie, index) => {
                            return (
                                <Col lg={3} xs={12} md={4} sm={6} key={movie.id}>
                                    <div className="movie-box relative  group shadow-lg">
                                        <div className="relative group overflow-hidden rounded-2xl h-full !z-30">
                                            <div className="w-full h-full relative">
                                                <img src={movie.coverImage} alt="Movie Banner" className="aspect-[6/9] h-full w-full transform group-hover:scale-105 group-hover:blur-sm transition duration-300" />

                                                {/* Play Button on Hover */}
                                                <div className="absolute !z-40 inset-0 flex items-center justify-center opacity-0 group-hover:!opacity-100 transition duration-300 pointer-events-none">
                                                    <Button className="bg-black opacity-75 p-2 !rounded-full pointer-events-auto cursor-pointer !min-w-0">
                                                        <a href={movie.link} target="_blank"><PlayCircleIcon className="text-white !text-2xl" /></a>
                                                    </Button>
                                                </div>
                                                <div className="absolute d-lg-none !z-40 inset-0 flex items-center justify-center opacity-100  pointer-events-none">
                                                    <Button className="bg-black opacity-75 p-2 !rounded-full pointer-events-auto cursor-pointer !min-w-0">
                                                        <a href={movie.link} target="_blank"><PlayCircleIcon className="text-white !text-2xl" /></a>
                                                    </Button>
                                                </div>

                                                {/* Favorite and Rating Icons on Hover */}
                                                <div className="absolute  inset-0 !z-30 flex flex-col justify-between p-4 opacity-0 group-hover:!opacity-100 transition duration-300">
                                                    {/* Favorite Icon - Top Right */}
                                                    <div className="self-end pointer-events-auto">
                                                        {isLoading ?

                                                            <Button className="!bg-red-800 opacity-75 p-2 !rounded-full !min-w-0" onClick={() => FaviourteMovie(movie)}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                                                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09A5.978 5.978 0 0116.5 3C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                                                </svg>
                                                            </Button>
                                                            :
                                                            <Button className="bg-black opacity-75 p-2 !rounded-full !min-w-0" onClick={() => FaviourteMovie(movie)}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                                                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09A5.978 5.978 0 0116.5 3C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                                                </svg>
                                                            </Button>
                                                        }
                                                    </div>

                                                    {/* Rating - Bottom Left */}
                                                    <div className="bg-black opacity-75 text-white px-3 py-1 rounded-md pointer-events-auto text-center">
                                                        <span className="text-sm font-medium inline-block">8.5/10</span>
                                                    </div>
                                                </div>
                                                <div className="absolute d-lg-none inset-0 !z-30 flex flex-col justify-between p-4 ">
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
                                        <div className="movie-dis mt-2 py-3 px-2">
                                            <h2 className="text-lg font-semibold !text-white"><span className="group-hover:text-[#2764b7] transition-all duration-600">{movie.title}</span></h2>
                                            <ul className="flex items-center justify-between m-0 p-0">
                                                <li className="text-white">{movie.genre}</li>
                                                <li className="text-white">{movie.runningTime}&nbsp;min</li>
                                                <li className="text-white">{movie.releaseYear}</li>
                                            </ul>
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