"use strict";
const button = document.querySelector(".button");
let inputValue = document.querySelector(".inputValue");
let name = document.querySelector(".name");
let desc = document.querySelector(".desc");
let temp = document.querySelector(".temp");

button.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputValue.value +
      "$APPID=4d717b4c8a73e5953333d7b53945ddf5"
  )
    .then((response) => response.json())
    .then((data) => {
      let nameValue = data["name"];
      let tempValue = data["main"]["temp"];
      let descValue = data["weather"][0]["description"];

      name.textContent = nameValue;
      temp.textContent = tempValue;
      desc.textContent = descValue;
    });

  //.catch((err) => alert("Wrong city name!"));
});
