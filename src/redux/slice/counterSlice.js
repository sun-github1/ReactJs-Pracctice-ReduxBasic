import { createSlice } from "@reduxjs/toolkit";
import { resetDestination } from "./destinationSlice";
import { resetReduxOPedia } from "../action/actions";

const initialState= {
    count:0,
    multiplier:1
};

export const counterSlice= createSlice({
    name: "counter",
    initialState: initialState,
    reducers:{
        increaseCounter: (state) => {
            state.count+=1;
        },
        decreaseCounter: (state) => {
            state.count-=1;
        },
        decreaseMultiplier: (state, action) => {
            console.log('decreaseMultiplier', action.payload);
            if(action.payload && state.count>0)
            {
                state.count=state.count-action.payload
            }
        },
        increaseMultiplier: (state, action) => {
            console.log('increaseMultiplier', action.payload);
            state.count=state.count+action.payload;
        },
        // resetCounter: (state)=>{
        //     state.count= 0;
        //     state.multiplier= 10;
        // }
    },
    extraReducers: (builder)=>{
        // builder.addCase(resetDestination.toString(),(state, action)=>{
        //     state.count=10;
        // });
        builder.addCase(resetReduxOPedia,(state, action)=>{
            state.count=10;
        });
    }
})


export const {increaseCounter, decreaseCounter, 
    decreaseMultiplier, increaseMultiplier, resetCounter} = counterSlice.actions;
export const counterReducer=counterSlice.reducer;