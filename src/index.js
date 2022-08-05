require('dotenv').config();
const mihome = require('node-mihome');
const hsvColors = require('./core/colors');
const { wait } = require('./core/helper');
const DeviceRepository = require('./device-repository');
// Routines
const { peruFlag, boliviaFlag, venezuelaFlag } = require('./routines');


// local miIO
mihome.miioProtocol.init();

// // local Aqara (ZigBee)
// mihome.aqaraProtocol.init();

// cloud MIoT
const username = process.env.USERNAME;
const password = process.env.PASSWORD;

class SampleDevice extends DeviceRepository {

    async setPower(power) {
        console.log('Powering device: ' + power);
        return { 'changed': true }
    }

    async setColorHSV(hsv) {
        console.log('Setting color: ' + hsv);
    }

    on(event, fun) {
        console.log('Event: ' + event);
    }

    async getBrightness() {
        console.log('Getting brightness');
        return 20;
    }
}


// create asyn function called main 
async function main() {

    // var deviceMocked = new SampleDevice();

    // await mihome.miCloudProtocol.login(username, password);

    // const options = { country: 'us' };
    // var devices = await mihome.miCloudProtocol.getDevices(null, options);
    // console.log(devices);

    // var deviceJson = await mihome.miCloudProtocol.getDevice('xxx', options);
    // console.log(deviceJson);


    const device = mihome.device({
        id: process.env.DEVICE_ID,
        model: process.env.DEVICE_MODEL,
        address: process.env.DEVICE_ADDRESS,
        token: process.env.DEVICE_TOKEN,
        refresh: 30000,
    });


    device.on('properties', (data) => {
        console.log('onListen', data);
    });

    // var responsePower = await device.setPower(true);


    await device.setColorHSV(hsvColors['white']);

    console.log('Finished');
    return Promise.resolve();


}

main();

