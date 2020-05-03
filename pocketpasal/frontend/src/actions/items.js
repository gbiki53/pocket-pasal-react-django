import axios from "axios";
import { createMessage, returnErrors } from "./messages";

import { GET_ITEMS, ADD_ITEM } from "./types";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

//GET ITEMS
export const getItems = () => (dispatch) => {
  axios
    .get("/api/items/")
    .then((res) => {
      dispatch({ type: GET_ITEMS, payload: res.data });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

//ADD ITEMS
export const addItem = (item) => (dispatch) => {
  axios
    .post("/api/items/", item)
    .then((res) => {
      dispatch(createMessage({ itemAdded: "Item Added" }));
      dispatch({ type: ADD_ITEM, payload: res.data });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
