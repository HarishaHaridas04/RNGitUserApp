import { useIsFocused } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';
import {
    ActivityIndicator,
    FlatList,
    StyleSheet,
    Text,
    View
} from 'react-native';
import AppHeader from '../../components/AppHeader';
import { Octokit } from '@octokit/rest';
import FollowerCard from './components/FollowerCard';
import { colorTokens } from 'theme/Colors';
import FollowShimmerView from 'components/shimmerViews/FollowShimmerView';


const FollowList = ({ route, navigation }) => {

    const { login, type } = route.params;

    const [userData, setUserData] = useState<any[]>([]);
    const [dataLimit, setDataLimit] = useState<number>(10);
    const [loading, setLoading] = useState<boolean>(true);
    const [refreshing, setRefreshing] = useState<boolean>(false);
    const [offsetValue, setOffsetValue] = useState(0);
    const isFocused = useIsFocused();

    const octokit = new Octokit({
        auth: process.env.API_TOKEN
    });

    useEffect(() => {
        setUserData([]);
        setOffsetValue(0);
        fetchEmployeeData(offsetValue);
    }, [refreshing, isFocused]);


    const fetchEmployeeData = async (offset: number) => {

        try {
            await octokit.request(`/users/${login}/${type}`)
                .then(response => {
                    if (response.data.length !== 0) {
                        const list =
                            offset === 0
                                ? response.data
                                : [...userData, ...response.data];
                        setUserData(list);
                        setLoading(false);
                        setRefreshing(false);
                    } else {
                        setLoading(false);
                    }
                })
        } catch (error: any) {
            setLoading(false);
        }
    };


    const loadMoreData = useCallback(() => {
        if (userData.length === dataLimit) {
            setLoading(true);
            const offsetLimit = offsetValue + 10;
            setDataLimit((prev: number) => prev + 10);
            setOffsetValue(offsetLimit);

            fetchEmployeeData(offsetLimit);
        }
    }, [dataLimit, fetchEmployeeData]);


    const renderFooter = () => {
        return <FollowShimmerView/>;
    };

    const userListView = () => {
        return (
            <View
                style={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 40
                }}>
                <Text
                    style={{
                        color: '#1C1243',
                        fontSize: 20
                    }}>
                    No Data Found
                </Text>
            </View>
        );
    };


    return (
        <View style={styles.container}>
            <AppHeader title={type === "Followers" ? 'Followers' : 'following'} hasBack={true} />
            <View style={{ padding: 24, paddingBottom: 80 }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={userData}
                    renderItem={({ item, index }: any) =>
                        item.name !== '' ? (
                            <View style={{ paddingTop: 8, marginBottom: 8 }}>
                                <FollowerCard
                                    name={item.name}
                                    userName={item.login}
                                    onPressCard={() => {
                                        setUserData([]);
                                        setRefreshing(true);
                                        setLoading(true);
                                        navigation?.navigate('Profile', { userName: item.login })
                                    }
                                    }
                                    description={item.description}
                                    location={item.location ?? ''}
                                    userImage={item.avatar_url}
                                />
                            </View>
                        ) : null
                    }
                    initialNumToRender={10}
                    removeClippedSubviews={true}
                    bounces={false}
                    onEndReached={loadMoreData}
                    onEndReachedThreshold={0.4}
                    maxToRenderPerBatch={10}
                    windowSize={21}
                    ListFooterComponent={loading ? renderFooter : null}
                    ListEmptyComponent={!loading ? userListView() : null}
                    refreshing={refreshing}
                    onRefresh={() => {
                        setOffsetValue(0), setDataLimit(10), setRefreshing(true);
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 0,
        backgroundColor: colorTokens.white,
    },
})

export default FollowList;
