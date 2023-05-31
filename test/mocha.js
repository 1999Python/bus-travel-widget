
/**
 * DON'T change this file
 * 
 * if you find a reason for this file to be changed - such as a typo or calculation issue
 * 
 * please email - mentors@projectcodex.co - to discuss the required changes
 * 
 * DON'T change this file
 * 
 */
describe("The buy electricity app", function () {

    it("should return 0 if not topup made yet", function () {

        const electricity = electricity();

        assert.equal(0, electricity.getUnitsAvailable());
    })

    it("should allow a user to top-up electricity with 10", function () {

        const electricity = electricity();

        electricity.topUpelectricity(10);

        assert.equal(7, electricity.getUnitsAvailable());
    })

    it("should allow a user to top-up electricity with 20", function () {

        const electricity = electricity();

        electricity.topUpelectricity(20);

        assert.equal(14, electricity.getUnitsAvailable());
    })

    it("should allow a user to top-up electricity with 50", function () {

        const electricity = electricity();

        electricity.topUpelectricity(50);

        assert.equal(35, electricity.getUnitsAvailable());
    })

    it("should allow a user to top-up electricity multiple times", function () {

        const electricity = electricity();

        electricity.topUpelectricity(20);
        electricity.topUpelectricity(10);
        electricity.topUpelectricity(50);
        electricity.topUpelectricity(20);

        assert.equal(70, electricity.getUnitsAvailable());
    })

    it("should not allow a user to take advance more than once without paying the balance", function () {

        const electricity = electricity();

        electricity.topUpelectricity('advance');
        electricity.topUpelectricity('advance');

        assert.equal(21, electricity.getUnitsAvailable());
    })

    it("should allow a user to take advance and pay for the advance", function () {

        const electricity = electricity();

        electricity.topUpelectricity('advance');
        electricity.topUpelectricity(50);
        electricity.topUpelectricity('advance');

        assert.equal(56, electricity.getUnitsAvailable());
    })


    it("should allow a user to take advance and pay for the advance and use appliances", function () {

        const electricity = electricity();

        electricity.topUpelectricity('advance');
        assert.isTrue(electricity.advanceTaken());

        electricity.topUpelectricity(20);
        assert.equal(21, electricity.getUnitsAvailable());
        assert.isTrue(electricity.advanceTaken());

        // advanced ignored as you still owe R10
        electricity.topUpelectricity('advance');
        electricity.topUpelectricity(20);
        assert.isFalse(electricity.advanceTaken());
        assert.equal(28, electricity.getUnitsAvailable());

        assert.isTrue(electricity.useAppliance('TV'));

        // advanced is valid now
        electricity.topUpelectricity('advance');

        assert.equal(46, electricity.getUnitsAvailable());
    })

    it("should allow appliances usage", function () {

        const electricity = electricity();

        electricity.topUpelectricity(50);
        assert.isTrue(electricity.useAppliance('TV'));
        assert.isTrue(electricity.useAppliance('Kettle'));

        assert.equal(27, electricity.getUnitsAvailable());

    })

    it("should not allow appliance usage if not enough electricity", function () {

        const electricity = electricity();

        electricity.topUpelectricity(10);

        assert.isTrue(electricity.useAppliance('TV'));
        assert.equal(4, electricity.getUnitsAvailable());
        
        assert.isFalse(electricity.useAppliance('Stove'));
        assert.equal(4, electricity.getUnitsAvailable());
        
        assert.isTrue(electricity.useAppliance('TV'));
        assert.equal(1, electricity.getUnitsAvailable());

        assert.isFalse(electricity.useAppliance('TV'));

        assert.equal(1, electricity.getUnitsAvailable());

    })

    it("should allow electricity usage after topping up with advance", function () {

        const electricity = electricity();

        electricity.topUpelectricity(10);
        assert.isTrue(electricity.useAppliance('TV'));

        // not enough electricity units (4 available)
        assert.isFalse(electricity.useAppliance('Stove'));
        assert.isFalse(electricity.useAppliance('Fridge'));
        assert.isFalse(electricity.useAppliance('Kettle'));

        electricity.topUpelectricity('advance');
        assert.isTrue(electricity.useAppliance('Fridge'));
        assert.isTrue(electricity.useAppliance('Stove'));

        assert.equal(2, electricity.getUnitsAvailable());

    });

    it("should calculate the total amount spent", function() {
        const electricity = electricity();
        
        // electricity.topUpelectricity(20);  // 14
        electricity.topUpelectricity(10);  // 7
        electricity.topUpelectricity(50);  // 35
        electricity.topUpelectricity(20);  // 14

        assert.equal(80, electricity.totalAmountSpent());
    });

    it("should calculate the total amount units bought", function() {
        const electricity = electricity();

        electricity.topUpelectricity(20);  // 14
        electricity.topUpelectricity(10);  // 7
        electricity.topUpelectricity(50);  // 35
        electricity.topUpelectricity(20);  // 14

        electricity.useAppliance("TV")
        electricity.useAppliance("Kettle")

        assert.equal(100, electricity.totalAmountSpent());
        assert.equal(62, electricity.getUnitsAvailable());
        assert.equal(70, electricity.totalUnitsBought());
    });

})