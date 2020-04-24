import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { Login, Signup, AuthLoading } from '../Containers/AuthFlow';
import { Home, MyTasks, More } from '../Containers/MainFlow';
import { Icon } from 'react-native-elements';
import { AppStyles, Colors } from '../Themes';
import { totalSize, width } from 'react-native-dimension';
import { GradiantBackground } from '../Components';
import { Onboarding } from '../Containers/Onboarding';

const AuthStack = createStackNavigator({
    login: Login,
    signup: Signup
},
    {
        defaultNavigationOptions: {
            headerShown: false
        }
    }
)
const tabIconSize = totalSize(2.5)
const TabNavigator = createMaterialTopTabNavigator({
    home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: "Home",
            tabBarIcon: ({ tintColor }) => (
                <Icon name="home" type="font-awesome" size={tabIconSize} color={tintColor} />
            )
        }
    },
    myTasks: {
        screen: MyTasks,
        navigationOptions: {
            tabBarLabel: "My Tasks",
            tabBarIcon: ({ tintColor, onfoucus }) => (
                <Icon name="suitcase" type="font-awesome" size={tabIconSize} color={tintColor} />
            )
        }
    },
    more: {
        screen: More,
        navigationOptions: {
            tabBarLabel: "More",
            tabBarIcon: ({ tintColor }) => (
                <Icon name="appstore1" type="antdesign" size={tabIconSize} color={tintColor} />
            )
        }
    },


},
    {
        tabBarPosition: "bottom",
        resetOnBlur: true,
        tabBarOptions: {
            showLabel: false,
            showIcon: true,
            //labelStyle: AppStyles.topTabLableStyle,
            style: AppStyles.tabStyle,
            activeTintColor: Colors.appColor1,
            inactiveTintColor: Colors.steel,
            indicatorStyle: AppStyles.BottomTabIndicatorStyle
        }
    }
)
TabNavigator.navigationOptions = ({ navigation }) => {
    const { routeName } = navigation.state.routes[navigation.state.index]; //This gives current route
    let headerTitle
    switch (routeName) {
        case "home":
            headerTitle = "Home";
            break;
        case "myTasks":
            headerTitle = "My Tasks";
            break;
        case "more":
            headerTitle = "More";
            break;
    }

    return {
        title: headerTitle
    }
}
const AppStack = createStackNavigator({
    tabNavigator: {
        screen: TabNavigator,
        navigationOptions: {
            // title: "Influencer",
            headerTitleAlign: 'center',
            headerRight: (
                <Icon
                    name="account"
                    type="material-community"
                    iconStyle={{ marginRight: width(5) }}
                    color={Colors.appTextColor6}
                    size={tabIconSize}
                />
            ),
            headerLeft: (
                <Icon
                    name="bell"
                    type="material-community"
                    iconStyle={{ marginLeft: width(5) }}
                    color={Colors.appTextColor6}
                    size={tabIconSize}
                />
            ),
            headerStyle: AppStyles.headerStyle,
            headerTitleStyle: [AppStyles.headerTitleStyle, { color: Colors.appTextColor6 }],
            headerBackground: (<GradiantBackground />),
        }
    }
},
    {
        defaultNavigationOptions: {
            // headerShown: false
        }
    }
)

const StackSwitcher = createSwitchNavigator({
    Splash: AuthLoading,
    Onboarding: Onboarding,
    Auth: AuthStack,
    App: AppStack
},
    {
        initialRouteName: "Splash"
    }
)

export default createAppContainer(StackSwitcher)