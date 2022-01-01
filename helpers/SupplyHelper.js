var BigNumber = require('bignumber.js');

module.exports = {
    /**
     *
     * @param {Number} height
     * @return {BigNumber}
     */
    getTotalSupplyByHeight: function (height) {
        var newHeightSinceGenesis = height - 798;
        var newCoinSinceGenesis = newHeightSinceGenesis * 1250;
        var supply = newCoinSinceGenesis + 79800000000;
        return (new BigNumber(supply));
    }

};
