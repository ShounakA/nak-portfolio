import { createSignal, createEffect, For } from 'solid-js';
import './GameGrid.css';

type GridProps = {
  numRows: number, 
  numCols: number, 
  cellSize: number, 
  tickTime: number
}

export const GameGrid = (props: GridProps) => {
  const numRows = props.numRows;
  const numCols = props.numCols;
  const cellSize = props.cellSize;
  let canvasRef: HTMLCanvasElement;

  const [grid, setGrid] = createSignal<boolean[][]>([[]]);
  const [ctx, setCtx] = createSignal<CanvasRenderingContext2D>(null);

  const drawGrid = () => {
    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numCols; j++) {
        const alive = grid()[i][j];
        const x = j * cellSize + cellSize / 2;
        const y = i * cellSize + cellSize / 2;
        const radius = cellSize / 2 - 2;

        ctx().beginPath();
        ctx().arc(x, y, radius, 0, 2 * Math.PI);
        const bgColor = getComputedStyle(document.documentElement).getPropertyValue('--bg-color');
        ctx().fillStyle = alive ? '#0fb833' : bgColor;
        ctx().fill();
      }
    }
  }

  const canvasClick = (event) => {
    const rect = canvasRef.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const i = Math.floor(y / cellSize);
    const j = Math.floor(x / cellSize);
  
    toggleCell(i, j);
    drawGrid();
  };

  const toggleCell = (row: number, col: number) => {
    const indicesToToggle = [
      [row, col],
      [row - 1, col],
      [row + 1, col],
      [row, col - 1],
      [row, col + 1]
    ];
    for (const [i, j] of indicesToToggle) {
      if (i >= 0 && i < grid().length && j >= 0 && j < grid()[0].length) {
        setGrid((prevGrid) => {
          const newGrid = [...prevGrid];
          newGrid[i][j] = !newGrid[i][j];
          return newGrid;
        });
      }
    }
  };

  const updateGrid = () => {
    const newGrid: boolean[][] = [];

    for (let i = 0; i < numRows; i++) {
      newGrid[i] = [];
      for (let j = 0; j < numCols; j++) {
        const numLiveNeighbors = countLiveNeighbors(i, j);

        if (grid()[i][j]) {
          // Any live cell with fewer than two live neighbors dies, as if by underpopulation.
          // Any live cell with two or three live neighbors lives on to the next generation.
          // Any live cell with more than three live neighbors dies, as if by overpopulation.
          newGrid[i][j] = numLiveNeighbors === 2 || numLiveNeighbors === 3;
        } else {
          // Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
          newGrid[i][j] = numLiveNeighbors === 3;
        }
      }
    }
    setGrid(newGrid);
  };

  const countLiveNeighbors = (row: number, col: number) => {
    let count = 0;
    for (let i = -1; i <= 1; i++) {
      const neighborRow = row + i;
      if (neighborRow < 0 || neighborRow >= numRows) {
        continue;
      }
      for (let j = -1; j <= 1; j++) {
        const neighborCol = col + j;
        if (neighborCol < 0 || neighborCol >= numCols || (i === 0 && j === 0)) {
          continue;
        }

        if (grid()[neighborRow][neighborCol]) {
          count++;
        }
      }
    }

    return count;
  };

  createEffect(() => {
    // Initialize the game board with random live cells
    const newGrid: boolean[][] = [];
    for (let i = 0; i < numRows; i++) {
      newGrid[i] = [];
      for (let j = 0; j < numCols; j++) {
        newGrid[i][j] = Math.random() < 0.5;
      }
    }
    setGrid(newGrid);
    const tempCtx = canvasRef.getContext('2d');
    setCtx(tempCtx);
    
    // Update the game board every 250ms
    const intervalId = setInterval(() => {
      updateGrid();
      drawGrid();
    }, props.tickTime);

    return () => clearInterval(intervalId);
  });

  return (
    <div class="conways-container">
      <canvas ref={canvasRef} onClick={canvasClick} height={numRows * cellSize} width={numCols * cellSize}/>
    </div>
  );
};