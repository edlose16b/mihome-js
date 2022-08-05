class DeviceRepository { }

DeviceRepository.prototype.setColorHSV = async function (hsv) { }
DeviceRepository.prototype.setPower = async function (power) { }
DeviceRepository.prototype.on = function (event, func) { }
DeviceRepository.prototype.getBrightness = async function () { }
DeviceRepository.prototype.setBrightness = async function (value) { }

module.exports = DeviceRepository;