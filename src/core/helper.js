exports.wait = async (ms = 2500) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
exports.randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
