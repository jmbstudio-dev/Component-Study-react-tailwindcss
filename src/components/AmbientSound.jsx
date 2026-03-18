import { useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

const sounds = [
  { label: "Rain", emoji: "🌧️", url: "https://assets.mixkit.co/active_storage/sfx/1253/1253-preview.mp3" },
  { label: "Fire", emoji: "🔥", url: "https://assets.mixkit.co/active_storage/sfx/1330/1330-preview.mp3" },
  { label: "Ocean", emoji: "🌊", url: "https://assets.mixkit.co/active_storage/sfx/1200/1200-preview.mp3" },
  { label: "Forest", emoji: "🌲", url: "https://assets.mixkit.co/active_storage/sfx/2517/2517-preview.mp3" },
];

export const AmbientSound = () => {
  const [active, setActive] = useState(null);
  const audioRef = useRef(null);

  const handleSelect = (sound) => {
    if (active?.label === sound.label) {
      audioRef.current?.pause();
      setActive(null);
      return;
    }

    if (audioRef.current) {
      audioRef.current.pause();
    }

    const audio = new Audio(sound.url);
    audio.loop = true;
    audio.volume = 0.1;
    audio.play();
    audioRef.current = audio;
    setActive(sound);
  };

  return (
    <div className="flex flex-col items-center gap-4 h-full justify-center">
      <div className="flex items-center gap-2">
        {active ? (
          <Volume2 className="w-4 h-4 text-primary animate-pulse" />
        ) : (
          <VolumeX className="w-4 h-4 text-muted-foreground" />
        )}
        <p className="text-xs text-muted-foreground uppercase tracking-widest">
          {active ? active.label : "Select a sound"}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2 w-full">
        {sounds.map((sound, idx) => (
          <button
            key={idx}
            onClick={() => handleSelect(sound)}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all ${
              active?.label === sound.label
                ? "bg-primary/20 text-primary border border-primary/50"
                : "glass hover:bg-primary/10 text-muted-foreground hover:text-primary"
            }`}
          >
            <span>{sound.emoji}</span>
            <span className="text-xs">{sound.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};