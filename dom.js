//Selecting all the elements and buttons

const Points = document.querySelector(".Points");
//An amount of points R40 for Khayelitsha R25 for Dunoon R30 for  Mitchells Plain

const dropdowns = document.querySelector(".dropdown-content");
//This is a separate function on its own this drop down button will select which loacation she starts at.

const itemTypeRadio = document.querySelector(".itemTypeRadio");
//radio buttons select either Peak or off peak

const returnTripCheckbox = document.querySelector(".returnTripCheckbox");
//checkbox for return trips only selected if she had a return trip

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
// im trying to retrieve my factory functions to get the totals for the following :
//The total number of trips she can take
//The cost price per trip (single)
//The number of return trips she can make
//The cost per return trip
function mainfunctionTotals() {
    pricePerTripReturn.innerHTML = busTravelWidget.pricePerTripReturn();
    numberReturnTrips.innerHTML = busTravelWidget.numberReturnTrips();
    pricePerTripSingle.innerHTML = busTravelWidget.pricePerTripSingle();
    numberSingleTrips.innerHTML = busTravelWidget.numberSingleTrips();
}
calculateBtn.addEventListener("click", mainfunctionTotals);//event listener for the calculate button

////////////////////////////////////////////////////////////////////////////////
function TravelTimes() {
    //tryna check if she traveled peak or off peek times (which one was selected) 
    var checkedRadioBtn = document.querySelector("input[name='travelTimes']:checked");

    if (checkedRadioBtn) {

        // travelTimes will be 'Peak' or 'off-Peak' calculation was done on the factory function which I am about to link.       
        if (checkedRadioBtn.value === "Peak") {
            busTravelWidget.peakValue();
        }
        //what im tryna say is that if the checkedradiobtn gets the value of "call" /"sms" 
        //then we should call the baby function(Closures are baby functions) peakValue() and offPeakValue() to determine the value

        else if (checkedRadioBtn.value === "Off-Peak") {
            busTravelWidget.offPeakValue();
        }
    }

}
itemTypeRadio.addEventListener("click", TravelTimes);//event listener for the radio buttons

///////////////////////////////////////////////////////////////////////////////
function returnTripFunc() {
    var checkedBoxBtn = document.querySelector("input[name='returnTripCheckbox']:checked");
    //What I am trying to say is that if the checked box is seleceted it should return a value of return trips

    if (checkedBoxBtn) {
        if (checkedBoxBtn.value === "Return Trip") {
            busTravelWidget.returnTrip();
        }
    }
}
returnTripCheckbox.addEventListener("click", returnTripFunc);//event listener for the checked box
///////////////////////////////////////////////////////////////////////////////

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropbtnLocation() {
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function (event) {

    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");

        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];

            if (openDropdown.classList.contains('show')) {

                openDropdown.classList.remove('show');
            }
        }
    }
    dropdowns.innerHTML = busTravelWidget.startLocation();
}
dropdowns.addEventListener("click", dropbtnLocation);//event listener for the drop down menu for the location
// that needs to be selected I also included the factory function which will then add a certain amount of points
// depending on which location was selected. 