import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AppStyles, Colors } from '../Themes';
import { Icon } from 'react-native-elements';
import { totalSize } from 'react-native-dimension';

class ButtonWithIconTextArrow extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { onPress, iconName, iconType, buttonStyle, text, textStyle } = this.props
        return (
            <TouchableOpacity activeOpacity={1} onPress={onPress} style={[AppStyles.cardView, buttonStyle]}>
                <View style={AppStyles.rowCompContainer}>
                    <View style={{ flex: 1.5, alignItems: 'flex-start' }}>
                        <Icon
                            name={iconName ? iconName : "email"}
                            type={iconType ? iconType : "material-community"}
                            size={totalSize(2.5)}
                            color={Colors.appColor1}
                        />
                    </View>
                    <View style={{ flex: 8.5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={[AppStyles.textRegular, { color: Colors.appColor1 }, textStyle]}>{text ? text : "Text"}</Text>
                        <Icon
                            name={"ios-arrow-forward"}
                            type={"ionicon"}
                            size={totalSize(2.5)}
                            color={Colors.appTextColor5}
                        />
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

export default ButtonWithIconTextArrow;
