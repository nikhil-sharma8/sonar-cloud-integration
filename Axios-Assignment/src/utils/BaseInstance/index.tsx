import axios from "axios";

const Endpoint = axios.create({
  baseURL: "http://localhost:3000",
});

export default Endpoint;
