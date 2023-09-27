import CustomButton from 'components/CustomButton';
import IconTextComponent from 'components/IconTextComponent';
import * as React from 'react';
import { StyleSheet, Image, Text, TouchableOpacity, View, } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { colorTokens } from 'theme/Colors';

type IProps = {
  name: string;
  userName: string;
  description: string;
  location: string;
  followers: string;
  following: string;
  userImage: string;
  blog: string;
  email: string;
  twitteUsername: string;
  onPressFollowers?: () => void;
  onPressFollowing?: () => void;
};

const UserCard = ({ name, userName, followers, description, following, userImage, blog, twitteUsername, location, onPressFollowers, onPressFollowing, email }: IProps) => {


  const DetailsView = (header: string, data: any[]) => {
    return (
      <View style={styles.otherDetails}>
        <View style={styles.detailsHeader} />
        <Text style={[styles.userData, { fontSize: 16, color: colorTokens.dark, }]}>
          {header}
        </Text>
        <View style={styles.listView}>
          {data.map((item) => {
            return (
              <TouchableOpacity style={styles.dummyLogos}>
                <Image
                  source={item}
                  resizeMode={'contain'}
                  borderRadius={24}
                  style={{ height: 48, width: 48 }}
                />
              </TouchableOpacity>
            )
          })}
        </View>
      </View>
    )
  }

  return (
    <View
      style={[
        styles.mainCardView,

      ]}
    >
      <View style={styles.logoContainer}>
        <Image
          source={{ uri: userImage } ?? require('../../../../assets/images/gitUser.png')}
          resizeMode={'contain'}
          borderRadius={44}
          style={{ height: 100, width: 100 }}
        />
      </View>

      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={[styles.userName, { color: colorTokens.dark }]}>{name}</Text>
        <Text style={[styles.name, { color: colorTokens.dark50 }]}>{userName}</Text>
        {location !== '' &&
          <IconTextComponent
            iconName={'location'}
            text={location}
            textColor={colorTokens.dark50}
            iconColor={colorTokens.black}
          />
        }

      </View>
      <CustomButton
        titleColor={colorTokens.dark80}
        buttonName="Follow"
        buttonStyle={styles.followButton}
        textStyle={{ fontSize: 16, color: colorTokens.dark80 }}
      />
      <Text style={[styles.userData, { fontSize: 16 }]}>{description}</Text>
      <View
        style={styles.followList}>
        <TouchableOpacity onPress={onPressFollowers}>
          <Text style={styles.userData}>
            Followers
          </Text>
          <IconTextComponent
            iconName={'people'}
            text={followers ?? '0'}
            textColor={colorTokens.dark50}
            iconColor={colorTokens.black}
            fontSize={16}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressFollowing}>
          <Text style={styles.userData}>
            Following
          </Text>
          <IconTextComponent
            iconName={'people'}
            text={following ?? '0'}
            textColor={colorTokens.dark50}
            iconColor={colorTokens.black}
            fontSize={16}
          />
        </TouchableOpacity>
      </View>
      {email !== '' && <View style={styles.userLinks}>
        <IconTextComponent
          iconName={'mail'}
          text={blog}
          textColor={colorTokens.dark50}
          iconColor={colorTokens.black}
        />
      </View>
      }
      {blog !== '' && <View style={{
        width: '88%',
        marginHorizontal: 16, alignItems: 'flex-start'
      }}>
        <IconTextComponent
          iconName={'link'}
          text={blog}
          textColor={colorTokens.dark50}
          iconColor={colorTokens.black}
        />
      </View>
      }
      {twitteUsername !== '' &&
        <View style={{
          width: '88%',
          marginHorizontal: 16, alignItems: 'flex-start'
        }}>
          <IconTextComponent
            iconName={'logo-twitter'}
            text={twitteUsername}
            textColor={colorTokens.dark50}
            iconColor={colorTokens.black}
          />
        </View>}
      {DetailsView('Achievements', [
        require('../../../../assets/images/github3.png')
        ,

        require('../../../../assets/images/github5.png')
        ,

        require('../../../../assets/images/github4.png')
        ,
      ])}
      {DetailsView('Organizations', [

        require('../../../../assets/images/github1.png'),

        require('../../../../assets/images/github2.png')
        ,
      ])}
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
    margingVertical: 24
  },
  subCardView: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: Colors.history_back,
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center'
  },
  userLinks: {
    width: '88%',
    marginHorizontal: 16,
    alignItems: 'flex-start'
  },
  logoContainer: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginBottom: 24
  },
  userName: {
    fontSize: 20,
    fontWeight: '700',
    textTransform: 'capitalize',
  },
  name: {
    fontSize: 16,
    fontWeight: '400',
    textTransform: 'capitalize',
    marginVertical: 8
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
    justifyContent: 'space-between'
  },
  otherDetails: {
    alignItems: 'flex-start',
    width: '100%',
    paddingHorizontal: 8
  },
  detailsHeader: {
    height: 0.5,
    width: '96%',
    backgroundColor: colorTokens.dark50,
    marginVertical: 20
  },
  dummyLogos: {
    height: 48,
    width: 48,
    borderRadius: 24,
    margin: 8
  },
  listView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  }
});


export default UserCard;
