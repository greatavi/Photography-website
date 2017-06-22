/**
 * Created by z on 6/12/17.
 */
var index = 0;
function carousel(){
    var elements = document.getElementsByClassName("images");
    console.log("elements:", elements);
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
    }
    index++;
    if(index>elements.length){
        index = 1;
    }
    elements[index-1].style.display = "block";
    setTimeout(carousel,2000);
}
