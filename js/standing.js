const key = '2fa03fe1199351c4797529ca86b95fb6326c7b53c8c601b3b7c3a3d8eec97c1f';

let url = `https://apiv2.allsportsapi.com/football/?&met=Standings&leagueId=3&APIkey=${key}`;

fetch(url)
  .then((response) => response.json())
  .then((response) => {
    const result = response.result
    console.log(result);
  });
