// SLIDER APP
var sliderIndex = 1;

showImage(sliderIndex);

  function navIndex(n){
    showImage(sliderIndex += n);
  };

  function showImage(n){
    var slide = document.getElementsByClassName('slider');

    if (n > slide.length) {sliderIndex = 1};
    if (n < 1) {sliderIndex = slide.length};

    for (var i = 0; i < slide.length ; i++){
      slide[i].style.display = "none";
    };
    slide[sliderIndex - 1].style.display = "grid"
  };
