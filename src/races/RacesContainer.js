import React, { Component } from 'react'
import { getStandings, getRaces } from './races-api'
import Race from './Race'

class RacesContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      year: props.match.params.year,
      races: [],
      standings: []
    }
  }

  isWorldChampion = (driverId, season) => {
    const seasonChampion = this.state.standings.find(standing => (standing.season === season))
    return seasonChampion.driverId === driverId
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
    const { races, standings } = this.state
    const view = races.map((race,i) => {
      const isWorldChampion = standings.length ? this.isWorldChampion(race.driverId, race.season) : false
      return <Race {...race} key={i} isWorldChampion={isWorldChampion} />
    })
    return view
  }
}

export default RacesContainer
