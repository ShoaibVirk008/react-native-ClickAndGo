import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { AppStyles, Colors } from '../../Themes';
import LinearGradient from 'react-native-linear-gradient';
import { Logo } from '../../Components';
import {
    BallIndicator,
    BarIndicator,
    DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    SkypeIndicator,
    UIActivityIndicator,
    WaveIndicator,
} from 'react-native-indicators';
import { height, totalSize } from 'react-native-dimension';
class AuthLoading extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount = () => {
        this.goToAuth()
    }

    goToAuth = () => {
        setTimeout(() => {
            this.props.navigation.navigate('Auth')
        }, 2500);
    }
    render() {
        return (
            <View style={AppStyles.mainContainer}>
                <LinearGradient
                    colors={Colors.appGradiantColors}
                    style={[AppStyles.mainContainer, { alignItems: 'center', justifyContent: 'center' }]}
                //start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                >
                    <View style={{ alignItems: 'center' }}>
                        <Logo
                            color={Colors.appTextColor6}
                            size={totalSize(20)}
                        />
                        <Text style={[AppStyles.h6, { color: Colors.appTextColor6, marginTop: 25, letterSpacing: 2.5 }]}>CLICK AND GO</Text>
                    </View>
                    <View style={{ position: 'absolute', bottom: height(10) }}>
                        <DotIndicator color='white' size={totalSize(1)} />
                    </View>
                </LinearGradient>
            </View>
        );
    }
}

export default AuthLoading;
