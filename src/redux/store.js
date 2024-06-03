import { configureStore } from "@reduxjs/toolkit";
import filtersReduser from "./filtersSlice";
import contactsReduser from "./contactsSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const contactsPersistConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"],
};

const filtersPersistConfig = {
  key: "filter",
  storage,
  whitelist: ["name"],
};

const pContactsReducer = persistReducer(contactsPersistConfig, contactsReduser);
const pFiltersReducer = persistReducer(filtersPersistConfig, filtersReduser);

export const store = configureStore({
  reducer: {
    contacts: pContactsReducer,
    filters: pFiltersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
