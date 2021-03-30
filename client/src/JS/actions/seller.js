import { FAIL_SELLERS, GET_SELLER, GET_SELLERS, LOAD_SELLERS } from "../actionTypes/seller";
import axios from "axios";

export const getSellers = () => async (dispatch) => {
  dispatch({ type: LOAD_SELLERS });
  try {
    let result = await axios.get("/api/seller");
    console.log(result);
    dispatch({ type: GET_SELLERS, payload: result.data }); //payload={,}
  } catch (error) {
    dispatch({ type: FAIL_SELLERS, payload: error.response });
  }
};

export const postSeller = (newSeller) => async (dispatch) => {
  try {
    await axios.post("/api/seller", newSeller);
    dispatch(getSellers());
  } catch (error) {
    dispatch({
      type: FAIL_SELLERS,
      payload: error.response,
    });
  }
};

export const editSeller = (id, seller) => async (dispatch) => {
  try {
    await axios.put(`/api/seller/${id}`, seller);
    dispatch(getSellers());
  } catch (error) {
    dispatch({
      type: FAIL_SELLERS,
      payload: error.response,
    });
  }
};

export const deleteSeller = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/seller/${id}`);
    dispatch(getSellers());
  } catch (error) {
    dispatch({
      type: FAIL_SELLERS,
      payload: error.response,
    });
  }
};

export const getSeller = (id) => async (dispatch) => {
  try {
    let result = await axios.get(`/api/seller/${id}`);
    console.log(result);
    dispatch({ type: GET_SELLER, payload: result.data }); //payload={,}
  } catch (error) {
    dispatch({
      type: FAIL_SELLERS,
      payload: error.response,
    });
  }
};