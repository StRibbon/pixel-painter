
document.onload = function addPixels(){
	var colorChoice = "";
	console.log("hi");

	var container = document.createElement('p');
	container.style.width = '300px';
	document.body.appendChild(container);

	createGrid(container);
	createPaintPallette(container);
	addClickEvent();

}();

function createGrid(elementToAppend){
		for (var i = 0; i < 104; i++){
		
		var newDiv = document.createElement('div');		
		newDiv.style.width = '30px';
		newDiv.style.height = '30px';
		newDiv.style.padding = '1px';
		newDiv.style.float = 'left';		
		newDiv.style.border = '1px black solid';
		elementToAppend.appendChild(newDiv);
	}
}


function currentColor(chosenColor, clickedDiv) {
	clickedDiv.style.backgroundColor = 'chosenColor';
}


function createPaintPallette(elementToAppend){

  var newDiv1 = document.createElement('div');		
  newDiv1.style.width = '30px';
  newDiv1.style.height = '30px';
  newDiv1.style.padding = '1px';
  newDiv1.style.float = 'left';		
  newDiv1.style.border = '1px black solid';
  newDiv1.style.backgroundColor = "purple";
  newDiv1.id = "purple";

  var newDiv2 = document.createElement('div');		
  newDiv2.style.width = '30px';
  newDiv2.style.height = '30px';
  newDiv2.style.padding = '1px';
  newDiv2.style.float = 'left';		
  newDiv2.style.border = '1px black solid';
  newDiv2.style.backgroundColor = "green";
  newDiv2.id = "green";

  newDiv1.addEventListener('click', function(){
  	console.log(newDiv1.style.backgroundColor)
  	colorChoice = newDiv1.style.backgroundColor
  })

  newDiv2.addEventListener('click', function(){
  	console.log(newDiv2.style.backgroundColor)
  })

  elementToAppend.appendChild(newDiv1);
  elementToAppend.appendChild(newDiv2);
}


function addClickEvent(){

	var paintPallette = document.querySelectorAll('div');

	for (var i = paintPallette.length - 1; i >= 0; i--) {
		paintPallette[i].addEventListener('click',function(){
			
			if (this.style.backgroundColor !== "white") {
				this.style.backgroundColor="white";
			}else{
				currentColor(colorChoice,this);
			}
		})
	};

}















