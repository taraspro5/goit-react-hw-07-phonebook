import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiAddContact, apiDeleteContact, apiFetchContacts } from 'api/api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const result = await apiFetchContacts();
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const result = await apiAddContact(contact);
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const result = await apiDeleteContact(id);
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
