fetch(
  'https://apiv2.allsportsapi.com/football/?met=Livescore&APIkey=a2e35aee5529008b5e241999dc3f70a645a51aff94783d571f426d855021f3c5'
)
  .then((response) => response.json())
  .then((response) => {
    const matchList = response.result;
    console.log('response: ', response);
    console.log(matchList);
    matchList.forEach((match) => {
      const templateContent = document.querySelector('template').innerHTML;

      let html = Mustache.render(templateContent, match);

      document.body.insertAdjacentHTML('beforeend', html);
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
