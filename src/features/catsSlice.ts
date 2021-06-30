import { createSlice } from '@reduxjs/toolkit'

export interface CatItem {
    id: string;
    tags: string[];
    upvotes: number;
}

const initialCats: CatItem[] = [];

const catsSlice = createSlice({
  name: 'cats',
  initialState: {
      cats: initialCats,
  },
  reducers: {
      setCats: (state, action) => {
          state.cats = action.payload
      },
      resetCat: (state, action) => {
        const foundCat = state.cats.find(catItem => catItem.id === action.payload);
        if (foundCat) {
          foundCat.upvotes = 0;
        }
      },
      resetAllCats: state => {
        state.cats.forEach(cat => cat.upvotes = 0);
      },
      upVoteCat: (state, action) => {
          const foundCat = state.cats.find(catItem => catItem.id === action.payload);
          if (foundCat) {
            foundCat.upvotes += 1;
          }
      } 
  }
});

export const { setCats, upVoteCat, resetCat, resetAllCats } = catsSlice.actions;

export default catsSlice.reducer;    