//Selecting all the elements and buttons
const Points = document.querySelector(".Points");

const enterButton = document.querySelector(".enter");

const itemTypeRadio = document.querySelector(".itemTypeRadio");

const returnTripCheckbox = document.querySelector(".returnTripCheckbox");

const calculateBtn = document.querySelector(".calculateBtn");

const numberSingleTrips = document.querySelector(".numberSingleTrips");

const pricePerTripSingle = document.querySelector(".pricePerTripSingle");

const numberReturnTrips = document.querySelector(".numberReturnTrips");

const pricePerTripReturn = document.querySelector(".pricePerTripReturn");

const busTravelWidget = BusTravelWidget();//factory function 





























/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }