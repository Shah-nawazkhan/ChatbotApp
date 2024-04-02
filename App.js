/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import ChatbotApp from './ChatbotApp';

const App = () => {
	return (
		<SafeAreaView style={{ flex: 1 }}>

			<Text
				style={{
					marginLeft: 23,
					fontSize: 20,
					marginTop: 20,
					fontWeight: 'bold',
					color: 'green',
					backgroundColor: 'yellow',
					// eslint-disable-next-line comma-dangle
					marginRight: 30
				}}>
				ChatBot App</Text>

			<ChatbotApp />
		</SafeAreaView>
	);
};

export default App;
