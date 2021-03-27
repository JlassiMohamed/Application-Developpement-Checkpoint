import {
  REGISTER_USER,
  LOGIN_USER,
  CURRENT_USER,
  LOAD_USER,
  FAIL_USER,
  LOGOUT_USER,
} from "../actionTypes/user";
import axios from "axios"

export const register = (newUser , history)