import axios from "axios";

const instance = axios.create({
  baseURL: "https://learn-ticktok-mern-background.herokuapp.com/",
});

export default instance;
