//Selecting all the elements and buttons

const Points = document.querySelector(".Points");
//An amount of points

const startLocation = document.querySelector(".dropbtn");
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
    
            // billItemType will be 'call' or 'sms'
            if (checkedRadioBtn.value === "Peak") {
                busTravelWidget.sendsms();
                //what im tryna say is that if the checkedradiobtn gets the value of "call" /"sms" 
                //then we should call the baby function makeCall and the same for sms 
            }
            else if (checkedRadioBtn.value === "Off-Peak") {
                busTravelWidget.makeCall();
    
            }
    
        }
    
        // callTotalSettings.innerHTML = billSettings.getTotalcallCost().toFixed(2);
    
        // smsTotalSettings.innerHTML = billSettings.getTotalsmsCost().toFixed(2);
    
        // totalSettings.innerHTML = billSettings.getTotalCost().toFixed(2);
    
    
    }
    
    itemTypeRadio.addEventListener("click", TravelTimes);




























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