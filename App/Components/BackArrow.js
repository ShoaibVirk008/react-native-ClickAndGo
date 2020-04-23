import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CustomIcon from './CustomIcon';
import { Icons, Colors } from '../Themes';

class BackArrow extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { onPress } = this.props
        return (
            <TouchableOpacity onPress={onPress}>
                <CustomIcon
                    source={Icons.back_arrow}
                    color={Colors.appTextColor5}
                />
            </TouchableOpacity>
        );
    }
}

export default BackArrow;
