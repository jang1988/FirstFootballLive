// 676d60923b2f808452ee2c5de2b409bf17609ff1666b04ac67b7c4f2f540740b
fetch(
  'https://apiv2.allsportsapi.com/football/?met=Livescore&APIkey=676d60923b2f808452ee2c5de2b409bf17609ff1666b04ac67b7c4f2f540740b'
)
  .then((response) => response.json())
  .then((response) => {
    const matchList = response.result;
    console.log('response: ', response);
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
          <img id="homeLogo" src="${match.home_team_logo}" />
          <p id="homeName">${match.event_home_team}</p>
        </div>

        <p id="goals">${match.event_final_result}</p>

        <div class="team">
          <img id="awayLogo" src="${match.away_team_logo}" />
          <p id="awayName">${match.event_away_team}</p>
        </div>
      </div>

      
      <div class="buttons">
      <button class="btn" id="league">Лига</button>
      <button class="btn" id="statistics">Статистика</button>
      <button class="btn" id="lineups">Состав</button>
      </div>

      <div class="match-table" id="match-table">
        <div class="league none">
          <img id="awayLogo" src="${match.league_logo}" />
          <p id="leagueName">${match.league_name}</p>
          <p id="leagueRound">${match.league_round}</p>
        </div>

        <div class="lineups">
        <ul class="home-time">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <ul class="away-time">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      </div>

      
      
      <hr />
    </div>`;
      
      document.body.prepend(scoreBoard);
    });

    const btns = document.querySelectorAll('#league');
    btns.forEach((btn) => {
      btn.addEventListener('click', showDetails);
    });

    function showDetails() {
      const parentLeague = this.parentElement.nextElementSibling;
      const child = parentLeague.querySelector('.league');
      child.classList.toggle('none');
    }
  })
  .catch((err) => console.error(err));
