import React from 'react';
import {
  Linking,
  ActivityIndicator,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Platform,
  StyleSheet,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import { RNCamera } from 'react-native-camera';
import Permissions from "react-native-permissions"
import { colors } from '../../config/Theme';

const win = Dimensions.get('window');
const DESIRED_RATIO = "1:1";

export default class CameraComponent extends React.Component {
  state = {
    isMounted: false,
    hasCameraPermission: null,
    type: RNCamera.Constants.Type.back,
    ratio: DESIRED_RATIO,
    photo: null,
    processingPhoto: false,
  };

  async componentDidMount() {
    this.setState({isMounted: true});

    const {status} = await Permissions.request(Permissions.CAMERA);

    if (this.state.isMounted) {
      this.setState({ hasCameraPermission: status === 'authorized' });
      this.processImage(null);

      if (status !== 'authorized') {
        const {status} = await Permissions.request(Permissions.CAMERA);
        if (status === 'authorized') {
          this.setState({ hasCameraPermission: true });
        }
      }
    }
  }

  componentWillUnmount(){
    this.setState({isMounted: false})
  }

  prepareRatio = async () => {
    if (Platform.OS === 'android' && this.camera) {
      const ratios = await this.camera.getSupportedRatiosAsync();

      // See if the current device has your desired ratio, otherwise get the maximum supported one
      // Usually the last element of "ratios" is the maximum supported ratio
      const ratio = ratios.find((ratio) => ratio === DESIRED_RATIO) || ratios[ratios.length - 1];
      this.setState({ ratio });
    }
  }

  takePicture = async () => {
    if (this.camera && this.state.photo === null) {
      this.setState({processingPhoto: true});
      const photo = await this.camera.takePictureAsync();

      this.setState({
        photo,
        processingPhoto: false
      });
      this.processImage(photo);

      if (this.props.parentRoute === 'AvatarFromCamera') {
        this.props.navigation.navigate('Profile', {
          imageForAvatar: true,
        });
      } else {
        this.props.navigation.navigate('PostImage');
      }
    }
  }

  processImage = (img) => {
    if (this.props.parentRoute === 'AvatarFromCamera') {
      this.props.setImageForAvatar(img);
    } else {
      this.props.setImageForPost(img);
    }
  }

  openSettings = () => {
    const url = 'app-settings:';
    Linking.openURL(url);
  }

  render() {
    const { hasCameraPermission } = this.state;


    if (hasCameraPermission === null) {
      return null;
    }

    if (hasCameraPermission === false) {
      return (
        <View style={styles.deniedView}>
          <Text style={styles.deniedText}>Please enable permissions for accessing your camera.</Text>

          {Platform.OS === 'ios' &&
            <TouchableOpacity
              style={styles.openSettings}
              onPress={() => this.openSettings()}
            >
              <Text style={styles.openSettingsText}>Open Settings</Text>
            </TouchableOpacity>
          }
        </View>
      );
    }


    const ratios = this.state.ratio.split(':');
    const cameraHeight = win.width*(ratios[0] / ratios[1]);

    return (
      <View style={styles.container}>

        <View style={styles.cameraView}>
          <RNCamera
            style={[
              styles.camera,
              {
                width: win.width,
                height: cameraHeight,
              }
            ]}
            ref={(cam) => this.camera = cam}
            type={this.state.type}
            onCameraReady={this.prepareRatio}
            ratio={this.state.ratio}
          >
          </RNCamera>

          {!this.state.processingPhoto &&
            <View style={styles.cameraActions}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({
                    type: this.state.type === RNCamera.Constants.Type.back
                    ? RNCamera.Constants.Type.front
                    : RNCamera.Constants.Type.back,
                  });
                }}
                >
                  <Text
                    style={styles.flip}
                  >
                    <Feather
                      name="refresh-ccw"
                      size={30}
                    />
                  </Text>
                </TouchableOpacity>
              </View>
            }

          {this.state.processingPhoto &&
            <ActivityIndicator
              style={styles.loader}
              size="large"
              color={'white'}
            />
          }

        </View>

        <View style={styles.recordView}>

          <TouchableOpacity
            style={styles.snapBtn}
            onPress={this.takePicture}
          >
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cameraView: {
    flex: 0,
    width: win.width,
    height: win.width,
    maxHeight: win.width,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    zIndex: 1,
  },
  camera: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 2,
  },
  loader: {
    position: 'absolute',
    zIndex: 3,
  },
  cameraActions: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
    left: 10,
    zIndex: 3,
  },
  snapBtn: {
    borderWidth: 15,
    borderColor: colors.recordButton,
    borderRadius: 50,
    width: 70,
    height: 70,
  },
  recordView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.backgroundGrey,
    zIndex: 3,
    position: 'relative',
  },
  flip: {
    fontSize: 18,
    marginBottom: 10,
    marginLeft: 10,
    color: 'white',
  },
  deniedView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  deniedText: {
    fontSize: 16,
    color: colors.text,
  },
  openSettings: {
    marginTop: 20,
  },
  openSettingsText: {
    fontSize: 16,
    color: colors.anchor,
  }
});
