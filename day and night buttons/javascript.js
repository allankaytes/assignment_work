// var heading=$("h1");
// heading.hide();
// var jQuery=function(cssSelector){
// 	//returns alist of elements
// }

// Var $=jQuery;


// var headers=$("h1");
// headers.hide().show
// var paragraphs=$("p");

// 	console.log(paragraphs);




	//select the buttons
	var dayButton=$("#day");
	var nightButton=$("#night");

	//select the body
	var body=$("body");

	//listen for a button click
	dayButton.click(function(){
		body.removeClass("dark");
	});
	nightButton.click(function(){
		body.addClass("dark");
	});
	