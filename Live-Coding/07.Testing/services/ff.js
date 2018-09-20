module.exports = function timerNumber(cb) {
    setTimeout(() => {
        cb(1);
    }, 100000);
}