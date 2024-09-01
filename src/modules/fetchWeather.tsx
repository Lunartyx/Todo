import { useEffect, useState } from 'react';

interface FetchedWeatherData {
    currentTemp: number | null;
    highTemp: number | null;
    rainChance: number | null;
}

const useWeatherData = () => {
    const [weatherData, setWeatherData] = useState<FetchedWeatherData>({
        currentTemp: null,
        highTemp: null,
        rainChance: null,
    });

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await fetch(
                    `https://api.tomorrow.io/v4/timelines?location=47.4647,8.4915&fields=temperature,precipitationProbability&timesteps=1d,1h&units=metric&apikey=JPNm7qYM3J8pn9ByxuiQ1U7eA1dSxL24`
                );
                const data = await response.json();

                const currentTemp = Math.round(data.data.timelines[1].intervals[0].values.temperature);
                const highTemp = Math.round(
                    Math.max(...data.data.timelines[0].intervals.map((interval: any) => interval.values.temperature))
                );
                const rainChance = Math.round(data.data.timelines[1].intervals[0].values.precipitationProbability);

                setWeatherData({
                    currentTemp,
                    highTemp,
                    rainChance,
                });
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchWeatherData();
    }, []);

    return weatherData;
};

export default useWeatherData;
