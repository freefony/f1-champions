import React, { Component } from 'react'
import { getStandings } from './races-api'

class RacesContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      year: props.match.params.year,
      races: [],
      standings: []
    }
  }

  async componentWillMount () {
    const standings = await getStandings()
    this.setState(() => ({ standings }))
  }

  render () {
    return <p>JS</p>
  }
}

export default RacesContainer
