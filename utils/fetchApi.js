import axios from "axios";

export const baseUrl = 'https://cors-anywhere.herokuapp.com/https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'c16a29cbf7mshc6e209ff1faedf6p1596e0jsnee436dde2c40'
    },
  });
    
  return data;
}