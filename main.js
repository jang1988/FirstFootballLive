fetch(
  'https://apiv2.allsportsapi.com/football/?met=Livescore&APIkey=1d0ac0c32b6676f830a158103842dccfe320ff44b529ddc4bee8962d9ca9953c'
)
  .then((response) => response.json())
  .then((response) => {
    const matchList = response.result;
    console.log(matchList);
    matchList.forEach((match) => {
      let scoreBoard = document.createElement('div');
      scoreBoard.innerHTML = `<div class="container">
      <h1>ScoreBoard</h1>
      <div class="title-box">
      <p>Хозяева</p>
      <p id="elapsed">${match.event_status + "'"}</p>
      <p>Гости</p>
      </div>
      <div class="title-box">
      <div class="team">
      <img  id="homeLogo" src="${match.home_team_logo}">
      <p id="homeName">${match.event_home_team}</p>
      </div><p id="goals">${match.event_final_result}</p>
      <div class="team"><img id="awayLogo" src="${match.away_team_logo}">
      <p id="awayName">${match.event_away_team}</p>
      </div>
      </div>
      <hr>
      <div id="matchTable" class="matches-table"></div></div>`;

      document.body.append(scoreBoard);
    });
    
  })
  .catch((err) => console.error(err));
