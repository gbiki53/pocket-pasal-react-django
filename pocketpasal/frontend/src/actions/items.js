import axios from "axios";
import { createMessage } from "./messages";

import { GET_ITEMS, ADD_ITEM, GET_ERRORS } from "./types";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

//GET ITEMS
export const getItems = () => (dispatch) => {
  axios
    .get("/api/items/")
    .then((res) => {
      dispatch({ type: GET_ITEMS, payload: res.data });
    })
    .catch((err) => console.log(err));
};

//ADD ITEMS
export const addItem = (item) => (dispatch) => {
  axios
    .post("/api/items/", item)
    .then((res) => {
      dispatch(createMessage({ itemAdded: "Item Added" }));
      dispatch({ type: ADD_ITEM, payload: res.data });
    })
    .catch((err) => {
      const errors = {
        msg: err.response.data,
        status: err.response.status,
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors,
      });
    });
};
