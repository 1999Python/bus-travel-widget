function BusTravelWidget() {


    var billTotal = 0;

    let location = {"Dunoon": 25, "Khayelitsha": 40, "MitchellsPlain": 30}

    function points() {

        let location = {"Dunoon": 25, "Khayelitsha": 40, "MitchellsPlain": 30}

        let dropdowns = "";

        for (let Dunoon in location) {
            dropdowns += location[Dunoon];
        }

        for (let Khayelitsha in location) {
            dropdowns += location[Khayelitsha];
        }

        for (let MitchellsPlain in location) {
            dropdowns += location[MitchellsPlain];
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

    function startLocation() {

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