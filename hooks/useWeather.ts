import { useState, useEffect } from "react";

const API_KEY = "15a650899c48d884406af31dade49435"; 
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

export default function useWeather(city: string) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!city) return;

    const fetchWeather = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${API_URL}?q=${city}&units=metric&appid=${API_KEY}&lang=fr`
        );

        const data = await response.json();
        if (response.ok) {
          setWeather(data);
          setError(null);
        } else {
          setError("Ville introuvable");
          setWeather(null);
        }
      } catch (err) {
        setError("Erreur de connexion");
        setWeather(null);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  return { weather, loading, error };
}
