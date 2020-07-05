import httpService from "./httpService";
import jwtDecode from "jwt-decode";
import { apiUrl } from "../config.json";

const apiEndPoint = apiUrl + "/auth";
const tokenkey = "token";

httpService.setJwt(getJwt());

export async function login(email, password) {
  const { data: jwt } = await httpService.post(apiEndPoint, {
    email,
    password,
  });
  localStorage.setItem(tokenkey, jwt);
}

export async function loginWithJwt(jwt) {
  localStorage.setItem(tokenkey, jwt);
}

export async function logout() {
  localStorage.removeItem(tokenkey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenkey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem(tokenkey);
}

export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt,
};
