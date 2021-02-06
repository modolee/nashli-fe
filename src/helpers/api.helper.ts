import axios from 'axios';
import { API_ENDPOINT } from '../constants/environment.constant';

export const apiCall = async (method = 'GET', url: string) => {
  let result: any;

  switch (method) {
    case 'GET':
      result = await axios.get(url);
      break;
  }

  if (result?.status === 200) {
    return result.data;
  }

  return null;
};

export const getSchedule = async (date: string) => {
  return apiCall('GET', `${API_ENDPOINT}/schedule?date=${date}`);
};
