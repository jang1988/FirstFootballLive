fetch(
  'https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=a2e35aee5529008b5e241999dc3f70a645a51aff94783d571f426d855021f3c5&from=2022-09-26&to=2022-09-26'
)
  .then((response) => response.json())
  .then((response) => {
    const allMatch = response.result;
    console.log('allMatch: ', allMatch)

    const templateContent = document.querySelector('#fixtures').innerHTML;
    const fixturesWrraper = document.querySelector('.fixtures-wrraper');

    allMatch.forEach((match) => {
      let html = Mustache.render(templateContent, match);    
      fixturesWrraper.insertAdjacentHTML('beforeend', html);
    });
  })
  .catch((err) => console.error(err));
