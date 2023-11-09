import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
//import { resetCounter } from '../redux/slice/counterSlice';
//import { resetDestination } from '../redux/slice/destinationSlice';
import { resetReduxOPedia } from '../redux/action/actions';


const ResetApp = () => {
    const dispatch = useDispatch();
  return (
    <div className='text-center'>
        <button className='btn btn-warning' 
        onClick={()=>{
            //dispatch(resetCounter());
            //dispatch(resetDestination());
            dispatch(resetReduxOPedia());
        }}
        >Reset APP</button>
    </div>
  )
}

export default ResetApp