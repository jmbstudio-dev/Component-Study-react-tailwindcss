import { useState } from "react";

const parse = (text) => {
  return text
    .replace(/^### (.+)/gm, '<h3 class="text-base font-bold mt-2">$1</h3>')
    .replace(/^## (.+)/gm, '<h2 class="text-lg font-bold mt-2">$1</h2>')
    .replace(/^# (.+)/gm, '<h1 class="text-xl font-bold mt-2">$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-primary">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em class="italic">$1</em>')
    .replace(/`(.+?)`/g, '<code class="bg-surface px-1 rounded text-xs text-primary">$1</code>')
    .replace(/^- (.+)/gm, '<li class="list-disc ml-4 text-muted-foreground">$1</li>')
    .replace(/\n/g, "<br/>");
};

const placeholder = `# Hello
**bold** and *italic*
\`inline code\`
- item one
- item two`;

export const MarkdownPreviewer = () => {
  const [text, setText] = useState(placeholder);
  const [preview, setPreview] = useState(false);

  return (
    <div className="flex flex-col gap-2 h-full">
      <div className="flex items-center justify-between">
        <p className="text-xs text-muted-foreground uppercase tracking-widest">
          {preview ? "Preview" : "Editor"}
        </p>
        <button
          onClick={() => setPreview((prev) => !prev)}
          className="text-xs px-2 py-1 rounded glass hover:bg-primary/10 hover:text-primary transition-all"
        >
          {preview ? "Edit" : "Preview"}
        </button>
      </div>

      {preview ? (
        <div
          className="flex-1 text-sm text-foreground overflow-auto"
          dangerouslySetInnerHTML={{ __html: parse(text) }}
        />
      ) : (
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 text-xs bg-transparent border border-border/50 rounded-lg p-2 text-muted-foreground focus:outline-none focus:border-primary resize-none font-mono"
        />
      )}
    </div>
  );
};