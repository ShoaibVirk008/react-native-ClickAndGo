import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Colors, AppStyles } from '../Themes';
import { height, width, totalSize } from 'react-native-dimension';
import { Icon } from 'react-native-elements';

class ButtonWithIconText extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { onPress, iconName, iconType, iconSize, text, buttonStyle } = this.props
        return (
            <TouchableOpacity
                onPress={onPress}
                style={[{ backgroundColor: Colors.appBgColor1, borderRadius: 10, elevation: 10, height: height(17.5), width: width(32.5), alignItems: 'center', justifyContent: 'center' }, buttonStyle]}
            >
                <View style={{ alignItems: 'center' }}>
                    <Icon
                        name={iconName ? iconName : "email"}
                        type={iconType ? iconType : "material-community"}
                        size={iconSize ? iconSize : totalSize(7)}
                        color={Colors.appColor1}
                    />
                    <Text style={[AppStyles.textRegular, { fontSize: totalSize(1.5), color: Colors.appColor1 }]}>{text}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default ButtonWithIconText;
