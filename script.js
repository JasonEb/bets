function newCard() {
	//Starting loop through each square card
  var values = ["1","2","3","4","5","6","7","8","yellow","orange","red","purple","blue","aqua","green","lime"];
  var newValues = shuffle(values);
  console.log(newValues);

	for(var i=0; i < 16; i++) {  //<--always this code for loops. change in red
    var value = values[i];
		setSquare(i, value);
  }
}

function setSquare(index, value) {
	var currSquare = "square"+index;
  var colorsString ="yelloworangeredpurpleblueaquagreenlime";
  var element = document.getElementById(currSquare);

  if( colorsString.includes(value) ) {
    element.bgColor = value;
  } else {
    element.innerHTML = value;
  }

  //add img heart tag
  var heart = document.createElement("img");
  heart.src = "heart-icon.png";
  heart.className = "inactive";

  heart.removeEventListener("click", markSquare);
  heart.addEventListener("click", markSquare);
  element.append(heart);
}

function anotherCard() {
	newCard();
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return [...array];
}

function markSquare(e) {
  e.preventDefault();

  e.target.className == "active" ? e.target.className = "inactive" : e.target.className = "active"
}