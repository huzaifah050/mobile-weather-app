import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';
import WeatherInfo from './WeatherInfo';
import UnitsPicker from './UnitsPicker';
import { Colours } from './colors';
import Refresh from './Refresh';
import WeatherDetails from './WeatherDetails';
import { WEATHER_API_KEY } from '@env';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?';

export default function App() {
	const [errorMsg, setErrorMsg] = useState(null);
	const [currentWeather, setCurrentWeather] = useState(null);
	const [units, setUnits] = useState('metric');
	console.log(units, 'app');

	useEffect(() => {
		load();
	}, [units]);

	async function load() {
		setCurrentWeather(null);
		setErrorMsg(null);
		try {
			let { status } = await Location.requestPermissionsAsync();

			if (status !== 'granted') {
				setErrorMsg('Access needed to run application');
				return;
			}

			const location = await Location.getCurrentPositionAsync();
			const { latitude, longitude } = location.coords;

			const weatherURL = `${BASE_URL}lat=${latitude}&lon=${longitude}&units=${units}&appid=${WEATHER_API_KEY}`;

			const response = await fetch(weatherURL);
			const result = await response.json();

			if (response.ok) {
				setCurrentWeather(result);
			} else {
				setErrorMsg(result.message);
			}
		} catch (error) {
			setErrorMsg(error.message);
		}
	}

	if (currentWeather) {
		return (
			<View style={styles.container}>
				<Refresh load={load} />
				<UnitsPicker units={units} setUnits={setUnits} />

				<WeatherInfo units={units} currentWeather={currentWeather} />
				<WeatherDetails currentWeather={currentWeather} units={units} />
				<StatusBar style="auto" />
			</View>
		);
	} else if (errorMsg) {
		return (
			<View style={styles.container}>
				<Text style={{ textAlign: 'center' }}>{errorMsg}</Text>
				<StatusBar style="auto" />
			</View>
		);
	} else {
		return (
			<View style={styles.containerActivity}>
				<ActivityIndicator size="large" color={Colours.PRIMARY_COLOUR} />
				<StatusBar style="auto" />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: 'pink',
		justifyContent: 'space-around',
		marginVertical: 80,
		marginHorizontal: 30,
	},
	containerActivity: {
		flex: 1,
		backgroundColor: '#fff',
		justifyContent: 'center',
	},
});
