import React from 'react'
import './Breakdown.css';
export default function Breakdown({breakdown}) {
  
  return (
    <div>
      <div className="break-down">
        <div className="category">
            <h3>{breakdown._id} : {breakdown.total}</h3> 
        </div>
      </div>
    </div>
  )
}
