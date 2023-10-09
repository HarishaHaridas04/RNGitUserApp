import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colorTokens } from '../theme/Colors';
import { CommonActions, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type AppHeaderPropTypes = {
  navigation?: NativeStackNavigationProp<any, any>;
  title: string;
  hasBack: boolean;
  children?: any;
};

const AppHeader = ({
  navigation = useNavigation(),
  title,
  hasBack = false,
  children
}: AppHeaderPropTypes) => {
  return (
    <View style={styles.header}>
      {hasBack && (
        <TouchableOpacity
          style={[styles.buttonStyle, ]}
          onPress={() => navigation.goBack()}>
          <Icon name={'chevron-back'} size={28} color={'#000000'}/>
        </TouchableOpacity>
      ) }
      <Text
        style={[styles.headerText, { width: '80%' }]}
        numberOfLines={1}
        ellipsizeMode="tail">
        {title}
      </Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 12,
    marginBottom: 24,
    margin: 8
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 24,
    color: colorTokens.dark80
  },
  buttonStyle: {
    height: 44,
    width: 44,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default AppHeader;
