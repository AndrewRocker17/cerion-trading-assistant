const assert = require('assert');

describe('Trading Algorithm', function() {
    it('should return a valid signal', function() {
        const signal = getTradingSignal();
        assert(signal === 'buy' || signal === 'sell');
    });
});
