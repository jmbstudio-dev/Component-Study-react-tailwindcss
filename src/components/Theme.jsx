import { useState } from "react";
const themes = {
  dark: {
    "--color-background": "#121416",
    "--color-card": "#141a1f",
    "--color-border": "#242b32",
    "--color-surface": "#1a2329",
    "--color-foreground": "#eff1f5",
    "--color-muted-foreground": "#777e8f",
  },

  soft: {
    "--color-background": "#24273A",
    "--color-card": "#2e3148",
    "--color-border": "#3a3f5c",
    "--color-surface": "#313552",
    "--color-foreground": "#e6e9ef",
    "--color-muted-foreground": "#9aa0b4",
  },

  light: {
    "--color-background": "#EFF1F5",
    "--color-card": "#ffffff",
    "--color-border": "#242b32",
    "--color-surface": "#f5f6fa",
    "--color-foreground": "#1f2328",
    "--color-muted-foreground": "#5c6270",
  },
};

const colors = [
  "#9cc8ff",
  "#B4BEFE",
  "#73B6C5",
  "#62A5C6",
  "#7CBAB3",
  "#8ABB8A",
  "#CDBA95",
  "#CAB9B9",
  "#C7AAAD",
  "#CAA1C2",
  "#A88ACE",
  "#C8758F",
];

export const Theme = () => {
  // THEME
  const [activeColor, setActiveColor] = useState(colors[0]);
  const changePrimaryColor = (color) => {
    setActiveColor(color);
    document.documentElement.style.setProperty("--color-primary", color);
  };

  const [activeTheme, setActiveTheme] = useState("dark");
  const changeTheme = (themeName) => {
    setActiveTheme(themeName);

    const theme = themes[themeName];

    Object.entries(theme).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
  };
  return (
    <div className="grid gap-4">
      <div className="glass rounded-lg flex justify-between items-center">
        <div className=" rounded-lg flex justify-between mx-auto space-x-4 p-2">
          {["dark", "soft", "light"].map((theme) => (
            <button
              key={theme}
              onClick={() => changeTheme(theme)}
              className={`pb-1 capitalize transition-all
                        ${
                          activeTheme === theme
                            ? "border-b-2 border-primary text-primary"
                            : "border-b-2 border-transparent text-muted-foreground"
                        }`}
            >
              {theme}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-6 gap-2">
          {colors.map((color, idx) => (
            <button
              key={idx}
              className={`w-8 h-8 rounded-sm border ${
                activeColor === color
                  ? "border-foreground"
                  : "border-background"
              }`}
              style={{ background: color }}
              onClick={() => changePrimaryColor(color)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
