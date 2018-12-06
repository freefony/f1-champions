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

  getWorldChampion = (season, standings = []) => {
    const standingsHay = standings.length ? standings : this.state.standings
    const seasonChampion = standingsHay.find(standing => (standing.season === season))
    return seasonChampion
  }

  async componentWillMount () {
    const { year } = this.state
    const standings = await getStandings()
    const races = await getRaces(year)
    const worldChampion = this.getWorldChampion(year, standings)

    this.setState(() => ({ standings, races, worldChampion }))
  }

  async componentDidUpdate (nextProp) {
    const year = nextProp.match.params.year
    if (year !== this.state.year) {
      const races = await getRaces(year)
      const worldChampion = this.getWorldChampion(year, this.state.standings)

      this.setState(() => ({ races, year, worldChampion }))
    }
  }

  render () {
    const { races, worldChampion } = this.state
    const view = races.map((race,i) => {
      const isWorldChampion = (worldChampion.driverId === race.driverId)
      return <Race {...race} key={i} isWorldChampion={isWorldChampion} />
    })
    return view
  }
}

export default RacesContainer
