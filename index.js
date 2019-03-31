/*Получение данных */
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/photos',true);
xhr.responseType = "json"; 

var MAX_IMAGES=50;//Максимальное количество карточек фильмов
var resp;

xhr.onload=function(){
  resp=xhr.response;
    if ('content' in document.createElement('template')) {
 
        var item = document.querySelector('#itemsh');//template
        var items = document.querySelector('#items');//destination
        var fragment = document.createDocumentFragment();//fragment

        var a=item.content.querySelector("a");
        var img=item.content.querySelector("img");
        var zag=item.content.querySelector("h4");
        var stars=item.content.querySelector("ul");

        stars.classList="mark";
        stars.children.classList="star";

        /****************************************/
        resp.slice(0, MAX_IMAGES).forEach(
        function(element,index){
            
            
            element.href=element.url;
            img.src=element.thumbnailUrl;;
            img.alt="Film picture";
            zag.innerHTML=element.title;
            var clone = document.importNode(item.content, true);
            fragment.appendChild(clone);}
        
        
        )

items.appendChild(fragment);

}

}
xhr.send();