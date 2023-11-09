import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const DestinationFact = () => {
    const selectedDestination = useSelector(state => state.destinationrReducer.selectedDestination);
    if(!selectedDestination)
    {
        return null;
    }
    return (
    <div className="flex justify-center border row">
        <div className="col-12">
            <h4 className='text-green-700'>{selectedDestination.name}</h4>
        </div>
        <div className="col-12">
            Recommended Days: {selectedDestination.days}
        </div>
        <div className="col-12">
            Funfact: {selectedDestination.fact}
        </div>
    </div>
  )
}

export default DestinationFact