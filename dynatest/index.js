import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import Panel from './src/components/Panel';

const App = () => {
    return (
        <View>
            <Header />
            <Panel />
        </View>
    );
};

AppRegistry.registerComponent('dynatest', () => App);
