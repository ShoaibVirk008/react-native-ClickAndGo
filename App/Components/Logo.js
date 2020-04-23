import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { totalSize } from 'react-native-dimension';
import { Images, Colors } from '../Themes';

class Logo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { size, color } = this.props
        const defaultSize = totalSize(10)
        return (
            <Image
                source={Images.logo}
                resizeMode="contain"
                style={{
                    height: size ? size : defaultSize,
                    width: size ? size : defaultSize,
                    tintColor: color ? color : Colors.appColor1
                }}
            />
        );
    }
}

export default Logo;
