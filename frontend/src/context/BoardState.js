import cntx from "./cntx";
import { useState } from "react";

const BoardState = (props) => {
  const [color, setColor] = useState("#000000");
  const [width, setWidth] = useState(5);
  const [isDrawing, setIsDrawing] = useState(false);
  const [elements,setElements]=useState([])

  const values = {
    color,
    setColor,
    isDrawing,
    setIsDrawing,
    width,
    setWidth,
    elements,
    setElements
  };
  return <cntx.Provider value={values}>{props.children}</cntx.Provider>;
};
export default BoardState;
