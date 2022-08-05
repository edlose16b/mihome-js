
const hsvColors = require('./../core/colors');
const { wait } = require('./../core/helper');

module.exports = async (device) => {


    await device.setColorHSV(hsvColors['yellow']);
    await wait();


    await device.setColorHSV(hsvColors['blue']);
    await wait();


    await device.setColorHSV(hsvColors['red']);
    await wait();
}