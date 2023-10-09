import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colorTokens } from 'theme/Colors';

export interface IconTextComponentProps {
    iconName: string;
    iconBackground?: string;
    text?: string;
    textColor?: string;
    iconColor?: string;
    fontSize?: number;
}

const IconTextComponent = (props: IconTextComponentProps) => {
    const { iconColor, iconName, textColor,  text,fontSize} = props;
    return (
        <View style={styles.container}>
            <View style={styles.iconStyle}>
                <Icon
                    name={iconName}
                    color={iconColor || colorTokens.black}
                    size={18}
                />
            </View>
            <View style={styles.text}>
                <Text
                   numberOfLines={1}
                   ellipsizeMode="tail"
                    style={[
                      styles.textStyle,
                      
                        {
                            color: textColor || colorTokens.black,
                            fontSize: fontSize ?? 12  ,
                        },
                    ]}>
                    {text}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    iconStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 4,
    },
    text: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 4,
        paddingRight: 2,
    },
    textStyle: {
        
        fontWeight: "600",
    },
});

export default IconTextComponent;
