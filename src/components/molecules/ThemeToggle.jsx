import { useTheme } from "../context/ThemeContext";
import Switch from "../atoms/Switch";

export default function ThemeToggle() {
  const { themeKey, setTheme, themes } = useTheme();

  const isDark = themeKey === "dark";
  const handleToggle = (val) => setTheme(val ? "dark" : "light");

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <Switch checked={isDark} onChange={handleToggle} label="Dark mode" />
      <select
        value={themeKey}
        onChange={(e) => setTheme(e.target.value)}
        style={{
          padding: 8,
          borderRadius: 8,
          border: "1px solid var(--mute)",
          background: "transparent",
          color: "inherit",
        }}
      >
        {Object.entries(themes).map(([key, t]) => (
          <option key={key} value={key}>
            {t.name}
          </option>
        ))}
      </select>
    </div>
  );
}
