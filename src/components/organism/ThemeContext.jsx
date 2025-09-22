import { createContext, useContext, useEffect, useMemo, useState } from "react";

// 🎯 Temi definiti qui, dentro React
const THEMES = {
  light: {
    name: "Chiaro",
    bg: "#FFFFFF",
    text: "#2E2E2E",
    mute: "#F2F2F2",
    accent: "#B68642", // oro del logo
  },
  warm: {
    name: "Sofisticata",
    bg: "#FAFAF8",
    text: "#2F4B59",
    mute: "#A59E92",
    accent: "#B68642",
  },
  fresh: {
    name: "Fresca",
    bg: "#FFFFFF",
    text: "#2E2E2E",
    mute: "#E5E5E5",
    accent: "#7A9D87", // salvia
  },
  dark: {
    name: "Scuro",
    bg: "#121212",
    text: "#EDEDED",
    mute: "#1E1E1E",
    accent: "#B68642",
  },
};

const DEFAULT_THEME_KEY = "light";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [themeKey, setThemeKey] = useState(
    () => localStorage.getItem("themeKey") || DEFAULT_THEME_KEY
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", themeKey);
    localStorage.setItem("themeKey", themeKey);
  }, [themeKey]);

  const value = useMemo(
    () => ({
      themeKey,
      setTheme: setThemeKey,
      themes: THEMES,
    }),
    [themeKey]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme deve essere usato dentro <ThemeProvider>");
  return ctx;
}
