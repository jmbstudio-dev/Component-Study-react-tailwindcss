import { useState, useEffect } from "react";

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
  "#8bbfff",
  "#abb3fe",
  "#67a9bb",
  "#5b9fc1",
  "#72b1a7",
  "#87c187",
  "#d0b991",
  "#cbb1b1",
  "#c89aa1",
  "#cb9fc1",
  "#ad8be0",
  "#d17a91",
];

export const Theme = () => {
  const [activeColor, setActiveColor] = useState(
    () => localStorage.getItem("primaryColor") || colors[0]
  );
  const [activeTheme, setActiveTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );

  const changePrimaryColor = (color) => {
    setActiveColor(color);
    localStorage.setItem("primaryColor", color);
    document.documentElement.style.setProperty("--color-primary", color);
  };

  const changeTheme = (themeName) => {
    setActiveTheme(themeName);
    localStorage.setItem("theme", themeName);
    const theme = themes[themeName];
    Object.entries(theme).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    const savedColor = localStorage.getItem("primaryColor") || colors[0];
    changeTheme(savedTheme);
    changePrimaryColor(savedColor);
  }, []);

  return (
    <div className="grid gap-4">
      <div className="glass rounded-lg flex justify-between items-center">
        <div className="rounded-lg flex justify-between mx-auto space-x-4 p-2">
          {["dark", "soft", "light"].map((theme) => (
            <button
              key={theme}
              onClick={() => changeTheme(theme)}
              className={`pb-1 capitalize transition-all ${
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