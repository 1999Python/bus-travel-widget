function BusTravelWidget() {
   var locationAmount = 0;
   var singleTrip = 0;

    var billTotal = 0;

    let location = {"Dunoon": 25, "Khayelitsha": 40, "Mitchells Plain": 30}

    function pointsFunction() {

        let dropdowns = "";

        for (let key in location) {
            dropdowns += location[key];
          }

    }

    function returnTrip() {
        return startLocation;
    }

    function peakValue() {
        offPeakValue() * 25 / 100;

    }

    function offPeakValue() {

      return pricePerTripSingle();

    }

    function startLocation(value) {
    
       locationAmount = value
       return locationAmount

    }

 
    function numberSingleTrips() {
      
            if (locationAmount === "Dunoon") {
                singleTrip = points /25;
            }
            if (locationAmount === "Mitchells Plain") {
                singleTrip = points /30;
            }
            if (locationAmount === "Khayelitsha") {
                singleTrip = points /40;
            }
     }

    function pricePerTripSingle() {

        if (location.Dunoon === 25) {
            billTotal += 25;
        }
        if (location.Khayelitsha === 40) {
        billTotal += 40;
        }
        if (location.MitchellsPlain === 30) {
            billTotal += 30;
        }
    }

    function numberReturnTrips() { }

    function pricePerTripReturn() {

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