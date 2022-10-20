let key = '57a54d512c0a0bbb96ddd1897a2028d0e53ad032b6ca78df925504dbf0107d26';

fetch(
  `https://apiv2.allsportsapi.com/football/?met=Leagues&APIkey=${key}`
)
  .then((response) => response.json())
  .then((response) => {
    console.log('response: ', response)
    const allLiges = response.result
   
    
    const templateContent = document.querySelector('#liga-main').innerHTML;
    const ligaWrraper = document.querySelector('.liga-main-wrraper');

    allLiges.forEach((liga) => {
      let html = Mustache.render(templateContent, liga);
      ligaWrraper.insertAdjacentHTML('beforeend', html);
    });
  });