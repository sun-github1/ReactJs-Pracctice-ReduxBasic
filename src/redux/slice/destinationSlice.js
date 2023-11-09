import { createSlice } from "@reduxjs/toolkit";
import { resetReduxOPedia } from "../action/actions";

const initialState = () => {
    return {
        destinations:
            [
                {
                    name: "Dubai",
                    days: 7,
                    fact: "Heighest building in the world",
                },
                {
                    name: "Japan",
                    days: 10,
                    fact: "Lots of mountains",
                },
                {
                    name: "New Zealand",
                    days: 5,
                    fact: "Place where Hobbits lives",
                }
            ],
            selectedDestination: null
    };
};

export const destinationSlice = createSlice({
    name: "destination",
    initialState: initialState,
    reducers: {
        destinationClicked: (state, action)=>{
            state.selectedDestination= action.payload.destination
            console.log("state.selectedDestination", action.payload);
        },
        resetDestination: (state, action)=>{
            console.log('action', action);
            state.selectedDestination= null;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(resetReduxOPedia,(state, action)=>{
            state.selectedDestination= null;
        });
    }
})


export const { destinationClicked , resetDestination} = destinationSlice.actions;
export const destinationrReducer = destinationSlice.reducer;