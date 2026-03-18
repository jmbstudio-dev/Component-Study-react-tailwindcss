import { useState } from "react";
import { RotateCcw } from "lucide-react";

const checkWinner = (board) => {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];
  for (const [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) return board[a];
  }
  return null;
};

export const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);

  const winner = checkWinner(board);
  const isDraw = !winner && board.every(Boolean);

  const handleClick = (idx) => {
    if (board[idx] || winner) return;
    const next = [...board];
    next[idx] = isX ? "X" : "O";
    setBoard(next);
    setIsX(!isX);
  };

  const reset = () => {
    setBoard(Array(9).fill(null));
    setIsX(true);
  };

  return (
    <div className="flex flex-col items-center gap-3 h-full justify-center">
      <div className="flex items-center justify-between w-full">
        <p className="text-xs text-muted-foreground uppercase tracking-widest">
          {winner ? `${winner} wins!` : isDraw ? "Draw!" : `${isX ? "X" : "O"}'s turn`}
        </p>
        <button
          onClick={reset}
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="grid grid-cols-3 gap-1.5">
        {board.map((cell, idx) => (
          <button
            key={idx}
            onClick={() => handleClick(idx)}
            className={`w-10 h-10 rounded-lg glass text-sm font-bold transition-all duration-200
              ${!cell && !winner ? "hover:bg-primary/10 hover:text-primary" : ""}
              ${cell === "X" ? "text-primary" : "text-muted-foreground"}
            `}
          >
            {cell}
          </button>
        ))}
      </div>
    </div>
  );
};