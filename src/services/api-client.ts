import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9bd3aa3b8f1d454aaad014df45640098",
  },
});
