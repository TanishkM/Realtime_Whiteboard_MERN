import React, { useContext, useEffect } from "react";
import "./Board.css";
import rough from "roughjs";
import cntx from "../../context/cntx";

const Board = ({ canvasRef, ctxRef }) => {
  // const roughGenerator=rough.generator()
  const a = useContext(cntx);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctxRef.current = ctx;
    // eslint-disable-next-line
  }, []);

  const handleMouseDown = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    a.setElements((prevElements) => [
      ...prevElements,
      {
        type: "pencil",
        offsetX,
        offsetY,
        path: [[offsetY, offsetY]],
        stroke: a.color,
      },
    ]);
    a.setIsDrawing(true);
  };
  const handleMouseMove = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    if (a.isDrawing) {
      const { path } = a.elements[a.elements.length - 1];
      const newPath = [...path, [offsetX, offsetY]];

      a.setElements((prevElements) =>prevElements.map((ele, index) => {
          if (index === a.elements.length - 1) {
            return {
              ...ele,
              path: newPath,
            };
          } else {
            return ele;
          }
        })
      );
    }
  };
  const handleMouseUp = (e) => {
    a.setIsDrawing(false);
  };
  return (
    <div>
      {/* {JSON.stringify(a.elements)} */}
      <div className="container board mt-5 ">
        <canvas
          id="canvas"
          ref={canvasRef}
          value={a.board}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onChange={(e) => a.setBoard(e.target.value)}
        ></canvas>
      </div>
    </div>
  );
};

export default Board;
