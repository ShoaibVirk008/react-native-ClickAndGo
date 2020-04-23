import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AppStyles } from '../../../Themes';
import { ButtonWithIconTextArrow } from '../../../Components';
import { height } from 'react-native-dimension';

class More extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={AppStyles.mainContainer}>
                <ButtonWithIconTextArrow
                    text="Settings"
                    iconName="settings"
                    buttonStyle={[styles.buttonStyle, { marginTop: height(2.5) }]}
                />
                <ButtonWithIconTextArrow
                    text="Help and support"
                    iconName="face-agent"
                    buttonStyle={[styles.buttonStyle, { marginTop: height(2.5) }]}
                />
                <ButtonWithIconTextArrow
                    text="Give feedback"
                    iconName="email"
                    buttonStyle={[styles.buttonStyle, { marginTop: height(2.5) }]}
                />
                <ButtonWithIconTextArrow
                    text="Rate us"
                    iconName="star"
                    buttonStyle={[styles.buttonStyle, { marginTop: height(2.5) }]}
                />
                <ButtonWithIconTextArrow
                    onPress={() => navigate('Auth')}
                    text="Logout"
                    iconName="logout"
                    buttonStyle={[styles.buttonStyle, { marginTop: height(2.5) }]}
                />

            </View>
        );
    }
}

export default More;

const styles = StyleSheet.create({
    buttonStyle: {
        //marginBottom: height(2)
    }
})
