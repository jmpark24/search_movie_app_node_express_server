import os from 'os';
const getServerIp = () => {
    var _a;
    const interfaces = os.networkInterfaces();
    let result;
    for (let dev in interfaces) {
        (_a = interfaces[dev]) === null || _a === void 0 ? void 0 : _a.forEach((details) => {
            if (details.family === 'IPv4' && !details.internal) {
                result = details.address;
            }
        });
    }
    return result;
};
export default getServerIp;
