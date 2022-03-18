import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../movieStore'
import Movies, { CategoriesInterface } from '../../entity/movies';
import { MovieInterface, MoviesInterface, ListInterface } from '../../entity/movies';
import dataFetcher from '../../entity/dataFetcher';
import { v4 as uuidv4 } from 'uuid';
// Define a type for the slice state
interface movieState {
  err: string,
  films: MovieInterface[],
  lists: ListInterface[],
  users:userInterface[],
}

export interface userInterface {
  name: string,
  id:string,
  selection:number[],
}

const startUsers = () :userInterface[] => {
  let users = localStorage.getItem('users');

  if (users == null) {
    let usersObject = [
      {
        id:uuidv4(),
        name:'john',
        selection: []
      },
      {
        id:uuidv4(),
        name:'bill',
        selection: []
      },
      {
        id:uuidv4(),
        name:'paul',
        selection: []
      }
    ]
    //console.log(JSON.stringify(usersObject));
    localStorage.setItem('users',JSON.stringify(usersObject));
    return usersObject;
  }
  //console.log(JSON.parse(users));
  return JSON.parse(users);
}

// Define the initial state using that type
const initialState: movieState = {
  err: '',
  films: [],
  lists: [],
  users:startUsers(),
}
let Gestionnaire = new Movies();

export const movieSlice = createSlice({
  name: 'movies',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setFilms: (state, action: PayloadAction<MovieInterface[]>) => {
      Gestionnaire.setMovies(action.payload);
      state.films = Gestionnaire.getData();
    },
    setCategories: (state, action: PayloadAction<CategoriesInterface>) => {
      Gestionnaire.setCategories(action.payload);
    },
    setLists: (state) => {
      state.lists = Gestionnaire.getLists();
    },
    setError: (state, action: PayloadAction<string>) => {
      state.err = action.payload;
    },
  },
})

export const { setFilms, setError, setCategories, setLists } = movieSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectMovies = (state: RootState) => state.movies

export default movieSlice.reducer


export const fetchData = () => {
  return async (dispatch: any) => {
    let page1 = await dataFetcher.getAllMovies(1);
    let page2 = await dataFetcher.getAllMovies(2);
    let page3 = await dataFetcher.getAllMovies(3);

    let category = await dataFetcher.getAllCategories();
    if (page1 != null && page2 != null && page3 != null && category != null) {
      let movies = page1.data.results.concat(page2.data.results.concat(page3.data.results));
      let categories = category.data;
      dispatch(setFilms(movies));
      dispatch(setCategories(categories));
      dispatch(setLists());
      startUsers();
    }
  }
}

