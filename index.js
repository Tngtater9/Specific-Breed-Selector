'use strict';

function getDogImages() {
  fetch(getDogBreed())
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert(error, 'Dog breed not found'));
}

function getDogBreed() {
  let breed = $('.user-breed').val();
  if(breed === ""){
    alert("Please enter dog breed");
  }
  return "https://dog.ceo/api/breed/" + breed +"/images/random";
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new ones
    $('figure').html(`<img src="${responseJson.message}" class="results-img">`);

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