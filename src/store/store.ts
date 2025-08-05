
import { combineReducers, configureStore } from "@reduxjs/toolkit/react";
import { gameSlice } from "./gameSlice";
import { farmSlice } from "./farmSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { upgradeSlice } from "./upgradeSlice";
import { filterSlice } from "./filterSlice";
import { achievementSlice } from "./achievementSlice";

const appReducer = combineReducers({
  game: gameSlice.reducer,
  farm: farmSlice.reducer,
  upgrade: upgradeSlice.reducer,
  filter: filterSlice.reducer,
  achievements: achievementSlice.reducer
});

// 'any' is used here to allow resetting the entire Redux state
// when dispatching the RESET_ALL action. This is a common pattern for global resets.
/* eslint-disable @typescript-eslint/no-explicit-any */
const rootReducer = (state: any, action: any) => {
  if (action.type === "RESET_ALL") {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;