import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface IButtonProps {
  buttonStyle?: any;
  buttonName?: string;
  isIcons?: boolean;
  onPress?: () => void;
  textStyle?: any;
  titleColor?: string;
  iconName?: string;
  isDisabled?: boolean;
  paddingHorizontal?: number;
}

const CustomButton = ({
  buttonStyle,
  buttonName,
  onPress,
  textStyle,
  titleColor,
  isIcons,
  iconName,
  isDisabled,
}: IButtonProps) => {
  return (
    <>
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
       ...styles.container,
        ...buttonStyle,
      }}
      disabled={isDisabled}
      onPress={onPress}>
      <Text style={{...textStyle}}
       >
        {buttonName}
      </Text>
      {isIcons && (
        <View style={{marginVertical: 12, marginHorizontal: 8}}>
          <Icon name={iconName} color={titleColor} size={20} />
        </View>
      )}
    </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
    container: {
        margin: 10,
        borderRadius: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      },
})

export default CustomButton;
