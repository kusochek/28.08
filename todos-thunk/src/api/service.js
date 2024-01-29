import axios from "axios";

export default axios.create({
  baseURL: "https://612687da3ab4100017a68fd8.mockapi.io",
  headers: {
    "Content-type": "application/json"
  },
});
