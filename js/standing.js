// #3 - UEFA Champions League
// #4 - UEFA Europa League

const key = '2fa03fe1199351c4797529ca86b95fb6326c7b53c8c601b3b7c3a3d8eec97c1f';

// let url = `https://apiv2.allsportsapi.com/football/?&met=Standings&leagueId=3&APIkey=${key}`;

// fetch(url)
//   .then((response) => response.json())
//   .then((response) => {
//     const result = response.result;
//     console.dir(result.total);

//     const templateContent = document.querySelector('#standing').innerHTML;
//     const standingWrraper = document.querySelector('.standing-wrapper');

//     result.total.forEach((match) => {
//       if (match.league_round === 'Group A') {
//         let html = Mustache.render(templateContent, match);
//         standingWrraper.insertAdjacentHTML('beforeend', html);
//       }
//       if (match.league_round === 'Group B') {
//         let html = Mustache.render(templateContent, match);
//         standingWrraper.insertAdjacentHTML('beforeend', html);
//       }
//       if (match.league_round === 'Group C') {
//         let html = Mustache.render(templateContent, match);
//         standingWrraper.insertAdjacentHTML('beforeend', html);
//       }
//       if (match.league_round === 'Group D') {
//         let html = Mustache.render(templateContent, match);
//         standingWrraper.insertAdjacentHTML('beforeend', html);
//       }
//       if (match.league_round === 'Group E') {
//         let html = Mustache.render(templateContent, match);
//         standingWrraper.insertAdjacentHTML('beforeend', html);
//       }
//       if (match.league_round === 'Group F') {
//         let html = Mustache.render(templateContent, match);
//         standingWrraper.insertAdjacentHTML('beforeend', html);
//       }

//       console.log('standingWrraper: ', standingWrraper.querySelector('.group'))
//     });
//   });


