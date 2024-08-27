import os from 'os';

const getServerIp = (): string | undefined => {
  const interfaces: NodeJS.Dict<os.NetworkInterfaceInfo[]> = os.networkInterfaces();
  let result: string | undefined;

  for (let dev in interfaces) {
    interfaces[dev]?.forEach((details: os.NetworkInterfaceInfo) => {
      if (details.family === 'IPv4' && !details.internal) {
        result = details.address;
      }
    });
  }

  return result;
};

export default getServerIp;
