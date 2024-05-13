import { React } from "react";
import { useDroppable } from "@dnd-kit/core";

export default function (props) {
  
  const {isOver, setNodeRef}= useDroppable({
    id:props.id
  })
  const style = {
    color: isOver ? "blue" : undefined ,
    //opacity: isOver ? 1 : 0.5
  };
  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  )
}