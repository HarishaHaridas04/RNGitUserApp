import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import {
    ActivityIndicator,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';
import AppHeader from '../../components/AppHeader';
import UserCard from './components/UserCard';
import SearchInput from 'components/SearchInput';
import { colorTokens } from 'theme/Colors';
import { UserShimmerView } from 'components/shimmerViews/UserShimmerView';
import FetchUserDetails from 'utils/FetchUserDetails';
import { GET_USER_DETAILS } from 'utils/GitQueries';

interface IProps {
    navigation?: NativeStackNavigationProp<any, any>;
}


const Home = ({ navigation, }: IProps) => {

    const [searchText, setSearchText] = useState<string>('');
    const [searchData, setSearchData] = useState(null);
    const [error, setError] = useState<string>('');
    const [refresh, setRefresh] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(false);


    const onSearchUser = async (text: string) => {
        setSearchData(null);
        setLoading(true);
        setRefresh(false);
        if (text.length > 0) {
            try {
                await FetchUserDetails(GET_USER_DETAILS, { username: text })
                    .then(response => {
                        setError('');
                        if (response !== null) {
                            setSearchData(response);
                            setLoading(false);

                        } else {
                            setSearchData(null)
                            setLoading(false);
                        }
                    })
            } catch (error: any) {
                setSearchData(null)
                setLoading(false);
                setError('Please enter valied user');
            }

        } else {
            setSearchData(null);
            setLoading(false);
            setRefresh(true);
            setError('Please enter valied user');
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
                style={styles.initialView}>
                <Image
                    source={require('../../../assets/images/gitUser.png')}
                    resizeMode={'contain'}
                    style={{ height: 88, width: 88 }}
                />
                {refresh ? (
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.headerText}>
                            Let’s build from here
                        </Text>
                        <Text style={styles.subHeader}>
                            Harnessed for productivity. Designed for collaboration. Celebrated for built-in security. Welcome to the platform developers love.
                        </Text>
                    </View >
                ) : <Text
                    style={{
                        color: '#1C1243',
                        fontSize: 20
                    }}>No User Found
                </Text>
                }
            </View>
        );

    };


    return (
        <View style={styles.container}>
            <AppHeader title="GitHub" hasBack={false} />
            <SearchInput
                error={error}
                onChangeText={(text: string) => setSearchText(text)}
                onSearch={() => onSearchUser(searchText)}
            />
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                {
                    searchData !== null ?
                        <View style={{ flex: 1, }}>
                            <UserCard
                                name={searchData.name}
                                userName={searchData.login}
                                description={searchData.bio}
                                followers={searchData.followers.totalCount}
                                following={searchData.following.totalCount}
                                blog={searchData.blog ?? ''}
                                location={searchData.location ?? ''}
                                twitteUsername={searchData.twitterUsername ?? ''}
                                userImage={searchData.avatarUrl}
                                email={searchData.email ?? ''}
                                onPressFollowers={() => navigation?.navigate('FollowList', { login: searchData.followers.edges, type: 'followers' })}
                                onPressFollowing={() => navigation?.navigate('FollowList', { login: searchData.following.edges, type: 'following' })}
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
    initialView: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40
    },
    loadingView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Home;
