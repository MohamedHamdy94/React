import axios from "axios";

export const Fovorites_state = 'Fovorites_state'
export const Count_state = 'count_state'
export const Movies_details = 'Movies_details'
export const Movies_List = 'User_List'

export const addToFovorite = (payload) => {
    return {
        type: Fovorites_state,
        payload
    }
};
export const InCount = (payload) => {
    return {
        type: Count_state,
        payload
    }
};
export const movis = () => (dispatch) => {
    return axios
        .get("https://api.themoviedb.org/3/movie/popular?api_key=782991eb3d40e097f0473b979b9ae2e0")
        .then((res) => {
            console.log(res.data.results);
            dispatch({
                type: Movies_List,
                payload: res.data.results
            });
        })
        // .catch((err) => console.log(err));
};

export const movisDitails = (id) => (dispatch) => {
    return axios
    .get(`https://api.themoviedb.org/3/movie/${id}?api_key=782991eb3d40e097f0473b979b9ae2e0`)
        .then((res) => {
            console.log(res)

            dispatch({
                type: Movies_details,
                payload: res.data
            });
        })
        // .catch((err) => console.log(err));

}