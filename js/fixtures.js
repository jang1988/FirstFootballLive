const key = '57a54d512c0a0bbb96ddd1897a2028d0e53ad032b6ca78df925504dbf0107d26';
let day = new Date().getDate();
let month = new Date().getMonth() + 1;
let year = new Date().getFullYear();
let url = `https://apiv2.allsportsapi.com/football/?met=Fixtures&timezone=Europe/Kiev&APIkey=${key}&from=${year}-${month}-${day}&to=${year}-${month}-${day}`;


const calBtn = document.querySelector('.calendar-btn');
const calendar = document.querySelector('#month-calendar');


// DATE
const dateNumber = document.querySelector('#date');
dateNumber.textContent = day;
const monthNumber = document.querySelector('#month');
monthNumber.textContent = month;
const yearNumber = document.querySelector('#year');
yearNumber.textContent = year;
// DATE END

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

// LISENER

calendar.lastElementChild.addEventListener('click', (e) => {
  if (e.target.textContent) {
    e.target.style.color = getRandomColor();
    day = e.target.textContent;
    url = `https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=${key}&from=${year}-${month}-${day}&to=${year}-${month}-${day}`;
    fetch(url)
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

      })
      .catch((err) => console.error(err));
  }
});

calBtn.addEventListener('click', (e) => {
  e.target.parentElement.nextElementSibling.classList.toggle('hidden');
});
// LISENER END

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
console.log(url);
