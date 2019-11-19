import {Health} from './tam.js'
import $ from 'jquery';
import 'popper.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function hideButtons() {

  $(".buttons").hide();
  let buttonTimer = setInterval(() => {
    $(".buttons").show();
    clearInterval(buttonTimer);
  }, 5000);
}



$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();
    const name = $('input#nameInput').val();
    const species = $('input:radio[name=speciesType]:checked').val();

    const health = new Health(name,species);
    health.setHealth();
    health.makeMess();
    $('#inputName').text(health.name);
    $('#species').text(health.species);
    console.log(health.healthLevel);
    console.log(health.mess);
    console.log(process.env.API_KEY);
    let request = new XMLHttpRequest();
    const url = `https://api.giphy.com/v1/gifs/${"sleeping" + health.species}?api_key=${process.env.API_KEY}`;
    let sleepingwoodelf = "3ofT5Em3FLklVV7Wvu"

    request.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      let response = JSON.parse(this.responseText);
      getElements(response);
}
    };

    request.open("GET", url, true);
    request.send();

    const getElements = function(response) {

      $('#face').attr("src", response.data.images.original.url);

    }

    $("button#feed").click(function() {
      health.feed();
      hideButtons();
    });
    $("button#love").click(function() {
      health.affection();
      hideButtons();
    });
    $("button#walk").click(function() {
      health.walk();
      hideButtons();
    });
    $("button#sleep").click(function() {
      health.sleep();
      hideButtons();
    });
    $("button#clean").click(function() {
      health.clean();
      hideButtons();
    });
    $('.userInput').hide();
    $('.tamagotchi').show();


    setInterval(() => {
      health.setPar();
      $("#viewHealth").text(health.healthLevel);
      $('#mess').text(health.mess);
      console.log(health.healthLevel);
      console.log(health.mess);
    }, 500)

  });
});
