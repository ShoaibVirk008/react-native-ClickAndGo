import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Image } from 'react-native';
import { Icons, Colors } from '../Themes';
import { totalSize } from 'react-native-dimension';

class CustomIcon extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { source, size, color, style } = this.props
        const defaultSize = totalSize(2.5)
        const defaultColor = Colors.appTextColor5
        return (
            <Image source={source} resizeMode="contain" style={[{ height: size ? size : defaultSize, width: size ? size : defaultSize, tintColor: color ? color : defaultColor }, style]} />
        );
    }
}

export default CustomIcon;
