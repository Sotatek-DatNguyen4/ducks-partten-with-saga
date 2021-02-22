import axios from 'axios';

export const fetchArticles = async (theUrl) => {
  try {
    const response = await axios.get(theUrl);
    return response;
  } catch(error) {
    console.log(error);
  }
};