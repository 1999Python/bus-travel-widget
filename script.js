function BusTravelWidget() {
//variables created to hold the totals and calculations 
    var locationAmount = 0;
    var singleTrip = 0;
    var totalTrips = 0;
    var singleReturn = 0;
    var totalReturn = 0;
  
let location = { "Dunoon": 25, "Khayelitsha": 40, "Mitchells Plain": 30 }// the cost of the trips for specefic locations 

    function pointsFunction() {
//trying to get the amount of points for the location chosen (for in looping)
        let dropdowns = "";

        for (let key in location) {
            dropdowns += location[key];
        }

    }

    function returnTrip() {
        if (locationAmount === "Dunoon") {
            singleTrip = points / 50;
        }
        if (locationAmount === "Mitchells Plain") {
            singleTrip = points / 60;
        }
        if (locationAmount === "Khayelitsha") {
            singleTrip = points / 80;
        }
    }

    function peakValue() { ///On peak hours you have to pay 25% more than the normal price
       locationAmount * 25 / 100;

    }

    function offPeakValue() {// normal amount without the peak price 

        return locationAmount;

    }

    function startLocation(value) {

        locationAmount = value
        return locationAmount

    }


    function numberSingleTrips() {

        if (locationAmount === "Dunoon") {
            singleTrip = points / 25;
        }
        if (locationAmount === "Mitchells Plain") {
            singleTrip = points / 30;
        }
        if (locationAmount === "Khayelitsha") {
            singleTrip = points / 40;
        }
    }

    function pricePerTripSingle(amount) {

        if (amount -= 25) {
            "Dunoon";
        }
        if (amount -= 40) {
            "Khayelitsha";
        }
        if (amount -= 30) {
            "Mitchells Plain";
        }
    }

    function numberReturnTrips() { 
       return totalReturn
    }

    function pricePerTripReturn() {
        return singleReturn
    }


    return {
        pointsFunction,
        returnTrip,
        peakValue,
        offPeakValue,
        numberSingleTrips,
        pricePerTripSingle,
        numberReturnTrips,
        pricePerTripReturn,
        startLocation
    }


}