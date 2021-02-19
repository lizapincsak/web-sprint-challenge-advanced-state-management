import axios from 'axios';

export const FETCH_SMURF_START = "FETCH_SMURF_START";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAIL = "FETCH_SMURF_FAIL";
// export const FETCH_SMURF_FAIL_MESSAGE = "FETCH_SMURF_FAIL_MESSAGE";
export const FETCH_NEW_SMURF_START = "FETCH_NEW_SMURF_START";
export const FETCH_NEW_SMURF_SUCCESS = 'FETCH_NEW_SMURF_SUCCESS';
export const FETCH_NEW_SMURF_FAIL = "FETCH_NEW_SMURF_FAIL";

export const fetchSmurfs = () => {
    return dispatch => {
        dispatch({ type: FETCH_SMURF_START})
            axios   
            .get("http:/localhost:3333/smurfs")
            .then((res) => {
                console.log('this is res', res)
                dispatch({type: FETCH_SMURF_SUCCESS, payload: res.data})
            })
            .catch((err) => {
                console.log(err)
                dispatch({ type: FETCH_SMURF_FAIL, payload: err})
                // dispatch({type: FETCH_SMURF_FAIL_MESSAGE, payload: {message: "Oops no more smurfs"}})
            })
}
}

export const addSmurf = (newSmurf) => {
    return dispatch => {
        dispatch({type: FETCH_NEW_SMURF_START})
            axios
            .post("http:/localhost:3333/smurfs", newSmurf)
            .then((res) => {
                console.log("I want to see smurfs", res)
                dispatch({type: FETCH_NEW_SMURF_SUCCESS, payload: res.data })
            })
            .catch((err) => {
                console.log(err)
                dispatch({ type: FETCH_NEW_SMURF_FAIL, payload: err})
            })
    }
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.