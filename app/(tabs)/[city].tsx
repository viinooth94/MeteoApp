import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import useWeather from "../../hooks/useWeather";

export default function CityWeatherScreen() {
  const { city } = useLocalSearchParams();
  const { weather, loading, error } = useWeather(city as string);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Météo de {city}</Text>
      {loading && <Text>Chargement...</Text>}
      {error && <Text style={styles.error}>{error}</Text>}
      {weather && (
        <>
          <Text style={styles.temp}>{weather.main.temp}°C</Text>
          <Text>{weather.weather[0].description}</Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  temp: {
    fontSize: 30,
    fontWeight: "bold",
    color: "red",
  },
  error: {
    color: "red",
  },
});
