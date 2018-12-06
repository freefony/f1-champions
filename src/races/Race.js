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
      <span>{season}</span>
      <span>Round {round}</span>
    </div>
    <div className=''>{circuitName}</div>
    <div className='f1-race-card-driver-section'>
      <div>Winner: {driver}</div>
      <div>{constructor}</div>
    </div>
  </div>
}
