const hsvColors = require('./../core/colors');
const { wait } = require('./../core/helper');

module.exports = async (device) => {

    await device.setColorHSV(hsvColors['red']);
    await wait(3000);
    await device.setColorHSV(hsvColors['white']);
    await wait(3000);
}