const options = {
  key: 'd928750011ec703df923ea0a2e33d33c326cebc97aa754818854bda8bdf5dac4',
  day: '1',
  month: '1',
  year: '2022',
};

options.day = new Date().getDate()
options.month = new Date().getMonth()
options.year = new Date().getFullYear()


fetch(
  `https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=${options.key}&from=${options.year}-${options.month}-${options.day}&to=${options.year}-${options.month}-${options.day}`
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
      this.children[1].classList.toggle('active__fixtures');
    }
  })
  .catch((err) => console.error(err));

  const calBtn = document.querySelector('.calendar-btn')

  calBtn.addEventListener('click', (e) => {
    e.target.nextElementSibling.classList.toggle('hidden')
  })