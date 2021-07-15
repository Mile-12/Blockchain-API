
//change fetch address
fetch('http://127.0.0.1:5000/api/all_products')
    .then(function(response){
        //console.log(response.text());
        return response.text();
    }).then(function(text){
        return JSON.parse(text);
    })
    .then(function(text){
     for ( let i =0; i<Object.values(text).length;i++)
     {

        document.getElementById('div3').innerHTML += 
        `<div class = 'box'>
         <strong>Product : ${Object.values(text)[i]['Product Name']} </strong> <br>
         Name of Co-op : ${Object.values(text)[i]['Coop']} <br>
         Price : ${Object.values(text)[i]['Price']} <br>
         Contact :  ${Object.values(text)[i]['Contact']}
         <button id = ${'button' +i} style='float:right'>Purchase</button>
         </div>`; 
     }
    });

