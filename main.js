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
      const templateContent = document.querySelector('template').innerHTML;

      let html = Mustache.render(templateContent, match);

      document.body.insertAdjacentHTML('beforeend', html);
    });

    const btnleague = document.querySelectorAll('#league');
    const btnLineup = document.querySelectorAll('#lineups');
    const btnStatistics = document.querySelectorAll('#statistics');

    btnleague.forEach((btn) => {
      btn.addEventListener('click', showLeague);
    });

    btnLineup.forEach((btn) => {
      btn.addEventListener('click', showLineup);
    });

    btnStatistics.forEach((btn) => {
      btn.addEventListener('click', showStatistics);
    });

    function showStatistics() {
      const parentStatistics = this.parentElement.nextElementSibling;  
      const child = parentStatistics.querySelector('.statistics');
      child.classList.toggle('none'); 
    }

    function showLineup() {
      const parentLineup = this.parentElement.nextElementSibling;
      const child = parentLineup.querySelector('.lineup');
      child.classList.toggle('none');
    }

    function showLeague() {
      const parentLeague = this.parentElement.nextElementSibling;
      const child = parentLeague.querySelector('.league');
      child.classList.toggle('none');
    }

  })
  .catch((err) => console.error(err));
