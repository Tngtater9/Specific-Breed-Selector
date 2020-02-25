'use strict';

function getDogImages() {
  fetch(getDogBreed())
    .then(response => {
      if(response.ok){
        return response.json();
      } else {
        throw new Error('Dog breed not found');
      }
    })
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => {
      alert(error, 'Dog breed not found');
      $('.results').addClass('hidden');
      $('.unhappy').removeClass('hidden');
    });
}

function getDogBreed() {
  let breed = $('.user-breed').val();
  if(breed === ""){
    alert("Please enter dog breed");
  }
  return "https://dog.ceo/api/breed/" + breed +"/images/random";
}

function displayResults(responseJson) {
  //replace the existing image with the new ones
    $('figure').html(`<img src="${responseJson.message}" class="results-img">`);

  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    $('.unhappy').addClass('hidden');
    getDogImages();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});