import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
  },
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: (contact) => {
        return {
          payload: {
            id: nanoid(),
            name: contact.name,
            number: contact.number,
          },
        };
      },
    },
    deleteContact: {
      reducer: (state, action) => {
        return {
          items: state.items.filter((contact) => contact.id !== action.payload),
        };
      },
      prepare: (id) => {
        return { payload: id };
      },
    },
  },
});
export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
export const selectContacts = (state) => state.contacts.items;
