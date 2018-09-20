const fakeGame = require('../services/ff');

jest.useFakeTimers();

test('waits 1 second before ending the game', (done) => {
    const cb = (arg) => {
        expect(arg).toEqual(1);
        done();
    }

    //jest.runAllTimers();
    fakeGame(cb)
    jest.runAllTimers();
    //expect(setTimeout).toHaveBeenCalledTimes(1);
    //expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
  });