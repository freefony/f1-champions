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

  async componentDidUpdate (nextProp) {
    const year = nextProp.match.params.year
    if (year !== this.state.year) {
      const races = await getRaces(year)
      this.setState(() => ({ races, year }))
    }
  }

  render () {
    return <p>JS</p>
  }
}

export default RacesContainer
