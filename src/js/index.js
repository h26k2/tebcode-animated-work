function addElement(iClass , pElement){

    var i = document.createElement("i");
    i.setAttribute("class",iClass);

    var iContainer = document.createElement("div");
    iContainer.setAttribute("class","icon--container");

    iContainer.appendChild(i);

    var bContainer = document.createElement("div");
    bContainer.setAttribute("class","box--container");
    bContainer.appendChild(iContainer);

    var tContainer = document.createElement("div");
    tContainer.setAttribute("class","text--container");
    tContainer.innerHTML = pElement;

    var cContainer = document.createElement("div");
   cContainer.setAttribute("class","content--container");
   cContainer.appendChild(bContainer);
   cContainer.appendChild(tContainer);

   document.getElementsByClassName("sub--container--one")[0].appendChild(cContainer);


}

var oneParaOne , oneParaTwo , twoParaOne , twoParaTwo , count;

oneParaOne = "fa fa-thumbs-up fa-lg";
oneParaTwo = "<p>drop a <b>like</b></p>";
twoParaOne = "fa fa-envelope fa-lg";
twoParaTwo = "<p>leave a <b>comment</b></p>";
count = 0;

var appendElements = setInterval(function(){

    if(count == 0){
        addElement(oneParaOne,oneParaTwo);
    }
    else if(count == 1){
        addElement(twoParaOne,twoParaTwo);
    }
    else{
        clearInterval(appendElements);
    }
    
    count++;

},900);

function swapDisplayProperty(){
    document.getElementsByClassName("sub--container--one")[0].setAttribute("style","display:none");
    document.getElementsByClassName("sub--container--two")[0].setAttribute("style","display:block");
}

setTimeout(swapDisplayProperty,3100);