import { useState, useMemo } from "react";
import { View, Text, TextInput, ActivityIndicator, StyleSheet, Image, TouchableOpacity, FlatList } from "react-native";
import useWeather from "../../hooks/useWeather";
import { useRouter } from "expo-router";
import Animated, { FadeIn } from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";

export default function WeatherScreen() {
  const [city, setCity] = useState("Paris");
  const { weather, loading, error } = useWeather(city);
  const router = useRouter();
  const [history, setHistory] = useState<string[]>([]);

  const searchCity = (newCity: string) => {
    setCity(newCity);
    if (!history.includes(newCity)) {
      setHistory([...history, newCity]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🌍 Rechercher une ville</Text>
      <TextInput style={styles.input} placeholder="Entrez une ville" value={city} onChangeText={searchCity} />
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {error && <Text style={styles.error}>{error}</Text>}
      {weather && (
        <Animated.View entering={FadeIn.duration(1000)} style={styles.weatherContainer}>
          <Text style={styles.city}>📍 {weather.name}</Text>
          <Image source={{ uri: `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png` }} style={styles.icon} />
          <Text style={styles.temp}>🌡️ {weather.main.temp}°C</Text>
          <Text style={styles.desc}>{weather.weather[0].description}</Text>
          <TouchableOpacity style={styles.button} onPress={() => router.push(`/weather/${city}`)}>
            <Text style={styles.buttonText}>Voir les détails 🌍</Text>
          </TouchableOpacity>
        </Animated.View>
      )}

<PanGestureHandler onGestureEvent={() => console.log("Glissé !")}>
      <FlatList data={history} keyExtractor={(item) => item} renderItem={({ item }) => (
        <TouchableOpacity onPress={() => setCity(item)} style={styles.historyItem}>
          <Text>{item}</Text>
        </TouchableOpacity>
      )} />
      </PanGestureHandler>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#87CEEB",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  input: {
    width: "80%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 5,
    marginBottom: 20,
    textAlign: "center",
    backgroundColor: "#ffffff80", // Fond semi-transparent
    color: "#000",
  },
  weatherContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  city: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  temp: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
  },
  desc: {
    fontSize: 18,
    fontStyle: "italic",
    color: "#fff",
  },
  icon: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#FFA500", // Orange
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  error: {
    color: "red",
    fontSize: 16,
    marginTop: 10,
  },
});
