const initialState = {
    movies: [],
    favoriteMovies: [],
    movie: null,
    isLoading: false,
    isCreated: false,
    sidebarToogle: false
};


export const MovieReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_FAVORITE":
            return { ...state, isCreated: true, isLoading: false}

        case "GETMOVIE":
            return { ...state, movies: action.payload, isLoading: false, isCreated: false}

        case "FAVOURITEMOVIE":
            return { ...state, favoriteMovies :  action.payload, isLoading: false, isCreated: false }

        case "SINGLEITEM" :
            return {...state, movie : action.payload, isLoading: false, isCreated: false}

        case "SIDEBAR_TOOGLE":
            return { ...state, sidebarToogle: !state.sidebarToogle }

        case "LOADING":
            return { ...state, isLoading: true }

        default:
            return state
    }
}