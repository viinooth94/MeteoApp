import { useState } from "react";
import { View, Text, StyleSheet, Switch, TouchableOpacity } from "react-native";

export default function SettingsScreen() {
  const [isDarkMode, setIsDarkMode] = useState(false); 
  const [unit, setUnit] = useState("metric"); 

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? "#333" : "#f5f5f5" }]}>
      <Text style={[styles.title, { color: isDarkMode ? "#fff" : "#000" }]}>⚙️ Paramètres</Text>

      <View style={styles.option}>
        <Text style={[styles.optionText, { color: isDarkMode ? "#fff" : "#000" }]}>🌙 Mode sombre</Text>
        <Switch value={isDarkMode} onValueChange={setIsDarkMode} />
      </View>

      <View style={styles.option}>
        <Text style={[styles.optionText, { color: isDarkMode ? "#fff" : "#000" }]}>
          🌡️ Unité de température
        </Text>
        <View style={styles.unitContainer}>
          <TouchableOpacity
            style={[styles.unitButton, unit === "metric" && styles.activeUnit]}
            onPress={() => setUnit("metric")}
          >
            <Text style={styles.unitText}>°C</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.unitButton, unit === "imperial" && styles.activeUnit]}
            onPress={() => setUnit("imperial")}
          >
            <Text style={styles.unitText}>°F</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  option: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffffff90",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  optionText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  unitContainer: {
    flexDirection: "row",
    gap: 10,
  },
  unitButton: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#e0e0e0",
  },
  activeUnit: {
    backgroundColor: "#FFA500",
    borderColor: "#FF8C00",
  },
  unitText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});
