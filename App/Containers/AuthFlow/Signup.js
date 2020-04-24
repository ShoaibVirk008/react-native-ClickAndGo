import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { AppStyles, Colors } from '../../Themes';
import { Logo, InputWithIcon, ButtonWithGradiantColor, OrComponent, BackArrow } from '../../Components';
import { height, totalSize } from 'react-native-dimension';
import LinearGradient from 'react-native-linear-gradient';

class Signup extends Component {
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
                        <View style={[AppStyles.compContainer, {}]}>
                            <BackArrow
                                onPress={() => navigation.goBack()}
                            />
                        </View>

                        <LinearGradient
                            colors={Colors.appGradiantColors}
                            style={[AppStyles.compContainer, { borderRadius: 10, elevation: 10, borderBottomRightRadius: 50, paddingBottom: height(5),borderTopLeftRadius: 50  }]}
                        >
                            <View style={[AppStyles.compContainer, { marginBottom: 0 }]}>
                                <Text style={[AppStyles.h6, { color: Colors.appTextColor6, textAlign: 'center', }]}>Sign Up To Create a Free Account</Text>
                            </View>
                            <InputWithIcon
                                iconName="account"
                                placeholder="Full Name"
                            />
                            <InputWithIcon
                                iconName=""
                                placeholder="Email"
                            />
                            <InputWithIcon
                                iconName="phone"
                                placeholder="Phone Number"
                            />
                            <InputWithIcon
                                iconName="key"
                                placeholder="Password"
                            />
                            <InputWithIcon
                                iconName="key"
                                placeholder="Confirm Password"
                            />

                        </LinearGradient>
                        <ButtonWithGradiantColor
                            text="Signup"
                            onPress={() => navigate('login')}
                            containerStyle={{ marginVertical: height(2.5) }}
                        />
                        <OrComponent />
                        <View style={AppStyles.compContainer}>
                            <Text onPress={() => navigate('login')} style={[AppStyles.buttonText, { color: Colors.appColor1, alignSelf: 'center', letterSpacing: 2.5 }]}>Login</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default Signup;
