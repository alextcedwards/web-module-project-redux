import { ADD_FAVORITE, DELETE_FAVORITE } from "../actions/movieActions.js";

export const initialState = {
  favorites: [],
  displayFavorites: false,
};
const favoritesReducer = (state = initialState, action) => {
  //   console.log(state);
  switch (action.type) {
    default:
      return state;
  }
};

export default favoritesReducer;
