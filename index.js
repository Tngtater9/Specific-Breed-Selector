'use strict';

function getDogImages() {
  fetch(getHowManyDogs())
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function getHowManyDogs() {
  let howMany = $('.num-of-dogs').val();
  if(howMany === ""){
    howMany = 3;
  }
  let howManyStr = String(howMany);
  return 'https://dog.ceo/api/breeds/image/random/' + howManyStr;
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new ones
  $(responseJson.message).each(function() {
    console.log(this);
  });
  $(responseJson.message).each(function() {
    $('figure').prepend(`<img src="${this}" class="results-img">`)
  });
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImages();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});