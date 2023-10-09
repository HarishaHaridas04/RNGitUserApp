import CustomButton from 'components/CustomButton';
import IconTextComponent from 'components/IconTextComponent';
import * as React from 'react';
import { StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { colorTokens } from 'theme/Colors';

type Post = {
  name: string;
  userName: string;
  description: string;
  location: string;
  onPressCard: () => void;
  userImage: string;
};

const FollowerCard = ({ name, userName, location, description, onPressCard, userImage }: Post) => {
  return (
    <TouchableOpacity onPress={onPressCard}
      style={[
        styles.mainCardView,
      ]}>
      <View style={[styles.logoView,]}>
        <View style={styles.logoContainer}>
          <Image
            source={{ uri: userImage } ?? require('../../../../assets/images/gitUser.png')}
            resizeMode={'contain'}
            blurRadius={22}
            style={{ height: 40, width: 40 }}
          />
        </View>
        <View style={[styles.userDetails, ]}>
          {
            name !== '' &&
            <Text style={[styles.name, { color: '#1C1243' }]}
              numberOfLines={1}
              ellipsizeMode="tail"
            >{name}</Text>
          }
          {
            userName !== '' &&
            <Text style={[styles.userName, { color: '#1C1243' }]}
              numberOfLines={1}
              ellipsizeMode="tail"
            >{userName}</Text>
          }

          {
            description !== '' &&
            <Text style={styles.userData}
              numberOfLines={1}
              ellipsizeMode="tail"
            >{description}</Text>
          }

          {location !== '' &&
            <IconTextComponent
              iconName={'location'}
              text={location}
              textColor={colorTokens.dark50}
              iconColor={colorTokens.black}
            />
          }
        </View>
      </View>
      <View>
        <CustomButton
          titleColor={colorTokens.dark80}
          buttonName="Follow"
          buttonStyle={styles.followButton}
          textStyle={{ fontSize: 16, color: colorTokens.dark80 }}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainCardView: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    shadowColor: 'rgba(0,0,0,0.4)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userDetails: {
    marginHorizontal: 8,
    width: '50%',
    justifyContent: 'center',
  },
  userName: {
    fontSize: 14,
    color: Colors.black,
    fontWeight: '400',
    textTransform: 'capitalize',
    lineHeight: 20
  },
  name: {
    fontSize: 16,
    color: Colors.black,
    fontWeight: '600',
    textTransform: 'capitalize',
    lineHeight: 20
  },
  userData: {
    fontSize: 16,
    lineHeight: 18,
    color: '#A29EB6',
    marginBottom: 4
  },
  followButton: {
    borderRadius: 10,
    borderColor: colorTokens.dark80,
    backgroundColor: colorTokens.light,
    borderWidth: 1,
    padding: 8,
    paddingHorizontal: 12,
  },
  logoView: {
    marginLeft: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  logoContainer: {
    height: 44,
    width: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center'
  }
});


export default FollowerCard;
