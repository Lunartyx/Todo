import React from 'react';
import Icon from '../components/Icon';
import useWeatherData from '../modules/fetchWeather';

const WeatherWidget: React.FC = () => {
    const weatherData = useWeatherData(); // Use the hook to fetch weather data

    React.useEffect(() => {
        if (weatherData.currentTemp !== null) {
            console.log('Weather Data:', weatherData);
        }
    }, [weatherData]);

    return (
        <div className="w-[350px] h-[235px] relative p-6 bg-white bg-gradient-to-br from-yellow-100 to-transparent shadow-lg rounded-[23px] transition-transform duration-700 ease-[cubic-bezier(0.15, 0.83, 0.66, 1)]">
            <div className="absolute w-[250px] h-[250px] right-[-35px] top-[-50px] flex items-center justify-center scale-75">
                <Icon icon="sunny" iconstyle='material-symbols-rounded text-9xl flex text-gradient'></Icon>
            </div>

            <div className="flex flex-col gap-2">
                <span className="font-extrabold text-[15px] leading-[135%] text-yellow-900/66">
                    Oberhasli, Zürich<br />Switzerland
                </span>
            </div>

            <span className="absolute left-6 bottom-3 font-bold text-[64px] leading-[77px] text-yellow-900">
                {weatherData.currentTemp !== null ? `${weatherData.currentTemp}°` : 'Loading...'}
            </span>
        </div>
    );
};

export default WeatherWidget;
