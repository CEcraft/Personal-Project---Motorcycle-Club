var sliderIndex=1;function navIndex(e){showImage(sliderIndex+=e)}function showImage(e){var n=document.getElementsByClassName("slider");e>n.length&&(sliderIndex=1),e<1&&(sliderIndex=n.length);for(var d=0;d<n.length;d++)n[d].style.display="none";n[sliderIndex-1].style.display="grid"}showImage(sliderIndex);