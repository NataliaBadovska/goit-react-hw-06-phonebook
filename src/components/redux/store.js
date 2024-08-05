import { configureStore } from "@reduxjs/toolkit";
// import { persistStore,  } from 'redux-persist'
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import { persistedContactReducer } from './contactsSlice';
import { filtersReducer } from './filtersSlice';

// const persistConfig = {
//   key: 'contacts',
//   storage,
// }

// export const persistedContactReducer = persistReducer(persistConfig, contactsSlice.reducer);

export const store = configureStore({
    reducer: {
        contacts: persistedContactReducer,
        filter: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});



// export const persistor = persistStore(store)