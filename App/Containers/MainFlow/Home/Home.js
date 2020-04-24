import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { AppStyles, Colors, FontFamily, } from '../../../Themes';
import { ButtonWithGradiantColor, ButtonRoundWithGradiantColor, ButtonWithIconText, LogoText } from '../../../Components';
import { height, width, totalSize } from 'react-native-dimension';
import Modal from 'react-native-modal'
import { Icon } from 'react-native-elements';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCategoryModalVisible: false,
            isRemindersModalVisible: false,
            isIntendedTasksModalVisible: false,
            isMyModalVisible: false,



        };
    }
    toggleCategoryModal = () => this.setState({ isCategoryModalVisible: !this.state.isCategoryModalVisible })
    toggleReminderModal = () => this.setState({ isRemindersModalVisible: !this.state.isRemindersModalVisible })
    toggleIntendedTasksModal = () => this.setState({ isIntendedTasksModalVisible: !this.state.isIntendedTasksModalVisible })
    toggleMyModal = () => this.setState({ isMyModalVisible: !this.state.isMyModalVisible })

    ModalComponent({ isVisible, toggleModal, content, title }) {
        return (
            <Modal
                isVisible={isVisible}
                onBackdropPress={toggleModal}
                animationInTiming={250}
                animationOutTiming={100}
                animationIn="zoomIn"
                animationOut="zoomOut"
                style={{}}
            >
                <View style={styles.modalRootContainer}>
                    <ScrollView>
                        <View style={[AppStyles.compContainer, { justifyContent: 'center' }]}>
                            <Text style={[AppStyles.h5, { textAlign: 'center', color: Colors.appColor1, fontFamily: FontFamily.appTextBold }]}>{title}</Text>
                            <View style={{ position: 'absolute', right: 0 }}>
                                <Icon onPress={toggleModal} name="close" type="font-awesome" size={totalSize(3)} color={Colors.appTextColor5} />
                            </View>
                        </View>
                        {content}
                    </ScrollView>

                </View>
            </Modal>
        )
    }
    render() {
        const { navigate } = this.props.navigation
        const { isCategoryModalVisible,
            isRemindersModalVisible,
            isIntendedTasksModalVisible,
            isMyModalVisible } = this.state
        return (
            <View style={[AppStyles.mainContainer, { justifyContent: 'space-evenly' }]}>
                <View style={[AppStyles.compContainer, { marginVertical: 0 }]}>
                    <LogoText />
                    <Text style={[AppStyles.textMedium, styles.topText, { color: Colors.appTextColor5 }]}>never forget anything</Text>
                </View>
                <ButtonWithGradiantColor
                    onPress={() => navigate('newCampaign')}
                    text="Category"
                    textStyle={{ textAlign: 'center' }}
                    //containerStyle={{ marginTop: height(10) }}
                    buttonStyle={styles.gradiantButtonStyle}
                    onPress={this.toggleCategoryModal}
                />
                <ButtonWithGradiantColor
                    onPress={() => navigate('newCampaign')}
                    text="Reminders"
                    textStyle={{ textAlign: 'center' }}
                    //containerStyle={{ marginTop: height(10) }}
                    buttonStyle={styles.gradiantButtonStyle}
                    onPress={this.toggleReminderModal}
                />
                <ButtonWithGradiantColor
                    onPress={() => navigate('newCampaign')}
                    text="Intended Tasks"
                    textStyle={{ textAlign: 'center' }}
                    //containerStyle={{ marginTop: height(10) }}
                    buttonStyle={styles.gradiantButtonStyle}
                    onPress={this.toggleIntendedTasksModal}
                />
                <ButtonWithGradiantColor
                    onPress={() => navigate('newCampaign')}
                    text="My Click And Go"
                    textStyle={{ textAlign: 'center' }}
                    //containerStyle={{ marginTop: height(10) }}
                    buttonStyle={styles.gradiantButtonStyle}
                    onPress={this.toggleMyModal}
                />

                <this.ModalComponent
                    isVisible={isCategoryModalVisible}
                    toggleModal={this.toggleCategoryModal}
                    title="Category"
                    content={
                        <View style={[AppStyles.rowCompContainer, { flexWrap: 'wrap', marginHorizontal: width(7.5) }]}>
                            <ButtonWithIconText
                                iconName="calendar-clock"
                                //iconType="font-awesome"
                                text="Appointments"
                                onPress={() => {
                                    this.toggleCategoryModal();
                                }}
                                buttonStyle={styles.ButtonWithIconTextStyle}
                            />
                            <ButtonWithIconText
                                iconName="star"
                                iconType="font-awesome"
                                text="Special Occasions"
                                onPress={() => {
                                    this.toggleCategoryModal();
                                }}
                                buttonStyle={styles.ButtonWithIconTextStyle}
                            />
                            <ButtonWithIconText
                                iconName="car-sports"
                                //iconType="font-awesome"
                                text="Car"
                                onPress={() => {
                                    this.toggleCategoryModal();
                                }}
                                buttonStyle={styles.ButtonWithIconTextStyle}
                            />
                            <ButtonWithIconText
                                iconName="login"
                                //iconType="font-awesome"
                                text="Inside"
                                onPress={() => {
                                    this.toggleCategoryModal();
                                }}
                                buttonStyle={styles.ButtonWithIconTextStyle}
                            />
                            <ButtonWithIconText
                                iconName="logout"
                                // iconType="font-awesome"
                                text="Outside"
                                onPress={() => {
                                    this.toggleCategoryModal();
                                }}
                                buttonStyle={styles.ButtonWithIconTextStyle}
                            />
                            <ButtonWithIconText
                                iconName="account-box"
                                //iconType="font-awesome"
                                text="Personal"
                                onPress={() => {
                                    this.toggleCategoryModal();
                                }}
                                buttonStyle={styles.ButtonWithIconTextStyle}
                            />
                            <ButtonWithIconText
                                iconName="briefcase"
                                //iconType="font-awesome"
                                text="Work"
                                onPress={() => {
                                    this.toggleCategoryModal();
                                }}
                                buttonStyle={styles.ButtonWithIconTextStyle}
                            />
                        </View>
                    }
                />
                <this.ModalComponent
                    isVisible={isRemindersModalVisible}
                    toggleModal={this.toggleReminderModal}
                    title="Reminders"
                    content={
                        <View style={[AppStyles.rowCompContainer, { flexWrap: 'wrap', marginHorizontal: width(7.5) }]}>
                            <ButtonWithIconText

                                iconName="calendar-week"
                                //iconType="font-awesome"
                                text="Next week"
                                onPress={() => {
                                    this.toggleReminderModal();
                                }}
                                buttonStyle={styles.ButtonWithIconTextStyle}
                            />
                            <ButtonWithIconText
                                iconName="calendar-range"
                                //iconType="font-awesome"
                                text="Two weeks"
                                onPress={() => {
                                    this.toggleReminderModal();
                                }}
                                buttonStyle={styles.ButtonWithIconTextStyle}
                            />
                            <ButtonWithIconText
                                iconName="calendar-month"
                                //iconType="font-awesome"
                                text="Three weeks"
                                onPress={() => {
                                    this.toggleReminderModal();
                                }}
                                buttonStyle={styles.ButtonWithIconTextStyle}
                            />

                        </View>
                    }
                />
                <this.ModalComponent
                    isVisible={isIntendedTasksModalVisible}
                    toggleModal={this.toggleIntendedTasksModal}
                    title="Intended Tasks"
                    content={
                        <View style={[AppStyles.rowCompContainer, { flexWrap: 'wrap', marginHorizontal: width(7.5) }]}>
                            <ButtonWithIconText

                                iconName="alpha-a-box"
                                //iconType="font-awesome"
                                text="Alphabetical"
                                onPress={() => {
                                    this.toggleIntendedTasksModal();
                                }}
                                buttonStyle={styles.ButtonWithIconTextStyle}
                            />
                            <ButtonWithIconText
                                iconName="calendar"
                                //iconType="font-awesome"
                                text="Intended Date"
                                onPress={() => {
                                    this.toggleIntendedTasksModal();
                                }}
                                buttonStyle={styles.ButtonWithIconTextStyle}
                            />


                        </View>
                    }
                />
                <this.ModalComponent
                    isVisible={isMyModalVisible}
                    toggleModal={this.toggleMyModal}
                    title="My Click And Go"
                    content={
                        <View style={[AppStyles.rowCompContainer, { flexWrap: 'wrap', marginHorizontal: width(7.5) }]}>
                            <ButtonWithIconText
                                iconName="clipboard-text"
                                //iconType="font-awesome"
                                text="Text Detail"
                                onPress={() => {
                                    this.toggleMyModal();
                                }}
                                buttonStyle={styles.ButtonWithIconTextStyle}
                            />
                            <ButtonWithIconText
                                iconName="email-variant"
                                //iconType="font-awesome"
                                text="Email Detail"
                                onPress={() => {
                                    this.toggleMyModal();
                                }}
                                buttonStyle={styles.ButtonWithIconTextStyle}
                            />

                            <ButtonWithIconText
                                iconName="credit-card"
                                //iconType="font-awesome"
                                text="Credit card"
                                onPress={() => {
                                    this.toggleMyModal();
                                }}
                                buttonStyle={styles.ButtonWithIconTextStyle}
                            />
                            <ButtonWithIconText
                                iconName="close-network"
                                //iconType="font-awesome"
                                text="Cancel any time"
                                onPress={() => {
                                    this.toggleMyModal();
                                }}
                                buttonStyle={styles.ButtonWithIconTextStyle}
                            />
                        </View>
                    }
                />
            </View>
        );
    }
}

export default Home;

const styles = StyleSheet.create({
    gradiantButtonStyle: {
        height: height(15),
        width: width(80)
    },
    topText: {
        color: Colors.appColor1,
        textAlign: 'center'
    },
    modalRootContainer: {
        flex: 1,
        backgroundColor: Colors.appBgColor1,
        borderRadius: 10
    },
    ButtonWithIconTextStyle: {
        marginBottom: height(2.5)
    }
})