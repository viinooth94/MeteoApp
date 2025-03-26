import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter(); 

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/weather.png")} style={styles.image} />

      <Text style={styles.title}>Bienvenue sur Météo App 🌦️</Text>
      <Text style={styles.subtitle}>La météo des villes du monde entier en un clic !</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/weather")}>
        <Text style={styles.buttonText}>Voir la météo 🌍</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#87CEEB", // Bleu ciel
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
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
});
