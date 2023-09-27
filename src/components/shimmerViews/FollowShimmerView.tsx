import * as React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Shimmer from 'react-native-shimmer';

const FollowShimmerView = () => {
    return (
        <>
            {[0, 1, 2, 3].map((_) => (
                <Shimmer animating={true} style={{marginVertical: 8}}>
                    <View style={styles.mainCardView}>
                        <View style={styles.logoView}>
                            <View style={styles.logoContainer}>
                                <Shimmer animating={true}>
                                    <Image
                                        source={require('../../../assets/images/gitUser.png')}
                                        resizeMode="contain"
                                        style={{ height: 44, width: 44 }}
                                    />
                                </Shimmer>
                            </View>
                            <View style={styles.userDetails}>
                                <Shimmer animating={true}>
                                    <Text style={styles.name} />
                                </Shimmer>
                                <Shimmer animating={true}>
                                    <Text style={styles.userName} />
                                </Shimmer>
                                <Shimmer animating={true}>
                                    <Text style={styles.userData} />
                                </Shimmer>
                            </View>
                        </View>
                        <View >
                            <Shimmer animating={true}>
                                <View style={styles.followButton} />
                            </Shimmer>
                        </View>
                    </View>
                </Shimmer>
            ))}
        </>
    );
};

const styles = StyleSheet.create({
    mainCardView: {
        backgroundColor: "#f2f2f2",
        borderRadius: 8,
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: "#f2f2f2",
    },
    userDetails: {
        marginHorizontal: 8,
        width: '50%',
    },
    userName: {
        fontSize: 14,
        color: '#000000',
        fontWeight: '400',
        textTransform: 'capitalize',
        lineHeight: 20,
    },
    name: {
        fontSize: 16,
        color: '#000000',
        fontWeight: '600',
        textTransform: 'capitalize',
        lineHeight: 20,
    },
    userData: {
        fontSize: 16,
        lineHeight: 18,
        color: '#A29EB6',
        marginBottom: 4,
    },
    followButton: {
        borderRadius: 10,
        borderColor: '#000000',
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        padding: 8,
        paddingHorizontal: 24,
        height: 24
    },
    logoView: {
        marginLeft: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    logoContainer: {
        height: 44,
        width: 44,
        borderRadius: 22,
    },
});

export default FollowShimmerView;
