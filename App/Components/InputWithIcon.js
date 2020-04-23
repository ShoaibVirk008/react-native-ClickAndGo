import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { AppStyles, Colors, FontFamily } from '../Themes';
import { Icon } from 'react-native-elements';
import { totalSize, height } from 'react-native-dimension';

class InputWithIcon extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { iconName, info, required, subTitle, title, iconType, placeholder, onChangeText, secureTextEntry, value, containerStyle, inputContainerStyle, titleStyle } = this.props
        return (
            <View style={[{ marginTop: height(2.5) }, containerStyle]}>
                {
                    title ?
                        <View style={[AppStyles.compContainer, { marginVertical: 0, }]}>
                            <Text style={[AppStyles.inputTitle, {}, titleStyle]}>{title}
                                {
                                    required ?
                                        <Text style={[AppStyles.textRegular, { fontFamily: FontFamily.appTextMedium, color: Colors.error }]}>*</Text>
                                        :
                                        null
                                }
                                {
                                    subTitle ?
                                        <Text style={[AppStyles.textMedium, { color: Colors.appTextColor5, fontFamily: FontFamily.appTextRegular }]}>  ({subTitle})</Text>
                                        :
                                        null
                                }
                            </Text>
                        </View>
                        :
                        null
                }
                <View style={[AppStyles.inputContainerColored, { backgroundColor: Colors.appBgColor1, justifyContent: 'flex-start', borderRadius: 10 }, inputContainerStyle]}>
                    <View style={{ flex: 1.5, alignItems: 'center' }}>
                        <Icon name={iconName ? iconName : 'email'} type={iconType ? iconType : 'material-community'} size={totalSize(2.5)} color={Colors.appColor1} />
                    </View>
                    <View style={{ flex: 8.5 }}>
                        <TextInput
                            onChangeText={onChangeText}
                            value={value}
                            placeholder={placeholder}
                            secureTextEntry={secureTextEntry}
                            style={[AppStyles.inputField, { width: null, height: height(8), fontSize: totalSize(1.5) }]}
                        />
                    </View>
                </View>
                {
                    info ?
                        <View style={[AppStyles.compContainer, { marginVertical: 0, marginTop: 5 }]}>
                            <Text style={[AppStyles.textMedium, {}, titleStyle]}>{info}</Text>
                        </View>
                        :
                        null
                }
            </View>
        );
    }
}

export default InputWithIcon;
