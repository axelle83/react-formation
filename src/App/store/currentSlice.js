import { createSlice } from '@reduxjs/toolkit'
import {emptyMeme} from 'orsys-tjs-meme';

const initialState = emptyMeme;

const currentSlice = createSlice({
  name: 'current',
  initialState,
  reducers: {
    changeMeme:(state,action)=>{
        Object.assign(state,action.payload);
    },
    clearMeme:(state)=>{
        Object.assign(state,emptyMeme);
        delete state.id;
    }    
  }
});

export const {changeMeme,clearMeme} = currentSlice.actions

export default currentSlice.reducer
