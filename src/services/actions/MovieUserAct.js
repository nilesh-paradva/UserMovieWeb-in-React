import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../../../FireBase";

const AddFavoriteAct = () => {
    return {
        type: "ADD_FAVORITE",
    };
};

const getMoviesAct = (data) => {
    return {
        type: "GETMOVIE",
        payload: data
    };
}

const getFaviourteMoviesAct = (data) => {
    return {
        type: "FAVOURITEMOVIE",
        payload: data
    }
}

const SingleItemAct = (data) => {
    return {
        type: "SINGLEITEM",
        payload: data
    }
}

const UpdateItemsAct = (data) => {
    return {
        type: "UPDATEITEM",
        payload: data
    }
}

export const SideBarAct = () => {
    return {
        type: "SIDEBAR_TOOGLE"
    }
}

export const LoadingAct = () => {
    return {
        type: "LOADING"
    }
}



// Thunk 


// Add favorite Movie
export const AddFavoriteThunk = (data) => async (dispatch) => {
    // dispatch(LoadingAct());
    const uidGet = JSON.parse(localStorage.getItem("uid"));
    if (!uidGet) console.error("User not authenticated.");
    try {
        data.userid = uidGet;
        await addDoc(collection(db, "favorite_movies"), data);
        dispatch(AddFavoriteAct());
        console.log("Movie added successfully.");
    } catch (err) {
        console.error("Error adding movie:", err);
    }
};

// get Movie
export const getMoviesThunk = () => async dispatch => {
    try {
        const recs = (await getDocs(collection(db, "movies"))).docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        dispatch(getMoviesAct(recs));
        console.log(recs.length > 0 ? "Movies dispatche" : "No matching movies.");
    } catch (err) {
        console.error("Error getting movies:", err);
    }
}


// get Favorite Movie
export const getFavoriteMovies = () => async dispatch => {
    try {
        const favoritemovies = (await getDocs(collection(db, "favorite_movies"))).docs.map((doc) => ({ ...doc.data(), id: doc.id }));

        const uidGet = JSON.parse(localStorage.getItem("uid"));
        const filterRec = favoritemovies.filter(rec => rec.userid === uidGet);
        console.log("filterRec", filterRec);
        
        dispatch(getFaviourteMoviesAct(filterRec));
        console.log(filterRec.length > 0 ? "Movies dispatche" : "No matching movies.");

    } catch (err) {
        console.error("Error getting movies:", err);
    }
}


//Single Movie
export const SingleItemThunk = (id) => async dispatch => {
    try {
        const rec = await getDoc(doc(db, "movies", id));
        let getData = rec.data();
        getData.id = rec.id;
        dispatch(SingleItemAct(getData));
    } catch (err) {
        console.error("Single movie", err);
    }
}

// update items
export const UpdateItemsThunk = (data) => async dispatch => {
    dispatch(LoadingAct());
    try {
        await setDoc(doc(db, "movies", data.id), data);
        dispatch(UpdateItemsAct(data));
        console.log("Movie updated successfully.");
    } catch (err) {
        console.error("Error updating movie:", err);
    }
}

// Delete Item 
export const DeleteItemThunk = (id) => async dispatch => {
    try {
        await deleteDoc(doc(db, "movies", id));
        dispatch(getMoviesThunk());
    } catch (err) {
        console.error(err);
    }
}
