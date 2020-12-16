import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Colours } from './colors';

const { PRIMARY_COLOUR, SECONDARY_COLOUR } = Colours;

function WeatherInfo({ currentWeather, units }) {
	const {
		main: { temp },
		weather: [details],
		name,
	} = currentWeather;

	const unitSymbol = units === 'metric' ? '°C ' : '°F';

	const { icon, main, description } = details;

	const iconURL = `https://openweathermap.org/img/wn/${icon}@4x.png`;

	return (
		<View style={styles.container}>
			<Text style={styles.name}>{name}</Text>
			<Image style={styles.img} source={{ uri: iconURL }} />
			<Text style={styles.primaryText}>
				{temp}
				{unitSymbol}
			</Text>
			<Text style={styles.desc}>{description}</Text>
			<Text style={styles.secondaryText}>{main}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		backgroundColor: Colours.LIGHT_BACKGROUND,
		paddingVertical: 20,
		borderRadius: 10,
	},
	name: {
		fontSize: 20,
		letterSpacing: 0.6,
	},
	img: {
		width: 100,
		height: 100,
	},
	desc: {
		textTransform: 'capitalize',
	},
	primaryText: {
		fontSize: 40,
		color: PRIMARY_COLOUR,
	},
	secondaryText: {
		fontSize: 20,
		color: SECONDARY_COLOUR,
		fontWeight: '500',
		marginTop: 10,
	},
});

export default WeatherInfo;
