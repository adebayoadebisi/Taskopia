import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Paper, useMediaQuery, useTheme } from '@mui/material';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faBed, faClover, faMugHot } from '@fortawesome/free-solid-svg-icons'

library.add(faMoon, faBed, faClover, faMugHot);

const Weather = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const [weatherData, setWeatherData] = useState(null);
    const [greeting, setGreeting] = useState('');
    const [icon, setIcon] = useState('clover');
    const [weatherIcon, setWeatherIcon] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Get user's location using geolocation API
                navigator.geolocation.getCurrentPosition(async (position) => {
                    const { latitude, longitude } = position.coords;
                    const response = await axios.get(
                        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=7edf678be3dfbb52ca6176d7c38aa0f0`
                    );
                    setWeatherData(response.data);

                    // Determine greeting and weather icon based on time of day and weather condition
                    const weatherCondition = response.data.weather[0].main.toLowerCase();
                    const weatherIcons = {
                        'clear': '☀️',
                        'clouds': '☁️',
                        'rain': '🌧️',
                    };
                    const weatherIconValue = weatherIcons[weatherCondition] ?? '🌙';
                    setWeatherIcon(weatherIconValue);

                    const hours = new Date().getHours();
                    if ((hours >= 0 && hours <= 6) || (hours >= 18 && hours <= 24) && weatherCondition == 'clear') {
                        setWeatherIcon('🌙');
                    }
                });

                const hours = new Date().getHours();
                let timeOfDay = 'Good Evening';
                setIcon('moon');
                if (hours < 6) {
                    timeOfDay = 'Good Night';
                    setIcon('bed');
                } else if (hours < 12) {
                    timeOfDay = 'Good Morning';
                    setIcon('mug-hot');
                } else if (hours < 18) {
                    timeOfDay = 'Good Afternoon';
                    setIcon('clover');
                }
                setGreeting(timeOfDay);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <Paper elevation={3} style={{ padding: '10px', gap: '20px', display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#0f1112' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#ffffff' }}>{greeting} Taskopian <FontAwesomeIcon icon={icon} color='#c2e59c' /> </Typography>
            {weatherData ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 'bold' }}>
                    <Typography variant="h6" style={{ color: '#ffffff' }}>{weatherData.name}</Typography>
                    <Typography variant="h6">{weatherIcon}</Typography>
                    <Typography variant="h6" style={{ color: '#0095ff' }}>{weatherData.main.temp.toFixed(0)}°C</Typography>

                </div>
            ) : ''}
        </Paper>
    );
};

export default Weather;
