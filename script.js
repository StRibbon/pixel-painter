var createDiv = function (color){
	var newDiv = document.createElement('DIV');
		newDiv.style.width = '30px';
		newDiv.style.height = '30px';
		newDiv.style.padding = '1px';
		newDiv.style.float = 'left';		
		newDiv.style.border = '1px black solid';
		newDiv.style.backgroundColor = color;
		return newDiv;

}

document.onload = function pixelPaint(){
	alert("Yo, Welcome to my Pixel Painter app");
	
	var container = document.createElement('container');
	container.style.width = '300px';
	container.style.position = 'fixed';

	document.body.appendChild(container);
	createGrid(container);
	createPaint(container);

}();

var paintBrush = "white";

function createGrid(elementToAppend){
	for (var i = 0; i < 104; i++){

		var newDiv = createDiv("white");

		if(i>95){
			newDiv.style.backgroundColor = "white";
			newDiv.style.borderColor = "white";	
		} else {
			newDiv.addEventListener('click', function(){
				this.style.backgroundColor = paintBrush;
			})
		}
		elementToAppend.appendChild(newDiv);
	}
}

function createPaint(elementToAppend){
	
	var colorArr = ["white", "red", "orange", "yellow", "green", "blue", "aqua", "purple"];
	for (var i = 0; i < 8; i++){
		var newDiv =document.createElement('div');
		newDiv.style.backgroundColor = colorArr[i];	
		newDiv.style.width = '30px';
		newDiv.style.height = '30px';
		newDiv.style.padding = '1px';
		newDiv.style.float = 'left';		
		newDiv.style.border = '1px black solid';

		newDiv.addEventListener("click",function(){
			paintBrush = this.style.backgroundColor;
		});
		elementToAppend.appendChild(newDiv);
	}
}



