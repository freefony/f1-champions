import React, { Component } from 'react'
import { getStandings, getRaces } from './races-api'

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
    const races = await getRaces(this.state.year)
    this.setState(() => ({ standings, races }))
  }

  render () {
    return <p>JS</p>
  }
}

export default RacesContainer
