import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter, increaseMultiplier, 
    decreaseMultiplier } from '../redux/store';

const Counter = () => {
    const count = useSelector(state => state.counterStore.count);
    const dispatch = useDispatch();
    const [multiplier, setMultiplier] = useState(10);
    return (
        <div className='text-center'>
         <div>Count: {count}</div>
            <div className='row'>
                <div className='col-6 border'>
                   <div>Basic Counter</div>
                    <div className='inline-flex'>
                        <button className='btn btn-primary mr-3 px-10'
                            onClick={() => { dispatch(increaseCounter()) }}
                        >
                            Add
                        </button>
                        <button className='btn btn-success px-10'
                            onClick={() => { dispatch(decreaseCounter()) }}>
                            Remove
                        </button>
                    </div>
                </div>
                <div className='col-6 border'>
                <div>Multiplier Counter</div>
                    <div className='flex justify-around'>
                        <input type="number" placeholder='multiplier' id="multiplier" 
                        name="multiplier" defaultValue={10} onChange={(e)=> setMultiplier(e.target.value)}></input>
                        <button className='btn btn-primary mr-3 px-10'
                            onClick={() => { dispatch(increaseMultiplier(multiplier)) }}
                        >
                            Add
                        </button>
                        <button className='btn btn-success px-10'
                            onClick={() => { dispatch(decreaseMultiplier(multiplier)) }}>
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counter