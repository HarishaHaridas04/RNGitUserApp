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
                    style={[
                      styles.textStyle,
                        {
                            color: textColor || colorTokens.black,
                            fontSize: fontSize ?? 14  ,
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
        justifyContent: 'center'
    },
    iconStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 8,
    },
    text: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 4,
        paddingRight: 8,
    },
    textStyle: {
        
        fontWeight: "600",
    },
});

export default IconTextComponent;
