import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { Colours } from './colors';

const UnitsPicker = ({ units, setUnits }) => {
	return (
		<View style={styles.container}>
			<View style={styles.box}>
				<Picker
					selectedValue={units}
					onValueChange={(item) => setUnits(item)}
					mode="dropdown"
				>
					<Picker.Item label="°C" value="metric" />
					<Picker.Item label="°F" value="imperial" />
				</Picker>
			</View>
		</View>
	);
};

export default UnitsPicker;

const styles = StyleSheet.create({
	container: {
		backgroundColor: Colours.LIGHT_BACKGROUND,
		width: '80%',
		alignSelf: 'center',
		borderRadius: 10,
	},
	box: {
		// backgroundColor: 'green',
	},
});
