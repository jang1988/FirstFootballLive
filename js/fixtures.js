const key = '2fa03fe1199351c4797529ca86b95fb6326c7b53c8c601b3b7c3a3d8eec97c1f';
let day = '1';
let month = '1';
let year = '2022';
let url = `https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=${key}&from=${year}-${month}-${day}&to=${year}-${month}-${day}`;

day = new Date().getDate();
month = new Date().getMonth();
year = new Date().getFullYear();

const calBtn = document.querySelector('.calendar-btn');
const calendar = document.querySelector('#month-calendar');
console.log(day);

const dateNumber = document.querySelector('#date');
dateNumber.textContent = day;
const monthNumber = document.querySelector('#month');
monthNumber.textContent = month;
const yearNumber = document.querySelector('#year');
yearNumber.textContent = year;

calendar.lastElementChild.addEventListener('click', (e) => {
  if (e.target.textContent) {
    e.target.style.color = getRandomColor();

    day = e.target.textContent;
    console.log('day: ', day);
    fetch(
      `https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=${key}&from=${year}-${month}-${day}&to=${year}-${month}-${day}`
    )
      .then((response) => response.json())
      .then((response) => {
        const allMatch = response.result;
        console.log('allMatch: ', allMatch);

        const oldContent = document.body.children;

        for (const item of oldContent) {
          if (item.className === 'fixtures-wrraper') {
            item.innerHTML = '';
            dateNumber.textContent = day;
          }
        }

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

        console.log('day: ', day);
      })
      .catch((err) => console.error(err));
  }
});

calBtn.addEventListener('click', (e) => {
  e.target.parentElement.nextElementSibling.classList.toggle('hidden');
});

// LIVE FETCH
fetch(url)
  .then((response) => response.json())
  .then(function (response) {
    const allMatch = response.result;
    console.log('response: ', response);
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
// LIVE FETCH END

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
