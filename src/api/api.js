import axios from 'axios';

axios.defaults.baseURL = 'https://655b99c8ab37729791a95e0f.mockapi.io';

export const apiFetchContacts = async () => {
  const result = await axios.get('/contacts');
  return result.data;
};

export const apiAddContact = async contact => {
  const result = await axios.post('/contacts', contact);
  return result.data;
};

export const apiDeleteContact = async id => {
  const result = await axios.delete(`/contacts/${id}`);
  return result.data;
};
