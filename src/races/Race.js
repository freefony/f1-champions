import React from 'react'

import './races.css'

export default ({ 
  raceName,
  circuitName,
  constructor,
  driver,
  season,
  round,
  isWorldChampion
 }) => {
  const wrapperClass = ['f1-race-card-wrapper']

  if (isWorldChampion) {
    wrapperClass.push('is-world-champion')
  }
  
  return <div className={wrapperClass.join(' ')}>
    <div className='f1-race-card-race-name'>{raceName}</div>
    <div>
      {season} Round {round}
    </div>
    <div className=''>{circuitName}</div>
    <div className='f1-race-card-driver-section row'>
      <div>Winner: {driver}</div>
      <div>{constructor}</div>
    </div>
  </div>
}
