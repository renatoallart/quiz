import axios from "axios";

export const triviaApi = axios.create({
  baseURL: "https://opentdb.com/api.php?amount=4",
});
