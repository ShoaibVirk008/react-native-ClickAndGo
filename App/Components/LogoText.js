import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Colors, AppStyles, FontFamily } from '../Themes';
import { totalSize } from 'react-native-dimension';

class LogoText extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { containerStyle, color, size } = this.props
        return (
            <View style={containerStyle}>
                <Text style={[AppStyles.h6, { color: color ? color : Colors.appColor1, fontSize: size ? size : totalSize(2), letterSpacing: totalSize(0.5), textAlign: 'center', fontFamily: FontFamily.appTextBold }]}>Click and go</Text>
            </View>
        );
    }
}

export default LogoText;
