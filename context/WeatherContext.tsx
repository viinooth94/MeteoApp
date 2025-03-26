import { createContext, useContext, useState } from "react";

const WeatherContext = createContext(null);

export const WeatherProvider = ({ children }) => {
  const [unit, setUnit] = useState("metric");
  return (
    <WeatherContext.Provider value={{ unit, setUnit }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeatherContext = () => useContext(WeatherContext);
