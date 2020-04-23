import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import { AppStyles, Colors } from '../Themes';
import { width, height, totalSize } from 'react-native-dimension';
class ButtonWithGradiantColor extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { text, onPress, containerStyle, buttonStyle, textStyle } = this.props
        return (
            <TouchableOpacity activeOpacity={1} onPress={onPress} style={[{ marginHorizontal: width(10) }, containerStyle]}>
                <LinearGradient
                    onPress={onPress}
                    colors={Colors.appGradiantColors}
                    start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
                    style={[AppStyles.buttonColord, { marginHorizontal: 0, elevation: 10, borderRadius: 10 }, buttonStyle]}
                >
                    <Text style={[AppStyles.buttonText, { letterSpacing: 5 }, textStyle]}>{text}</Text>
                </LinearGradient>
            </TouchableOpacity>
        );
    }
}

export default ButtonWithGradiantColor;
