// var divOne = document.createElement("div");
// var body = document.getElementsByTagName("body")[0];

// body.appendChild(divOne);
// divOne.className = "container";
// divOne.style.paddingBottom = "11.1%";
// divOne.style.backgroundColor = "black";
// divOne.style.width = "11.1%";
// divOne.style.float = "left";

// var divOne = document.createElement("div");
// body.appendChild(divOne);
// divOne.className = "container";
// divOne.style.paddingBottom = "11.1%";
// divOne.style.backgroundColor = "red";
// divOne.style.width = "11.1%";
// divOne.style.float = "left";

// var divOne = document.createElement("div");
// body.appendChild(divOne);
// divOne.className = "container";
// divOne.style.paddingBottom = "11.1%";
// divOne.style.backgroundColor = "black";
// divOne.style.width = "11.1%";
// divOne.style.float = "left";

var colors = ["red", "black"];

var makeDiv = function(color) {
	// declare variable
    var newDiv = document.createElement("div");
    // add to body of DOM
    document.body.appendChild(newDiv);
    // manipulate properties
    newDiv.className = "container";
    newDiv.style.paddingBottom = "11.1%";
    newDiv.style.backgroundColor = color;
    newDiv.style.width = "11.1%";
    newDiv.style.float = "left";
    // return variable
    return newDiv;
};

for (i = 0 ; i< 9*12; i++) {
	// for(j=0; j<12; j++)
// newDiv.style.background = colors[i] + 'liner-gradient(#000000, #ffffff)';
    makeDiv("white");
    makeDiv("red");
//     // makeDiv("blue");
//     // makeDiv ("green");
//     // makeDiv("purple");
//     // makeDiv("pink");
}

// for (i = 0 ; i< 6*12; i++) {
//     randomColor = Math.floor(Math.random()*16777215).toString(16);
//     makeDiv("#"+ randomColor);
// }

//linear-gradient( [ [ <angle> | [top | bottom] || [left | right] ],]? <color-stop>[, <color-stop>]+);
//background: linear-gradient(to bottom, rgba(73,155,234,1) 0%, rgba(227,32,136,1) 100%);
//make white div

var body = document.getElementsByTagName("body");

