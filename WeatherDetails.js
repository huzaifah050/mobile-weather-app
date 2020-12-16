import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { Colours } from './colors';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const { PRIMARY_COLOUR, SECONDARY_COLOUR, BORDER_COLOR } = Colours;

const WeatherDetails = ({ currentWeather, units }) => {
	const {
		main: { feels_like, humidity, pressure },
		wind: { speed },
	} = currentWeather;

	const name = Platform.OS === 'ios' ? 'ios-water' : 'md-water';
	const speedname =
		Platform.OS === 'ios' ? 'ios-speedometer' : 'md-speedometer';
	const windSpeed =
		units === 'metric'
			? `${Math.round(speed)} m/s`
			: `${Math.round(speed)} miles/h`;
	return (
		<View style={styles.container}>
			<View style={styles.row}>
				<View
					style={{
						...styles.box,
						borderRightWidth: 1,
						borderRightColor: BORDER_COLOR,
					}}
				>
					<View style={styles.row}>
						<FontAwesome5
							name="temperature-low"
							size={25}
							color={PRIMARY_COLOUR}
						/>
						<View style={styles.items}>
							<Text>Feels like:</Text>
							<Text style={styles.textSecondary}>{feels_like}°</Text>
						</View>
					</View>
				</View>

				<View style={styles.box}>
					<View style={styles.row}>
						<Ionicons name={name} size={24} size={25} color={PRIMARY_COLOUR} />

						<View style={styles.items}>
							<Text>Humidity:</Text>
							<Text style={styles.textSecondary}>{humidity}%</Text>
						</View>
					</View>
				</View>
			</View>

			<View
				style={{
					...styles.row,
					borderTopWidth: 1,
					borderTopColor: BORDER_COLOR,
				}}
			>
				<View
					style={{
						...styles.box,
						borderRightWidth: 1,
						borderRightColor: BORDER_COLOR,
					}}
				>
					<View style={styles.row}>
						<MaterialCommunityIcons
							name="weather-windy-variant"
							size={25}
							color={PRIMARY_COLOUR}
						/>

						<View style={styles.items}>
							<Text>Wind speed:</Text>
							<Text style={styles.textSecondary}>{windSpeed}</Text>
						</View>
					</View>
				</View>

				<View style={styles.box}>
					<View style={styles.row}>
						<Ionicons name={speedname} size={25} color={PRIMARY_COLOUR} />
						<View style={styles.items}>
							<Text>Pressure:</Text>
							<Text style={styles.textSecondary}>{pressure} hPa</Text>
						</View>
					</View>
				</View>
			</View>
		</View>
	);
};

export default WeatherDetails;

const styles = StyleSheet.create({
	container: {
		borderColor: BORDER_COLOR,
		borderWidth: 1,
		borderRadius: 10,
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	box: {
		flex: 1,
		paddingVertical: 20,
	},
	items: {
		alignItems: 'flex-end',
		justifyContent: 'flex-end',
	},
	textSecondary: {
		fontSize: 15,
		fontWeight: '700',
		color: SECONDARY_COLOUR,
	},
});
