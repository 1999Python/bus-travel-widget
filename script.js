function BusTravelWidget() {


    var billTotal = 0;

    let location = {"Dunoon": 25, "Khayelitsha": 40, "MitchellsPlain": 30}

    function points() {

        let location = {"Dunoon": 25, "Khayelitsha": 40, "MitchellsPlain": 30}

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
        if (value === "Dunoon") {
            return 25;
        }
        if (value === "Khayelitsha") {
        return 40;
        }
        if (value === "Mitchells Plain") {
          return 30;
        } 

    }

    function numberSingleTrips() {
        pricePerTripSingle() % 1;
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
        points,
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