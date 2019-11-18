import {Health} from './tam.js'
import $ from 'jquery';
import 'popper.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';



$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();
    const name = $('input#nameInput').val();
    const species = $('input:radio[name=speciesType]:checked').val();

    const health = new Health(name,species);
    health.setHealth();
    health.makeMess();
    console.log(health.healthLevel);
    console.log(health.mess);
    $("button#feed").click(function() {
      health.feed();
    });
    $("button#love").click(function() {
      health.affection();
    });
    $("button#walk").click(function() {
      health.walk();
    });
    $("button#sleep").click(function() {
      health.sleep();
    });
    $("button#clean").click(function() {
      health.clean();
    });
    $('.userInput').hide();
    $('.tamagotchi').show();


    setInterval(() => {
      health.setPar();
      $("#viewHealth").text(health.healthLevel);
      console.log(health.healthLevel);
      console.log(health.mess);
    }, 500)

  });
});
