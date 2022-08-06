const { wait } = require('../core/helper');
const hsvColors = require('./../core/colors');

flag = async (device, colors) => {
    for await (let color of colors) {
        console.log('Setting color: ' + color);
        await device.setColorHSV(color);
        await wait();
    }
}

module.exports.peruFlag = async (device) => {
    await flag(device, [hsvColors['red'], hsvColors['white'], hsvColors['red']]);
}

module.exports.boliviaFlag = async (device) => {
    await flag(device, [hsvColors['red'], hsvColors['yellow'], hsvColors['green']]);
};

module.exports.indonesia_flag = async (device) => {
    await flag(device, [hsvColors['red'], hsvColors['white']]);
}

module.exports.venezuelaFlag = async (device) => {
    await flag(device, [hsvColors['yellow'], hsvColors['blue'], hsvColors['red']]);
}

module.exports.colombiaFlag = async (device) => {
    await flag(device, [hsvColors['yellow'], hsvColors['blue'], hsvColors['red']]);
}