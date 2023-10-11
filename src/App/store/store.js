import {combineReducers, configureStore} from '@reduxjs/toolkit'
import currentReducer from './currentSlice'
import modalReducer from "./modalSlice";
export const store=configureStore({
    reducer:combineReducers({current:currentReducer, modal:modalReducer})
});

// console.log(store.getState());

// store.subscribe(()=>{
//     console.log(store.getState());
// })

// console.log(store.getState());
// store.dispatch(changeMeme({text:'nouveau meme'}));
// console.log(store.getState());
// store.dispatch(clearMeme());
// console.log(store.getState());