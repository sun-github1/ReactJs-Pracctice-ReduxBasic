import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slice/counterSlice";
import { destinationrReducer } from "./slice/destinationSlice";
import { increaseCounter, 
    decreaseCounter, 
    increaseMultiplier, 
    decreaseMultiplier } from './slice/counterSlice';
    import { destinationClicked, resetDestination } from '../redux/slice/destinationSlice';

export const store= configureStore({
    reducer:{
        counterStore: counterReducer,
        destinationrReducer: destinationrReducer
    },
});

export { increaseCounter, 
    decreaseCounter, 
    increaseMultiplier, 
    decreaseMultiplier,
    destinationClicked,
    resetDestination }

// console.log(store.getState());

// store.dispatch({
//     type:"counter/increment",
// })

// console.log(store.getState());