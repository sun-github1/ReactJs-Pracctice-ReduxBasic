import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { destinationClicked } from '../redux/store';

const Destination = () => {
    const destList = useSelector(state => state.destinationrReducer.destinations);
    const dispatch = useDispatch();
    return (
        <div className='text-center'>
            <div>Destination List</div>
            <div className=''>
                {destList && destList.map(item =>
                (
                    <div className="flex justify-center border row">
                        <div className='col-6 border'>
                            <div>
                                {item.name}
                            </div>
                        </div>
                        <div className='col-6  border'>
                            {/* <div className='inline-flex'> */}
                            <button className='btn btn-success'
                                onClick={()=> dispatch(destinationClicked({destination: item}))}
                            >
                                Detail
                            </button>
                        </div>
                        {/* <button className='btn btn-success px-10'
                            onClick={() => { dispatch(decreaseCounter()) }}>
                            Remove
                        </button>
                    </div> */}
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Destination