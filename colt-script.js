var body = document.getElementsByTagName('body')[0];
var newDiv;
var color = "white";

for(var i = 0; i < 500; i++){
    newDiv = document.createElement('DIV');
    body.appendChild(newDiv);
    newDiv.style.backgroundColor = color;
    newDiv.style.width = "1%";
    newDiv.style.float = "left";
    newDiv.style.border = "1px solid black";
    newDiv.style.paddingBottom = "1%";
    newDiv.addEventListener("click", function(){
        this.style.backgroundColor = color;
    })
}

var colors = ["red", "orange", "yellow", "green", "blue"];
colors.forEach(function(anything){
    var div = document.createElement("DIV");
    body.appendChild(div);
    div.style.width = "200px";
    div.style.border = "1px solid black";
    div.style.backgroundColor = anything;
    div.style.paddingBottom = "10%"

    div.addEventListener("click", function(){
        color = this.style.backgroundColor;
    });
})