import {Health} from './tam.js';
import $ from 'jquery';
import 'popper.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


function giphyApi(giphy) {
  let request = new XMLHttpRequest();
  let url = `https://api.giphy.com/v1/gifs/${giphy}?api_key=${process.env.API_KEY}`;
  console.log(giphy, url);
  let response;

  request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      response = JSON.parse(this.responseText);
      getElements(response);
    }
    console.log(response);
  };
  request.open("GET", url, true);
  request.send();
  const getElements = function(response) {

  $('#face').attr("src", response.data.images.fixed_height.url);

  };
} //SAVE FOREVER!!!! ONLY WAY TO GET API TO WORK WITH REMOTE KEY PHRASES FROM BUTTONS??

function hideButtons() {

  $(".buttons").hide();
  let buttonTimer = setInterval(() => {
    $(".buttons").show();
    let standardImg = "AxVvjLHVphDkYB7lPW";
    giphyApi(standardImg);
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



    function sleeping() {
      $(".buttons").hide();
      $(".snoozeButton").show();
      $("#cleanSleep").click(function() {
        health.clean();
      });
      $("#wakeUp").click(function() {
        $(".snoozeButton").hide();
        let standardImg = "AxVvjLHVphDkYB7lPW";
        giphyApi(standardImg);
        $(".buttons").show();
      });

    }



    $("button#feed").click(function() {
      health.feed();
      hideButtons();
      if(health.species === "woodelf"){
        let hungryElf = "4tsDpxebSMpWg";
        giphyApi(hungryElf);
      } else if (health.species === "dwarf") {
        let hungryDwarf = "TtTQm7mNgXZVS";
        giphyApi(hungryDwarf);
      } else {
        let hungryHobbit = "xT9IgGm3x1h8SpacZa";
        giphyApi(hungryHobbit);
      }
    });
    $("button#love").click(function() {
      health.affection();
      hideButtons();
      if(health.species === "woodelf"){
        let lovingElf = "l1AvzOcybgkRFy5gI";
        giphyApi(lovingElf);
      } else if (health.species === "dwarf") {
        let lovingDwarf = "26vUxJ9rqfwuIEkTu";
        giphyApi(lovingDwarf);
      } else {
        let lovingHobbit = "as1PZn0ZUdzPy";
        giphyApi(lovingHobbit);
      }
    });
    $("button#walk").click(function() {
      health.walk();
      hideButtons();
      if(health.species === "woodelf"){
        if (health.walksScore === 1) {
          let walkingElf = "xUySTQZg4E7yeIZ6bC";
          giphyApi(walkingElf);
        } else if (health.walkScore === 3) {
          let walkingElf = "3ohA2OnWq54vLFSrbG";
          giphyApi(walkingElf);
        } else {
          let walkingElf = "oBTCwXvs0SUNO";
          giphyApi(walkingElf);
        }
      } else if (health.species === "dwarf") {
        if (health.walksScore === 1) {
          let walkingDwarf = "Red9i0GN54sZW";
          giphyApi(walkingDwarf);
        } else if (health.walkScore === 3) {
          let walkingDwarf = "55itGuoAJiZEEen9gg";
          giphyApi(walkingDwarf);
        } else {
          let walkingDwarf = "AOqKdtVvmMAI8";
          giphyApi(walkingDwarf);
        }
      } else {
        if (health.walksScore === 1) {
          let walkingHobbit = "HVr4gFHYIqeti";
          giphyApi(walkingHobbit);
        } else if (health.walkScore === 3) {
          let walkingHobbit = "xTCoBNcRs7rtC";
          giphyApi(walkingHobbit);
        } else {
          let walkingHobbit = "77XFlQcUpzn0I";
          giphyApi(walkingHobbit);
        }
      }
    });
    $("button#sleep").click(function() {
      health.sleep();
      sleeping();

      if(health.species === "woodelf"){
        let sleepyElf = "3ofT5Em3FLklVV7Wvu";
        giphyApi(sleepyElf);
      } else if (health.species === "dwarf") {
        let sleepyDwarf = "FeVGuC9aKrWp2";
        giphyApi(sleepyDwarf);
      } else {
        let sleepyHobbit = "gDuVoZ3rAl4ac";
        giphyApi(sleepyHobbit);
      }
    });
    $("button#clean").click(function() {
      health.clean();
      hideButtons();
      if(health.species === "woodelf"){
        let cleaningElf = "3ShsZtkhtxfna";
        giphyApi(cleaningElf);
      } else if (health.species === "dwarf") {
        let cleaningDwarf = "nOqDm37B67gcg";
        giphyApi(cleaningDwarf);
      } else {
        let cleaningHobbit = "hRu4FIqclYQw0";
        giphyApi(cleaningHobbit);
      }
    });
    $('.userInput').hide();
    $('.tamagotchi').show();


    setInterval(() => {
      health.setPar();
      $("#viewHealth").text(health.healthLevel);
      $('#mess').text(health.mess);
      if (health.healthLevel < 1) {
        $(".buttons").hide();
        if(health.species === "woodelf"){
          let deadElf = "MnK2LZwG66iyc";
          giphyApi(deadElf);
        } else if (health.species === "dwarf") {
          let deadDwarf = "BAJEfS99cIUHS";
          giphyApi(deadDwarf);
        } else {
          let deadHobbit = "a2BVoaIwE0jxS";
          giphyApi(deadHobbit);
        }

      }

    }, 500);



  });
});
