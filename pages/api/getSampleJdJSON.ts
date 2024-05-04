// api.js
import axios from 'axios';

export const getSampleJdList = async (requestBody:any) => {
  try {
    const response = await axios.post('https://api.weekday.technology/adhoc/getSampleJdJSON', requestBody);
    return response.data.jdList;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
