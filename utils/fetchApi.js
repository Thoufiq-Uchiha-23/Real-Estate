import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-key": "3c39d78115msh289d418388b62b0p156f23jsnf5d2761e5e68",
      "x-rapidapi-host": "bayut.p.rapidapi.com",
    },
  });

  return data;
};
