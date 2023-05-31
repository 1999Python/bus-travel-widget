

describe("The bus travel app", function () {

    it("should return 25 for a single trip to Dunoon", function () {

        const busTravelWidget = busTravelWidget(25);

        assert.equal(25, busTravelWidget.numberSingleTrips());
    })

    it("should return 30 for a single trip to Mitchells Plain", function () {

        const busTravelWidget = busTravelWidget();

        busTravelWidget.numberSingleTrips(30);

        assert.equal(30, busTravelWidget.numberSingleTrips());
    })

    it("should return 40 for a single trip to Khayelitsha", function () {

        const busTravelWidget = busTravelWidget();

        busTravelWidget.numberSingleTrips(40);

        assert.equal(40, busTravelWidget.numberSingleTrips());
    })

    it("should 0 if a location was not selected.", function () {

        const busTravelWidget = busTravelWidget();

        busTravelWidget.numberSingleTrips(0);

        assert.equal(0, busTravelWidget.numberSingleTrips());
    })

    it("should allow a user to buy numerous tickets times", function () {

        const busTravelWidget = busTravelWidget();

        busTravelWidget.startLocation(25);
        busTravelWidget.startLocation(40);
        busTravelWidget.startLocation(30);
       

        assert.equal(95, busTravelWidget. numberSingleTrips());
    })










})