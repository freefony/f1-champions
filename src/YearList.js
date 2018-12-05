import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
  const startYear = 2005
  const endYear = 2015

  const outputList = []
  for (let i = startYear; i <= endYear; i++) {
    outputList.push(
      <div className='f1c-list-year' key={i}><Link to={`/races/${i}`}>{i}</Link></div>
    )
  }

  return outputList
}
