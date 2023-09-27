import * as React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import CustomText from './CustomText';
import { colorTokens } from 'theme/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { Touchable } from 'react-native';

interface IProps {
  error: string;
  onChangeText: (text: string) => void;
  onSearch: ()=> void;
}

const SearchInput = ({ error, onChangeText,onSearch, ...props }: IProps) => {
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <View style={{  margin: 24}}>
      <View
        style={[
          styles.inputContainer,
          {
            backgroundColor: colorTokens.white,
            borderColor: isFocused ? colorTokens.black : colorTokens.white,
            height: 48
          }
        ]}>
        <TextInput
          {...props}
          autoCorrect={false}
          onFocus={() => {
            setIsFocused(true);
          }}
          placeholder="Search or jump to..."
          onBlur={() => setIsFocused(false)}
          style={styles.textStyle}
          onChangeText={onChangeText}
        />
        <TouchableOpacity onPress={onSearch}>
        <Icon
          name={"search"}
          color={ colorTokens.dark80}
          size={16}
        />
        </TouchableOpacity>
       
      </View>
      {error && (
        <CustomText textsStyle={styles.serachTextError}>{error}</CustomText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: '#1C1243',
    flex: 1,
    fontSize: 16
  },
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    elevation: 8,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOpacity: 0.08,
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowRadius: 8
  },
  serachTextError: {
    marginTop: 7,
    color: 'red',
    fontSize: 12
  }
});

export default SearchInput;
