import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8000',
});

export const getUsers = async () => {
  try {
    const response = await API.get('/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }

};
