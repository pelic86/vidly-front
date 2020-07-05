import httpService from "./httpService";
import { apiUrl } from "../config.json";

//returning a promise that would reslove to an array
export function getGenres() {
  return httpService.get(apiUrl + "/genres");
}
