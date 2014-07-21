/*
 * Challenge: Loop through the party list, and create the necessary markup for the other guests, and the things they are bringing
 */

// Commonly used variables
var partyList = [
  { name: "Scott", bringing: ["beer"] },
  { name: "Arjun", bringing: ["candy"] },
  { name: "Sandy", bringing: ["chips", "salsa"] },
  { name: "Arvin", bringing: ["bourbon", "candy"] },
  { name: "Fredd", bringing: ["party hats"]},
  { name: "Tim", bringing: ["wine"]}
];

var $friends = $(".friends");
// A function that adds new people to our party list
function addPerson(name, bringing) {
  // Create the elements
  var $li = $("<li></li>");
  var $h2 = $("<h2></h2>");

// Assign the text
  $h2.text(name);
  
  // Append to the list item
  $li.append($h2);
  
  // Loop through, and add links to things the person is bringing
  $.each(bringing, function (i, item) {
    var $a = $("<a></a>");
    
    $a.text(item);
    $a.appendTo($li);
  });

  var $uninvite = $('<button class="uninvite">Uninvite</button>');
    $uninvite.appendTo($li);
    $li.appendTo($friends);
}

// Loop through our party list, and add people
$.each(partyList, function (i, person) {
  addPerson(person.name, person.bringing);
});

// Listen to the form's submit event, and add new friends
$("form").submit(function () {
  var $input = $(this).find("input[name=firstName]");
  var $checkboxes = $(this).find("input[type=checkbox]");
  var bringing = [];
  
  if ($input.val() === "") {
    $input.addClass("error");
    return false; 
  }
  
  // Loop through the checkboxes, and see what they're bringing
  $checkboxes.each(function () {
    if ( $(this).is(":checked") ) {
      bringing.push( $(this).val() );
    }
  });
  
  // Add the person
  addPerson($input.val(), bringing);
  
  // Clear the input field 
  $input.val("");
  
  return false;
});

// Uninvite friends
$(".friends").on("click", "button.uninvite", function(e) {
  $(this).closest("li").remove(); });

// Edit the person's name
$(".friends").on("dblclick", "h2", function (e) {
  var newName = prompt("What should I change it to?");

  if (typeof(newName) === "string") {
    $(this).text(newName);
  }
 
});

// Has it arrived?
$(".friends").on("click", "a", function (e) {
  $(this).addClass("arrived");
  return false;
});




// Blur event
$("input[name=firstName]").blur(function () {
  if ($(this).val() !== "") {
   $(this).removeClass("error"); 
  }
});



// reset check box after submit
//uncheck a food item




