import { useState } from "react";
import { GripVertical } from "lucide-react";

const defaultItems = [
  { id: 1, label: "Design" },
  { id: 2, label: "Develop" },
  { id: 3, label: "Deploy" },
  { id: 4, label: "Iterate" },
];

export const DragDrop = () => {
  const [items, setItems] = useState(defaultItems);
  const [dragIdx, setDragIdx] = useState(null);
  const [overIdx, setOverIdx] = useState(null);

  const handleDragStart = (idx) => setDragIdx(idx);

  const handleDragOver = (e, idx) => {
    e.preventDefault();
    setOverIdx(idx);
  };

  const handleDrop = (idx) => {
    if (dragIdx === null || dragIdx === idx) return;
    const next = [...items];
    const [moved] = next.splice(dragIdx, 1);
    next.splice(idx, 0, moved);
    setItems(next);
    setDragIdx(null);
    setOverIdx(null);
  };

  const handleDragEnd = () => {
    setDragIdx(null);
    setOverIdx(null);
  };

  return (
    <div className="flex flex-col gap-2 h-full justify-center">
      <p className="text-xs text-muted-foreground uppercase tracking-widest text-center">
        Drag to reorder
      </p>
      <div className="flex flex-col gap-1.5">
        {items.map((item, idx) => (
          <div
            key={item.id}
            draggable
            onDragStart={() => handleDragStart(idx)}
            onDragOver={(e) => handleDragOver(e, idx)}
            onDrop={() => handleDrop(idx)}
            onDragEnd={handleDragEnd}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg glass cursor-grab active:cursor-grabbing transition-all duration-200 ${
              overIdx === idx ? "border border-primary/50 bg-primary/10" : ""
            } ${dragIdx === idx ? "opacity-40" : ""}`}
          >
            <GripVertical className="w-3.5 h-3.5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{item.label}</span>
            <span className="ml-auto text-xs text-muted-foreground/50">
              {idx + 1}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};