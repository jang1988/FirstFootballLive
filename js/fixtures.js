fetch(
  'https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=96efdc39ee05c5eeddab1d11235d8ba22bbb85d0b3baf9e22a232e3e9c49580b&from=2022-09-27&to=2022-09-27'
)
  .then((response) => response.json())
  .then((response) => {
    const allMatch = response.result;
    console.log('allMatch: ', allMatch);

    const templateContent = document.querySelector('#fixtures').innerHTML;
    const fixturesWrraper = document.querySelector('.fixtures-wrraper');

    allMatch.forEach((match) => {
      let html = Mustache.render(templateContent, match);
      fixturesWrraper.insertAdjacentHTML('beforeend', html);
    });

    const matchContent = document.querySelectorAll('.match-content');
    matchContent.forEach((div) => {
      div.addEventListener('click', showStat);
    });

    function showStat() {
      this.children[1].classList.toggle('active');
    }
  })
  .catch((err) => console.error(err));

  const calBtn = document.querySelector('.calendar-btn')

  calBtn.addEventListener('click', (e) => {
    e.target.nextElementSibling.classList.toggle('hidden')
  })
