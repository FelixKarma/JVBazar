var audioharrypotter = document.getElementById("harrypotter");
var imageharrypotter = document.getElementById("imageharrypotter");

imageharrypotter.addEventListener("mouseover", function() {
  audioharrypotter.play();
});

imageharrypotter.addEventListener("mouseout", function() {
    audioharrypotter.pause();
    audioharrypotter.currentTime = 0;
  });


  var audiothewitcher = document.getElementById("thewitcher");
  var imagethewitcher = document.getElementById("imagethewitcher");
  
  imagethewitcher.addEventListener("mouseover", function() {
    audiothewitcher.play();
  });
  
  imagethewitcher.addEventListener("mouseout", function() {
      audiothewitcher.pause();
      audiothewitcher.currentTime = 0;
    });