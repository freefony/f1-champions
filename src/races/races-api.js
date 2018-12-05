
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

export const getStandings = async () => {
  const OFFSET = 'offset=55' // records started from 1950
  const LIMIT = 'limit=11'   // 2005 - 2015

  const response = await fetch(`${URL}${SEASONS_DRIVER_STANDING_ENDPOINT}.json?${LIMIT}&${OFFSET}`)
  const standings = await response.json()
  return standings.MRData.StandingsTable.StandingsLists.reduce(standingsReducer, [])
}
