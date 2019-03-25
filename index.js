
/*Получение данных */
var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/photos',true);//заменить на ассинхронный
xhr.responseType = "json"; 
xhr.send();

var resp;
xhr.onload=function(){
  resp=xhr.response;

var titles=[],
    url_big=[],
    url_sm=[];

  resp.forEach(
    function(element,index){
      titles[index]=element.title;
      url_big[index]=element.url;
      url_sm[index]=element.thumbnailUrl;
    }
  )


//}
/**************************************************************/

if ('content' in document.createElement('template')) {
 
var item = document.querySelector('#itemsh');//template
var items = document.querySelector('#items');//destination
var fragment = document.createDocumentFragment();//fragment



var a=item.content.querySelectorAll("a");
var img=item.content.querySelectorAll("img");
var zag=item.content.querySelectorAll("h4");
var stars=item.content.querySelectorAll("ul");


console.log("a",typeof(img[0]));

}

titles.forEach(
  function(element,index){
    if(index<50)
    {
    element.href=url_big[index];
    img[0].src=url_sm[index];
    img[0].alt="Film picture";
    zag[0].innerHTML=titles[index];
    var clone = document.importNode(item.content, true);
    fragment.appendChild(clone);}
  
  }
)

items.appendChild(fragment);

}