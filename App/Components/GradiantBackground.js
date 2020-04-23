import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../Themes';

class GradiantBackground extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <LinearGradient
                colors={Colors.appGradiantColors}
                start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
                style={{ flex: 1 }}
            >
            </LinearGradient>
        );
    }
}

export default GradiantBackground;
