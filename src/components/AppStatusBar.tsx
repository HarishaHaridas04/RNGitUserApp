import * as React from 'react';
import {StyleSheet, StatusBar, View} from 'react-native';
import { colorTokens } from 'theme/Colors';

interface StatusBarProps {
  backgroundColor: any;
  barStyle: any;
  translucent?: boolean;
}

const AppStatusBar: React.FC<StatusBarProps> = ({
  backgroundColor,
  barStyle,
  ...props
}) => {
  return (
    <View style={[styles.statusBar]}>
      <StatusBar backgroundColor={backgroundColor ?? colorTokens.white} barStyle={barStyle} {...props} />
    </View>
  );
};

const BAR_HEIGHT = StatusBar.currentHeight;

const styles = StyleSheet.create({
  statusBar: {
    height: BAR_HEIGHT
  }
});

export default AppStatusBar;