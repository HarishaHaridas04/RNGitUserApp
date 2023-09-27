import { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';
import AppHeader from '../../components/AppHeader';
import { Octokit } from "@octokit/rest";
import { colorTokens } from 'theme/Colors';
import UserCard from 'screens/home/components/UserCard';
import { UserShimmerView } from 'components/shimmerViews/UserShimmerView';


const Profile = ({ route, navigation, }) => {

    const { userName } = route.params;

    const [profileData, setProfileData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const octokit = new Octokit({
        auth: process.env.API_TOKEN
    });

    useEffect(() => {
        fetchUserDetailes();
    }, []);

    const fetchUserDetailes = async () => {
        setLoading(true);
        try {
            await octokit.users.getByUsername({
                username: userName,
            })

                .then(response => {
                    // Handle the response response.data.profileData =========> search user
                    console.warn(response.data, '<=====================================================response thellecodes');
                    if (response.data !== null) {
                        setProfileData(response.data);
                        setLoading(false);
                    } else {
                        setProfileData(null)
                        setLoading(false);
                    }
                })
        } catch (error: any) {
            setProfileData(null)
            setLoading(false);
        }
    };


    const renderNoData = () => {
        if (loading) {
            return (
                <UserShimmerView />
            )
        }
        
        return (
            <View
                style={styles.noDataView}>
                <Image
                    source={require('../../../assets/images/gitUser.png')}
                    resizeMode={'contain'}
                    style={{ height: 88, width: 88 }}
                />

                <Text
                    style={{
                        color: '#1C1243',
                        fontSize: 20
                    }}>No User Found
                </Text>

            </View>
        );

    };


    return (
        <View style={styles.container}>
            <AppHeader title="User Profie" hasBack={true} />
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                {
                    profileData !== null ?
                        <View style={{ flex: 1 }}>
                            <UserCard
                                name={profileData.name}
                                userName={profileData.login}
                                description={profileData.bio}
                                followers={profileData.followers}
                                following={profileData.following}
                                blog={profileData.blog ?? ''}
                                location={profileData.location ?? ''}
                                twitteUsername={profileData.twitter_username ?? ''}
                                userImage={profileData.avatar_url}
                                email={profileData.email ?? ''}
                                onPressFollowers={() => navigation?.navigate('FollowList', { login: profileData.login, type: 'followers' })}
                                onPressFollowing={() => navigation?.navigate('FollowList', { login: profileData.login, type: 'following' })}
                            />
                        </View>
                        : renderNoData()}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 0,
        backgroundColor: colorTokens.white,
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: colorTokens.dark80,
        paddingBottom: 16
    },
    subHeader: {
        fontWeight: '500',
        fontSize: 12,
        color: colorTokens.dark80,
    },
    loadingView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    noDataView: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40
    }
})

export default Profile;
