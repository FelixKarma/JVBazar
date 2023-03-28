/*musique page jeux de role pc*/
if(document.location.href.includes("jeuxpcjeuxderole.html")) {
var audioharrypotter = document.getElementById("harrypotter");
var imageharrypotter = document.getElementById("imageharrypotter");

imageharrypotter.addEventListener("mouseover", function () {
  audioharrypotter.play();
});

imageharrypotter.addEventListener("mouseout", function () {
  audioharrypotter.pause();
  audioharrypotter.currentTime = 0;
});


var audiothewitcher = document.getElementById("thewitcher");
var imagethewitcher = document.getElementById("imagethewitcher");

imagethewitcher.addEventListener("mouseover", function () {
  audiothewitcher.play();
});

imagethewitcher.addEventListener("mouseout", function () {
  audiothewitcher.pause();
  audiothewitcher.currentTime = 0;
});
}

/*musique page jeux action pc*/
if(document.location.href.includes("jeuxpcaction.html")) {
var audiogta = document.getElementById("gta");
var imagegta = document.getElementById("imagegta");

imagegta.addEventListener("mouseover", function () {
  audiogta.play();
});

imagegta.addEventListener("mouseout", function () {
  audiogta.pause();
  audiogta.currentTime = 0;
});


var audiordr = document.getElementById("rdr");
var imagerdr = document.getElementById("imagerdr");

imagerdr.addEventListener("mouseover", function () {
  audiordr.play();
});

imagerdr.addEventListener("mouseout", function () {
  audiordr.pause();
  audiordr.currentTime = 0;
});
}

/*musique page jeux aventure pc*/
if(document.location.href.includes("jeuxpcaventure.html")) {
  var audiominecraft = document.getElementById("minecraft");
  var imageminecraft = document.getElementById("imageminecraft");
  
  imageminecraft.addEventListener("mouseover", function () {
    audiominecraft.play();
  });
  
  imageminecraft.addEventListener("mouseout", function () {
    audiominecraft.pause();
    audiominecraft.currentTime = 0;
  });
  
  
  var audiogow = document.getElementById("gow");
  var imagegow = document.getElementById("imagegow");
  
  imagegow.addEventListener("mouseover", function () {
    audiogow.play();
  });
  
  imagegow.addEventListener("mouseout", function () {
    audiogow.pause();
    audiogow.currentTime = 0;
  });
  }

  /*musique page jeux console horreur*/
  if(document.location.href.includes("jeuxhorreurconsole.html")) {
    var audiodead = document.getElementById("dead");
    var imagedead = document.getElementById("imagedead");
    
    imagedead.addEventListener("mouseover", function () {
      audiodead.currentTime = 25;
      audiodead.play();
    });
    
    imagedead.addEventListener("mouseout", function () {
      audiodead.pause();
      audiodead.currentTime = 0;
    });
    
    
    var audioresident = document.getElementById("resident");
    var imageresident = document.getElementById("imageresident");
    
    imageresident.addEventListener("mouseover", function () {
      audioresident.currentTime = 2*60 +9;
      audioresident.play();
    });
    
    imageresident.addEventListener("mouseout", function () {
      audioresident.pause();
      audioresident.currentTime = 0;
    });
    }