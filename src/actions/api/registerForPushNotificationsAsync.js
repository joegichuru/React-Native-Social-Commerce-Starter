
import Permissions from "react-native-permissions"
import DeviceInfo from "react-native-device-info"

// Example server, implemented in Rails: https://git.io/vKHKv
const PUSH_ENDPOINT = 'https://expo-push-server.herokuapp.com/tokens';

export default (async function registerForPushNotificationsAsync() {
  // Remote notifications do not work in simulators, only on device
  if (DeviceInfo.isEmulator) {
    return;
  }

  // Android remote notification permissions are granted during the app
  // install, so this will only ask on iOS

  let { status } = await Permissions.request("notification");

  // Stop here if the user did not grant permissions
  if (status !== 'authorized') {
    return;
  }

  // Get the token that uniquely identifies this device
  let token = DeviceInfo.getUniqueID;

  // POST the token to our backend so we can use it to send pushes from there
  return fetch(PUSH_ENDPOINT, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: {
        value: token,
      },
    }),
  });
});
