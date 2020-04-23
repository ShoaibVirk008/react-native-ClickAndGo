import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { AppStyles, Colors } from '../../Themes';
import { Logo, InputWithIcon, ButtonWithGradiantColor, OrComponent } from '../../Components';
import { height, totalSize } from 'react-native-dimension';
import LinearGradient from 'react-native-linear-gradient';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { navigation } = this.props
        const { navigate } = navigation
        return (
            <View style={AppStyles.mainContainer}>
                <ScrollView>
                    <View style={{ flex: 1 }}>
                        <View style={[AppStyles.compContainer, { alignItems: 'center', marginVertical: height(5) }]}>
                            <Logo size={totalSize(15)} />
                        </View>
                        {/* <View style={[AppStyles.compContainer, { alignItems: 'center', marginVertical: 0 }]}>
                            <Text style={[AppStyles.h5, { color: Colors.appColor1 }]}>CLICK AND GO</Text>
                        </View> */}
                        <LinearGradient
                            colors={Colors.appGradiantColors}
                            style={[AppStyles.compContainer, { borderRadius: 10, elevation: 10, borderBottomRightRadius: 50 }]}
                        >
                            <View style={[AppStyles.compContainer, {}]}>
                                <Text style={[AppStyles.h6, { color: Colors.appTextColor6, textAlign: 'center' }]}>Login To Your Account</Text>
                            </View>
                            <InputWithIcon
                                iconName=""
                                placeholder="Email"
                            />
                            <InputWithIcon
                                iconName="key"
                                placeholder="Password"
                            />
                            <View style={AppStyles.compContainer}>
                                <Text style={[AppStyles.textMedium, { textAlign: 'center', color: Colors.appTextColor6 }]}>Forgot Password?</Text>
                            </View>
                        </LinearGradient>
                        <ButtonWithGradiantColor
                            text="Login"
                            onPress={() => navigate('App')}
                            containerStyle={{ marginVertical: height(2.5) }}
                        />
                        <OrComponent />
                        <View style={AppStyles.compContainer}>
                            <Text onPress={() => navigate('signup')} style={[AppStyles.buttonText, { color: Colors.appColor1, alignSelf: 'center', letterSpacing: 2.5 }]}>Signup</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default Login;
