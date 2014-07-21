var images = [
  "http://placekitten.com/g/500/300",
  "http://placekitten.com/g/500/301",
  "http://placekitten.com/g/500/302"
];

var index = 0;
var title = $("h1");
var slideshow = $(".slides");

$.each(images, function (index, imageURL) {
  // Create an image
  // Set the image's src to imageURL
  
  var img = $("<img>").attr("src", imageURL);
  
  // Create an LI
  // Append the img to the LI
  var li = $("<li></li>").append(img);
  
  // Appedn the LI to the Slideshow
  slideshow.append(li);
});

  var slides = slideshow.find("li");
  var slideNum = slides.length;

$("a").click(function () {
  var isPrev = $(this).hasClass("prev");

  if (isPrev && index > 0) {
    index--; 
  } else if (!isPrev && index < slideNum - 1) {
    index++; 
  }
  

  title.text("The index is " + index);
  slideshow.css("left", (index * -100) + "%");

  return false;
});