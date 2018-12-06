import React from 'react'

import './races.css'

export default ({ 
  raceName,
  circuitName,
  constructor,
  driver,
  season,
  round
 }) => {
  return <div className='f1-race-card-wrapper'>
    <div className='f1-race-card-race-name'>{raceName}</div>
    <div>
      <span>{season}</span>
      <span>Round {round}</span>
    </div>
    <div className=''>{circuitName}</div>
    <div>Winner: {driver} ({constructor})</div>
  </div>
}
