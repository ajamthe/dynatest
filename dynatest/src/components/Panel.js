import React from 'react';
import { View, Text } from 'react-native';

const Panel = () => {
    const { textLarge, textSmall, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textLarge}>Dynatrace Testing App</Text>
            <Text style={textSmall}>This is an app to test dynatrace</Text>
        </View>
    );
};

const styles = {
    textLarge: {
        fontSize: 20
    },
    textSmall: {
        fontSize: 15
    },
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 200,
    }
};

export default Panel;

