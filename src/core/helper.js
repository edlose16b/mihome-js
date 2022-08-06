
exports.wait = async (ms = 4500) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
exports.randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}


exports.loop = async (routine, steps = 99) => {

    let i = 1;
    while (i <= steps || steps == null) {
        i++;
        console.log('Step: ' + i);
        // print date now
        console.log(new Date());

        await routine();
        await exports.wait(2000);
    }
}