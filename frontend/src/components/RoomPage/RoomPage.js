import React, { useState, useContext } from "react";
import { useRef } from "react";
import cntx from "../../context/cntx";
import Board from "../Board/Board";
const RoomPage = () => {
  const a = useContext(cntx);
  const [tool, setTool] = useState("pencil");
  const canvasRef=useRef(null)
  const ctxRef=useRef(null)
  return (
    <div>
      <div>
        <div className="d-flex nav py-3">
          <div className="d-flex">
            <label className="" htmlFor="favcolor">
              Color of pen:
            </label>
            <input
              className=" mx-2"
              type="color"
              id="favcolor"
              name="favcolor"
              value={a.color}
              onChange={(e) => a.setColor(e.target.value)}
            />
          </div>
          <div className="w-25 mx-5">
            <div className="d-flex">
              <label htmlFor="customRange3" className="form-label w-50 ">
                Width of pen:
              </label>
              <input
                type="range"
                className="form-range "
                min="5"
                max="10"
                step="0.5"
                id="customRange3"
                value={a.width}
                onChange={(e) => a.setWidth(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="mx-3">Color: {a.color}</div>
          <div>Width: {a.width}</div>
          <div className="mx-5">[UsersOnline: 0]</div>
        </div>
        <div></div>
      </div>
      <div className="d-flex mt-3 ">
        <div className="d-flex mx-3">
          <label htmlFor="pencil">Pencil</label>
          <input
            type="radio"
            name="tool"
            id="pencil"
            value="pencil"
            className="mt-1 mx-1"
            checked={tool==='pencil'}
            onChange={(e) => setTool(e.target.value)}
          />
        </div>
        <div className="d-flex mx-3">
          <label htmlFor="line">Line</label>
          <input
            type="radio"
            name="tool"
            id="line"
            value="line"
            className="mt-1 mx-1"
            onChange={(e) => setTool(e.target.value)}
            checked={tool==='line'}
          />
        </div>
        <div className="d-flex mx-3">
          <label htmlFor="rect">Rectangle</label>
          <input
            type="radio"
            name="tool"
            id="rect"
            value="rect"
            className="mt-1 mx-1"
            checked={tool==='rect'}
            onChange={(e) => setTool(e.target.value)}
          />
        </div>
      </div>
      <div className="mt-3">
        <button type="button" className=" mx-1 btn btn-sm btn-primary">
          Undo
        </button>
        <button type="button" className="btn btn-sm btn-outline-primary">
          Redo
        </button>
        <button type="button" className="btn btn-sm mx-5 btn-danger">
          Clear Canvas
        </button>
      </div>
      <Board canvasRef={canvasRef} ctxRef={ctxRef} />
    </div>
  );
};

export default RoomPage;
