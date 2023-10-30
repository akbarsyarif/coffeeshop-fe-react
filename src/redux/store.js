import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer, PERSIST, FLUSH, REHYDRATE, PAUSE, REGISTER, PURGE } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./slices/user";
import userCartReducer from "./slices/userCart";
import userHistoryReducer from "./slices/userHistory";

// const initialState = {
//   number: 0,
// };

const persistConfig = {
  key: "coffee-shop",
  storage,
  //bisa tambah blacklist atau whitelist
  blacklist: ["user"],
};

const userPersistConfig = {
  key: "user-coffee-shop",
  storage,
  whitelist: ["isUserAvailable", "token", "userInfo"],
};

const combinedReducers = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
  userCart: userCartReducer,
  userHistory: userHistoryReducer,
  //tambah reducer
});

const persistedReducer = persistReducer(persistConfig, combinedReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [PERSIST, FLUSH, REHYDRATE, PAUSE, REGISTER, PURGE],
      },
    }),
});
//    (prevState = initialState, action) => {
//     /**
//      * kalkulator (add, sub, mul, div)
//      * action: {
//      *  type: (add, sub, mul, div)
//      *  data: berisikan data relevan
//      * }
//      */
//     // berdasarkan action yang diterima, akan mengembalikan
//     // state yang berbeda juga
//     switch (action.type) {
//       case "ADD":
//         return {
//           ...prevState,
//           number: prevState.number + action.data,
//         };
//       case "SUB":
//         return {
//           ...prevState,
//           number: prevState.number - action.data,
//         };
//       case "MUL":
//         return {
//           ...prevState,
//           number: prevState.number * action.data,
//         };
//       case "DIV":
//         return {
//           ...prevState,
//           number: prevState.number / action.data,
//         };
//       case "SET":
//         return {
//           ...prevState,
//           number: action.data,
//         };
//       default:
//         return prevState;
//     }

//     // return {
//     //   ...prevState,
//     // };
//   },
// });

export const persistedStore = persistStore(store);
