import * as React from 'react';
import { Text, StyleSheet } from 'react-native';

type CustomTextProps = { textsStyle: any; children: any, numberOfLines?: number };

const CustomText: React.FC<CustomTextProps> = ({ children, textsStyle, numberOfLines }) => {
  return <Text
    style={[styles.textWrapper, textsStyle, ]}
    numberOfLines={numberOfLines ?? 1}
    ellipsizeMode='tail'
  >{children}</Text>;
};
const styles = StyleSheet.create({
  textWrapper: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
export default CustomText;
