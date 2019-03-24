/*Получение данных */
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/photos', false);
console.log("Zavhlo!")
xhr.send();

if (xhr.status != 200) {
  
 alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
} else {
  var par=JSON.parse(xhr.responseText);

  var titles= par.map(function(num) {
    return num.title;
    
  });
  var url= par.map(function(num) {
    return num.url;
    
  });
  var thumbnailUrl= par.map(function(num) {
    return num.thumbnailUrl;
    
  });

}
/**************************************************************/

if ('content' in document.createElement('template')) {
 
var item = document.querySelector('#itemsh');//template
var items = document.querySelector('#items');//destination
var fragment = document.createDocumentFragment();//fragment


var all= item.content.querySelectorAll("a,img,h4,ul");
for(let i=0;i<=49;i++)
{
all[0].href=url[i];
all[1].src=thumbnailUrl[i];
all[1].alt="Film picture";
all[2].innerHTML=titles[i]
var clone = document.importNode(item.content, true);
fragment.appendChild(clone);

}
items.appendChild(fragment);

} else {
  console.log("template Не поддерживается!")
  
}