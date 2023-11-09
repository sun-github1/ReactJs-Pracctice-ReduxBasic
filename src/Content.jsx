import React from 'react'
import Counter from './Components/Counter'
import Destination from './Components/Destination'
import DestinationFact from './Components/DestinationFact'
import ResetApp from './Components/ResetApp'

const Content = () => {
    return (
        <div className="container" style={{minHeight:"85vh"}}>
            <ResetApp/>
            <Counter/>
            <Destination/>
            <DestinationFact/>
        </div>
    )
}

export default Content