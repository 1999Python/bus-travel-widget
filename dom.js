//Selecting all the elements and buttons

const Points = document.querySelector(".Points");
//An amount of points

const dropdowns = document.querySelector(".dropdown-content");
//This is a separate function on its own this drop down button will select which loacation she starts at.

const itemTypeRadio = document.querySelector(".itemTypeRadio");
//radio buttons select either Peak or off peak

const returnTripCheckbox = document.querySelector(".returnTripCheckbox");
//checkbox for return trips oly selected if she had a return trip

const calculateBtn = document.querySelector(".calculateBtn");
//calculate button

const numberSingleTrips = document.querySelector(".numberSingleTrips");
//The total number of trips she can take

const pricePerTripSingle = document.querySelector(".pricePerTripSingle");
//The cost price per trip (single)

const numberReturnTrips = document.querySelector(".numberReturnTrips");
//The number of return trips she can make

const pricePerTripReturn = document.querySelector(".pricePerTripReturn");
//The cost per return trip

const busTravelWidget = BusTravelWidget();//factory function 
///////////////////////////////////////////////////////////////////////////////

function TravelTimes() {
    //tryna check if she traveled peak or off peek times (which one was selected) 
        var checkedRadioBtn = document.querySelector("input[name='travelTimes']:checked");
    
        if (checkedRadioBtn) {
    
// travelTimes will be 'Peak' or 'off-Peak' calculation was done on the factory function which I am about to link.       
if (checkedRadioBtn.value === "Peak") {
                busTravelWidget.peakValue();
//what im tryna say is that if the checkedradiobtn gets the value of "call" /"sms" 
//then we should call the baby function(Closures are baby functions) peakValue() and offPeakValue() to determine the value
            }
            else if (checkedRadioBtn.value === "Off-Peak") {
                busTravelWidget.offPeakValue();
            }
        }
        
    
    
    }
    itemTypeRadio.addEventListener("click", TravelTimes);

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropbtnLocation() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  window.onclick = function(event) {

    if (!event.target.matches('.dropbtn')) {

      var dropdowns = document.getElementsByClassName("dropdown-content");
    
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        
        if (openDropdown.classList.contains('show')) {

          openDropdown.classList.remove('show');
        }
      }
    }
    dropdowns = busTravelWidget.startLocation();
  }
  dropdowns.addEventListener("click",  dropbtnLocation);