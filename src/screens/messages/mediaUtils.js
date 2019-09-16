import { Linking } from 'react-native'
import Location from 'react-native-location'
import Permissions from 'react-native-permissions'
import  ImagePicker from 'react-native-image-picker'

import { Alert } from 'react-native'

export default async function getPermissionAsync(permission) {
     await Permissions.request(permission).then(status=>{
        if (status !== 'authorized') {
            const permissionName = permission.toLowerCase().replace('_', ' ')
            Alert.alert(
                'Cannot be done 😞',
                `If you would like to use this feature, you'll need to enable the ${permissionName} permission in your phone settings.`,
                [
                    {
                        text: "Let's go!",
                        onPress: () => Linking.openURL('app-settings:'),
                    },
                    { text: 'Never mind', onPress: () => {}, style: 'cancel' },
                ],
                { cancelable: true },
            )

            return false
        }
        return true
    }).catch(e=>{

     });
    return false
}

export async function getLocationAsync(onSend) {
    Permissions.request("location").then(status=>{
        if (status !== 'authorized') {
            const permissionName = "location"
            Alert.alert(
                'Cannot be done 😞',
                `If you would like to use this feature, you'll need to enable the ${permissionName} permission in your phone settings.`,
                [
                    {
                        text: "Let's go!",
                        onPress: () => Linking.openURL('app-settings:'),
                    },
                    { text: 'Never mind', onPress: () => {}, style: 'cancel' },
                ],
                { cancelable: true },
            )

        }else {
            const location =  Location.getLatestLocation({})
            if (location) {
                onSend([{ location: {latitude:location.latitude,longitude:location.longitude} }])
            }
        }

    }).catch(e=>{

    });
}

export async function pickImageAsync(onSend) {
    if (await getPermissionAsync("photo")) {
        const result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
        })

        if (!result.cancelled) {
            onSend([{ image: result.uri }]);
            return result.uri
        }
    }
}

export async function takePictureAsync(onSend) {
    if (await getPermissionAsync("camera")) {
        const result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 3],
        })

        if (!result.cancelled) {
            onSend([{ image: result.uri }])
            return result.uri
        }
    }
}
