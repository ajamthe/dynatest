import React from 'react';
import { View, Text, Button } from 'react-native';
import Dynatrace from '../../Dynatrace';

function onPressLearnMore() {
    const dynatrace = new Dynatrace();
    dynatrace.enterAction("Button Pressed");
}

const Panel = () => {
    const { textLarge, textSmall, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textLarge}>Dynatrace Testing App</Text>
            <Text style={textSmall}>This is an app to test dynatrace</Text>
            <Button
                onPress={onPressLearnMore}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
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

