import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { AppStyles, Colors } from '../Themes';
import { width } from 'react-native-dimension';

class OrComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { containerStyle } = this.props
        return (
            <View style={[{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }, containerStyle]}>
                <View style={{ width: width(20), borderBottomWidth: 1, borderBottomColor: Colors.appTextColor5 }}></View>
                <Text style={[AppStyles.textSmall, { color: Colors.appTextColor5, marginHorizontal: width(5) }]}>OR</Text>
                <View style={{ width: width(20), borderBottomWidth: 1, borderBottomColor: Colors.appTextColor5 }}></View>
            </View>
        );
    }
}

export default OrComponent;
