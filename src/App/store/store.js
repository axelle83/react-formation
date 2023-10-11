import {configureStore} from '@reduxjs/toolkit'
import currentReducer, {changeMeme, clearMeme} from './currentSlice'

export const store=configureStore({
    reducer:currentReducer
});

console.log(store.getState());

store.subscribe(()=>{
    console.trace(store.getState());
})

// console.log(store.getState());
store.dispatch(changeMeme({text:'nouveau meme'}));
// console.log(store.getState());
store.dispatch(clearMeme());
// console.log(store.getState());