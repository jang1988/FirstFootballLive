const options = {
  key: '2fa03fe1199351c4797529ca86b95fb6326c7b53c8c601b3b7c3a3d8eec97c1f',
};

fetch(
  `https://apiv2.allsportsapi.com/football/?met=Livescore&APIkey=${options.key}`
)
  .then((response) => response.json())
  .then((response) => {
    const matchList = response.result;
    console.log('response: ', response);
    console.log('matchList: ', matchList);

    const templateContent = document.querySelector('#live').innerHTML;
    const liveWrraper = document.querySelector('.live-wrraper');


    matchList.forEach((match) => {
      let html = Mustache.render(templateContent, match);
      liveWrraper.insertAdjacentHTML('beforeend', html);
    });

    const btnGoalScorers = document.querySelectorAll('#league');
    const btnLineup = document.querySelectorAll('#lineups');
    const btnStatistics = document.querySelectorAll('#statistics');

    btnGoalScorers.forEach((btn) => {
      btn.addEventListener('click', showGoalScorers);
    });

    btnLineup.forEach((btn) => {
      btn.addEventListener('click', showLineup);
    });

    btnStatistics.forEach((btn) => {
      btn.addEventListener('click', showStatistics);
    });

    function showStatistics() {
      const parentStatistics = this.parentElement.nextElementSibling;
      parentStatistics.children[0].classList.add('none');
      parentStatistics.children[1].classList.add('none');
      const child = parentStatistics.querySelector('.statistics');
      child.classList.toggle('none');
    }

    function showLineup() {
      const parentLineup = this.parentElement.nextElementSibling;
      parentLineup.children[0].classList.add('none');
      parentLineup.children[2].classList.add('none');
      const child = parentLineup.querySelector('.lineup');
      child.classList.toggle('none');
    }

    function showGoalScorers() {
      const parentLeague = this.parentElement.nextElementSibling;
      parentLeague.children[1].classList.add('none');
      parentLeague.children[2].classList.add('none');
      const child = parentLeague.querySelector('.goalscorers');
      child.classList.toggle('none');
    }
  })
  .catch((err) => console.error(err));
