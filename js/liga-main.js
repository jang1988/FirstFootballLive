let key = '2fa03fe1199351c4797529ca86b95fb6326c7b53c8c601b3b7c3a3d8eec97c1f';

fetch(
  `https://apiv2.allsportsapi.com/football/?met=Leagues&APIkey=${key}`
)
  .then((response) => response.json())
  .then((response) => {
    console.log('response: ', response)
    const allLiges = response.result
   
    
    const templateContent = document.querySelector('#liga-main').innerHTML;
    const ligaWrraper = document.querySelector('.liga-main-wrraper');
    console.log('ligaWrraper: ', ligaWrraper)

    allLiges.forEach((liga) => {
      let html = Mustache.render(templateContent, liga);
      ligaWrraper.insertAdjacentHTML('beforeend', html);
    });
  });