import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { AppStyles, Images, Colors } from '../../Themes';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { width, height, totalSize } from 'react-native-dimension';
import { Logo, ButtonWithGradiantColor, ButtonRoundWithGradiantColor, LogoText } from '../../Components';
import { Icon } from 'react-native-elements';
import { Translate } from '../../Stores';
class Onboarding extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSlide: 0,
            swipe_items: [
                {
                    title: 'Stay Updated',
                    description: '"Click and go" is a new reminder system that will organize your life',
                    iconName: 'update',
                    iconType: ''
                },
                {
                    title: 'Never Forget Anything',
                    description: 'The app has the ability to set reminders speedily in over 200 tasks ranging from anything to everything',
                    iconName: 'account-check',
                    iconType: ''
                },
                {
                    title: 'Easy To Use',
                    description: 'The predetermined tasks in predetermined categories allow for simple "click and go" selection and for you to be on your way in seconds',
                    iconName: 'cellphone-settings',
                    iconType: ''
                },
                {
                    title: 'Make Your Own Features',
                    description: 'flexibility to personalize tasks in every category, and quickly. Clicking how you would like to receive your reminder - by text or by email',
                    iconName: 'xbox-controller-menu',
                    iconType: ''
                },
                {
                    title: 'Reasonable Pricing',
                    description: 'Two months free trial, then $4 month. Cancel any time. No initial sign up and then must cancel later. No minimum contract. No auto-renewal',
                    iconName: 'tag-multiple',
                    iconType: ''
                }
            ]
        };
    }
    _renderItem = ({ item, index }) => {
        return (
            <View style={[styles.slide]}>
                <View style={{ flex: 6, alignItems: 'center', justifyContent: 'center' }}>
                    <ButtonRoundWithGradiantColor
                        iconName={item.iconName}
                        iconSize={totalSize(10)}
                        buttonStyle={{ height: totalSize(20), width: totalSize(20) }}

                    />
                </View>
                <View style={{ flex: 4, justifyContent: 'center' }}>
                    <View style={{ marginHorizontal: width(5) }}>
                        <Text style={[AppStyles.h5, styles.title]}>{item.title}</Text>
                        <Text style={[AppStyles.textMedium, styles.description]}>{item.description}</Text>
                    </View>
                </View>
            </View>
        );
    }
    get pagination() {
        const { swipe_items, activeSlide } = this.state;
        return (
            <Pagination
                dotsLength={swipe_items.length}
                activeDotIndex={activeSlide}
                containerStyle={{ backgroundColor: 'transparent', }}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 10,
                    // marginHorizontal: 1,
                    backgroundColor: Colors.appColor1
                }}
                inactiveDotStyle={{
                    // Define styles for inactive dots here
                }}

                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
                animatedDuration={25}
                animatedTension={10}
            />
        );
    }
    render() {
        const { navigate } = this.props.navigation
        const { swipe_items, activeSlide } = this.state
        return (
            <View style={[AppStyles.mainContainer, {}]}>
                <LogoText
                    containerStyle={{ marginTop: 20 }}
                    size={totalSize(2.5)}
                />
                <View>
                    <Carousel
                        ref={(c) => { this._carousel = c; }}
                        data={swipe_items}
                        renderItem={this._renderItem}
                        sliderWidth={width(100)}
                        itemWidth={width(100)}
                        loop={true}
                        autoplay={true}
                        //scrollEnabled={false}
                        onSnapToItem={(index) => this.setState({ activeSlide: index })}
                    />
                    {this.pagination}
                </View>
                <ButtonWithGradiantColor
                    text="Get Started"
                    onPress={() => navigate('Auth')}
                />
            </View>
        );
    }
}

export default Onboarding;

const styles = StyleSheet.create({
    slide: {
        height: height(65),
        marginTop: height(2.5),
        marginHorizontal: width(5),
        marginVertical: height(2),
        backgroundColor: Colors.appBgColor1,
        borderRadius: 15,
        elevation: 5
    },
    title: {
        color: Colors.appColor1,
        textAlign: 'center',
    },
    description: {
        textAlign: 'center'
    },
    buttonStyle: {
        height: height(8),
        width: width(42.5),
        borderRadius: 10,
        backgroundColor: Colors.appColor1,
        marginHorizontal: 0
    },
    buttonText: {
        fontSize: totalSize(2),
        color: Colors.appTextColor4
    }
})