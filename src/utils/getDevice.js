export const getDevice = async () => {
  try {
    const uaData = await navigator.userAgentData.getHighEntropyValues(['platform', 'architecture']);

    if (uaData.platform === 'android') {
      return "Android";
    } else if (uaData.platform === 'ios') {
      return "iOS";
    } else {
      return "Desktop";
    }
  } catch (error) {
    console.error('User agent data unavailable', error);
    return "Unknown";
  }
}