var descriptions = ["Woman with a Parasol - Madame Monet and Her Son, 1875", "Morning Haze, 1888",
                    "Palazzo da Mula, Venice, 1908", "The Seine at Giverny, 1897", "Woman Seated under the Willows, 1880",
                    "The Houses of Parliament, Sunset, 1903", "The Japanese Footbridge, 1899"];

var images = ["/assets/paintings/painting1.jpg", "/assets/paintings/painting2.jpg", "/assets/paintings/painting3.jpg",
              "/assets/paintings/painting4.jpg", "/assets/paintings/painting5.jpg", "/assets/paintings/painting6.jpg",
              "/assets/paintings/painting7.jpg"];

AFRAME.registerComponent('next', {
  init: function() {
    var i=0;
    var sphere = document.getElementById('next');
    sphere.addEventListener('click', function() {
      i=i+1;
      var description = descriptions[i];
      var image = images[i];
      document.getElementById('painting').setAttribute("src", image);
      document.getElementById('description').setAttribute("text", "value", description);
    });
  }
});


function hideInstructions() {
  document.querySelector('.instructions').setAttribute('visible', 'false');
}
setTimeout(hideInstructions, 5000);
