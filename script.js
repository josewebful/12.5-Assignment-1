
/*Create an app that lets users choose to display between 1 and 50 random dog images, then prints the results to the console. The app should feature a form with a required input where users indicate the number of images to retrieve, and the input should default to 3. Use the endpoint described in the "DISPLAY MULTIPLE RANDOM IMAGES FROM ALL DOGS COLLECTION" section of this page of the DogAPI docs. */

'use strict';

function getDogImage(num){
  fetch('https://dog.ceo/api/breeds/image/random/'+ num)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson))
};

function watchForm(){
  $('form').submit(event =>{
    event.preventDefault();
    const num = $('#dog-images'). val();
    console.log(num);
    getDogImage(num);
  });
}

$(function(){
  watchForm();
});



/*    Part 2
function displayResults(responseJson){
  console.log(responseJson)
} */ 





