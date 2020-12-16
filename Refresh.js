import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Foundation } from '@expo/vector-icons';
import { Colours } from './colors';

const Refresh = ({ load }) => {
	return (
		<View style={styles.container}>
			<Foundation
				onPress={() => load()}
				name="refresh"
				size={34}
				color={Colours.PRIMARY_COLOUR}
			/>
		</View>
	);
};

export default Refresh;

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'flex-end',
	},
});
