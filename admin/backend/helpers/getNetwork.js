const os = require('os');

const networkInterfaces = os.networkInterfaces();
const interfaceName = 'eth0';
const interfaceData = networkInterfaces[interfaceName] || [];
const interfaceInfo = interfaceData.find(info => info.family === 'IPv4' && !info.internal);
const host = interfaceInfo ? interfaceInfo.address : 'localhost';

module.exports = { host }