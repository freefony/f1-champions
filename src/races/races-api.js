
const URL = 'http://ergast.com/api/f1/'
const SEASONS_DRIVER_STANDING_ENDPOINT = 'driverstandings/1'
const RESULTS_ENDPOINT = 'results/1'

const standingsReducer = (list, data) => {
  const driver = data.DriverStandings[0].Driver
  const champ = {
    season: data.season,
    driverId: driver.driverId,
    driver: `${driver.givenName} ${driver.familyName}`,
    code: driver.code
  }
  list.push(champ)
  return list
}

const racesReducer = (list, {Circuit, Results, raceName, season, round}) => {
  const {Constructor, Driver} = Results[0]
  const { circuitName } = Circuit

  const race = {
    constructor: Constructor.name,
    driverId: Driver.driverId,
    driver: `${Driver.givenName} ${Driver.familyName}`,
    raceName,
    circuitName,
    season,
    round
  }
  list.push(race)
  return list
}

export const getStandings = async () => {
  const OFFSET = 'offset=55' // records started from 1950
  const LIMIT = 'limit=11'   // 2005 - 2015
  try {
    const response = await fetch(`${URL}${SEASONS_DRIVER_STANDING_ENDPOINT}.json?${LIMIT}&${OFFSET}`)
    const standings = await response.json()
    return standings.MRData.StandingsTable.StandingsLists.reduce(standingsReducer, [])
  } catch (err) {
    console.error('failed to fetch standings: ', err)
    return []
  }
}

export const getRaces = async (year) => {
  // only fetch when year is specified
  if (!year) {
    throw Error('"Year" parameter was not supplied')
  }

  try {
    const response = await fetch(`${URL}${year}/${RESULTS_ENDPOINT}.json`)
    const data = await response.json()
    return data.MRData.RaceTable.Races.reduce(racesReducer, [])
  } catch (err) {
    console.error('failed to fetch races: ', err)
    return []
  }
}
