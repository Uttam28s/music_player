import { configureStore } from '@reduxjs/toolkit'
import counterReducer  from './counterReducer'
import playListReducer from './playListReducer'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    playList : playListReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch