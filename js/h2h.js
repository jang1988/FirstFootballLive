const key = '96efdc39ee05c5eeddab1d11235d8ba22bbb85d0b3baf9e22a232e3e9c49580b';
let teamOne = 96 ;
const teamTwo = 196;




fetch(
  `https://apiv2.allsportsapi.com/football/?met=H2H&APIkey=${key}&firstTeamId=${teamOne}&secondTeamId=${teamTwo}`
)

  .then((response) => response.json())
  .then((response) => {
    const allMatch = response.result;
    console.log('allMatch: ', allMatch);


    
    console.log(allMatch.firstTeamResults[0].event_away_team)


  })
  .catch((err) => console.error(err));