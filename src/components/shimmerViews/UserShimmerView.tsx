import * as React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, } from 'react-native';
import { colorTokens } from 'theme/Colors';
import IconTextComponent from '../IconTextComponent';
import Shimmer from 'react-native-shimmer';
import CustomButton from '../CustomButton';



export const UserShimmerView = () => {

    return (
        <View style={styles.mainCardView}>
            <Shimmer animating={true} style={styles.logoContainer}>
                <Image
                    source={require('../../../assets/images/gitUser.png')}
                    resizeMode={'contain'}
                    borderRadius={44}
                    style={{ height: 100, width: 100 }}
                />
            </Shimmer>
            <Shimmer animating={true} style={styles.nameShimmer}>
                <Text style={[{ color: colorTokens.dark }]}>
                </Text>
            </Shimmer>
            <Shimmer animating={true} style={styles.nameShimmer}>
                <Text style={[{ color: colorTokens.dark }]}>
                </Text>
            </Shimmer>
            <Shimmer animating={true}>
                <View style={styles.followButton} />
            </Shimmer>
            <Shimmer animating={true} style={styles.followList}>
                <View
                    style={styles.followList}>
                    <Shimmer animating={true}>
                        <View>
                            <Text style={styles.userData}>
                                Followers
                            </Text>
                            <IconTextComponent
                                iconName={'people'}
                                text={'0'}
                                textColor={colorTokens.dark50}
                                iconColor={colorTokens.black}
                                fontSize={16}
                            />
                        </View>
                    </Shimmer>
                    <Shimmer animating={true}>
                        <View>
                            <Text style={styles.userData}>
                                Following
                            </Text>
                            <IconTextComponent
                                iconName={'people'}
                                text={'0'}
                                textColor={colorTokens.dark50}
                                iconColor={colorTokens.black}
                                fontSize={16}
                            />
                        </View>
                    </Shimmer>
                </View>
            </Shimmer>
        </View>
    );
};

const styles = StyleSheet.create({
    mainCardView: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
        marginBottom: 24
    },
    followButton: {
        borderRadius: 10,
        borderColor: colorTokens.dark80,
        backgroundColor: colorTokens.light,
        borderWidth: 1,
        padding: 8,
        paddingHorizontal: 40,
        height: 24
    },
    logoContainer: {
        height: 100,
        width: 100,
        borderRadius: 50,
        marginBottom: 24
    },
    nameShimmer: {
        backgroundColor: "#f2f2f2",
        height: 20,
        width: 88,
        marginVertical: 8
    },
    buttonView: {
        backgroundColor: colorTokens.dark50,
        height: 44,
        width: 96
    },
    userData: {
        fontSize: 14,
        lineHeight: 18,
        color: '#A29EB6',
        marginBottom: 4
    },
    followList: {
        width: '88%',
        margin: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
