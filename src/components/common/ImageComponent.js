import React, {Component} from 'react';
import {
    Image,
} from 'react-native';
import ImageWithCache from 'react-native-image-cache-hoc';

const preview = {uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAAH6Nf8rAAAABGdBTUEAALGPC/xhBQAAAD9JREFUGBlj/A8EDEDABCLAACQC5jHC5EDCcA5cIZwBl4Loh5BwWWRB4lVi1U68IFaLkF0CY2M1EiaJTA+gQgApmhwFHvIPpAAAAABJRU5ErkJggg=='};

class ImageComponent extends Component {
    render() {
        const remoteFile = !!this.props.uri.startsWith('http');

        if (remoteFile) {
            const ImageCache = ImageWithCache(Image);
            return (
                <ImageCache
                    {...this.props}
                    source={{uri: this.props.uri}}

                />
            );
        } else {
            return (
                <Image
                    {...this.props}
                    source={{uri: this.props.uri}}
                />
            );
        }
    }
}

export default ImageComponent;
