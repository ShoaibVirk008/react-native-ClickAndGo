import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import { AppStyles, Colors } from '../Themes';
import { width, height, totalSize } from 'react-native-dimension';
import { Icon } from 'react-native-elements';
class ButtonRoundWithGradiantColor extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { iconName, iconType, iconSize, onPress, containerStyle, buttonStyle, text } = this.props
        return (
            <TouchableOpacity activeOpacity={1} onPress={onPress} style={containerStyle}>
                <LinearGradient
                    colors={Colors.appGradiantColors}
                    start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
                    style={[{ width: totalSize(15), height: totalSize(15), elevation: 10, borderRadius: 100, alignItems: 'center', justifyContent: 'center' }, buttonStyle]}
                >
                    <Icon
                        name={iconName ? iconName : "email"}
                        type={iconType ? iconType : "material-community"}
                        size={iconSize ? iconSize : totalSize(5)}
                        color={Colors.appTextColor6}
                    />
                    <Text style={[AppStyles.textRegular, { fontSize: totalSize(1.75), color: Colors.appTextColor6 }]}>{text}</Text>
                </LinearGradient>
            </TouchableOpacity>
        );
    }
}

export default ButtonRoundWithGradiantColor;
