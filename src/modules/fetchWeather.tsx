import React, { useEffect, useState } from 'react';

interface FetchedWeatherData {
    currentTemp: number | null;
    highTemp: number | null;
    lowTemp: number | null;
    rainChance: number | null;
}

const fetchWeather: React.FC = () => {
    const [weatherData, setWeatherData] = useState<FetchedWeatherData>({
        currentTemp: null,
        highTemp: null,
        lowTemp: null,
        rainChance: null,
    });

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await fetch(
                    `https://api.tomorrow.io/v4/timelines?location=47.4647,8.4915&fields=temperature,precipitationProbability&timesteps=1d,1h&units=metric&apikey=YOUR_API_KEY`
                );
                const data = await response.json();

                const currentTemp = data.data.timelines[1].intervals[0].values.temperature;
                const highTemp = Math.max(
                    ...data.data.timelines[0].intervals.map((interval: any) => interval.values.temperature)
                );
                const lowTemp = Math.min(
                    ...data.data.timelines[0].intervals.map((interval: any) => interval.values.temperature)
                );
                const rainChance = data.data.timelines[1].intervals[0].values.precipitationProbability;

                setWeatherData({
                    currentTemp,
                    highTemp,
                    lowTemp,
                    rainChance,
                });
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchWeatherData();
    }, []);

    return (
        <div>
            <h2>Weather in Oberhasli, Switzerland</h2>
            <p>Current Temperature: {weatherData.currentTemp}°C</p>
            <p>High Temperature: {weatherData.highTemp}°C</p>
            <p>Low Temperature: {weatherData.lowTemp}°C</p>
            <p>Chance of Rain: {weatherData.rainChance}%</p>
        </div>
    );
};

export default fetchWeather;
