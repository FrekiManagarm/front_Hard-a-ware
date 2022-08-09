import MobileDetect from 'mobile-detect';

export function getDeviceType(req = null) {
  let userAgent;
  let deviceType;
  if (req) {
    userAgent = req.headers['user-agent'];
  } else {
    userAgent = window.navigator.userAgent;
  }
  
  const md = new MobileDetect(userAgent);
  if (md.tablet()) {
    deviceType = 'tablet';
  } else if (md.mobile()) {
    deviceType = 'mobile';
  } else {
    deviceType = 'desktop';
  }
  return deviceType;
}