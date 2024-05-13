import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_URL_API
});

const handleErrors = (error) => {
  console.error('Error:', error);
  return null;
};

export const getDataPosts = async () => {
  try {
    const response = await api.get('posts');
    return response.data;
  } catch (error) {
    return handleErrors(error);
  }
};

export const getDataUsers = async () => {
  try {
    const response = await api.get('users');
    return response.data;
  } catch (error) {
    return handleErrors(error);
  }
};

export const getAllDataPostsById = async (id) => {
  try {
    const response = await api.get(`posts?userId=${id}`);
    return response.data;
  } catch (error) {
    return handleErrors(error);
  }
};
