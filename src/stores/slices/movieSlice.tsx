import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../movieStore'

// Define a type for the slice state
interface movieState {
  value: number
}

// Define the initial state using that type
const initialState: movieState = {
  value: 0,
}

export const movieSlice = createSlice({
  name: 'movies',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setFilm: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    increment: (state) => {
      state.value += 1
    }
  },
})

export const { setFilm , increment } = movieSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.movies.value

export default movieSlice.reducer